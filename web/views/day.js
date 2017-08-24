var React = require('react');
import { Temps } from './temps';

export const Day = (props) => {
	return (
		<div className=" large-12 medium-12 small-12 grid-x row ">
			<div className="large-8 medium-6 small-12 columns float-left pad"> <h6> {props.day} </h6> </div>
			<Temps style={"large-4 medium-6 small-12 columns float-right pad"} min={props.min} max={props.max}></Temps>
		</div>
	);
};
