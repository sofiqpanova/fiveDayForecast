var React = require('react');
var ReactDOM = require('react-dom');
var request = require('request');
var Select = require('react-select');

import { Day } from './day';
import { cities } from './cities';

var APIKEY = 'pHUCd60RfMK7rNmsCXyGGFs9Zw0la4Hp';
var App = React.createClass({
  getInitialState: function () {
    return {
      expanded: false,
      selectedCity: "No city selected"
    };
  },
  toggle: function () {
    this.setState({
      expanded: !this.state.expanded
    })
  },

  selectCity: function (city) {
    this.loadData(city);
  },

  loadData: function (city = "Sofia") {
    console.log("Getting forecast for city: " + city);
    var that = this;
    var url = "http://localhost:8080/api/fdforecast/" + city;
    var options = {
      "url": url,
      "method": "GET",
      "bodyParams": {},
      "auth": {
        "user": APIKEY,
        "password": ""
      },
      "gzip": true,
      "json": true
    };
    request(options, function (err, response, body) {
      if (body.code < 200 || body.code >= 400) {
        that.setState({
          data: err,
          selectedCity: city
        });
      } else {
        that.setState({
          data: body.slice(0, 5),
          selectedCity: city
        })
      }
    });
  },

  render: function () {
    var days = [];
    var result;
    if (this.state.data) {
      this.state.data.forEach(function (info, index) {
        days.push(
          <Day
            key={index}
            day={info[0]}
            max={info[1]}
            min={info[2]}
            expanded={this.state.expanded}
          />
        )
      }.bind(this))
    }

    if (days.length > 0) {
      result = <div>{days}</div>
    } else {
      result = <div className="row">
        <div className="grid-x"><br />
          <div className="columns float-center tet-centered"> <h6> No Weather Information! </h6> </div>
        </div>
      </div>
    }

    return (
      <div className="grid-x">
        <div className="vcenter large-10 medium-10 small-12 large-offset-1 medium-offset-1 small-offset-0 large-centered">
          <Select
            name="form-field-name"
            value={this.state.selectedCity}
            options={cities}
            onChange={this.selectCity}
            clearable={false}
          />
          <br />
          <div onClick={this.toggle}>{result}</div>
        </div>
      </div>
    );
  }
});

export function boot() {
  ReactDOM.render(<App />, document.getElementById('body'));
}
