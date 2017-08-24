var React = require('react');
import { Details } from './details';

export const Temps = (props) => {
	console.log(props.style);
	return (
		<div className={props.style}>
			<Details style={"large-6 medium-6 small-12 columns float-left text-right"} title={"Minimal: " + props.min + "°C"} />
			<Details style={"large-6 medium-6 small-12 columns float-right text-right"} title={"Maximal: " + props.max + "°C"} />
		</div>
	);
};
