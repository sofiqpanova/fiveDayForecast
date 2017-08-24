var React = require('react');

export const Details = ({ title, style }) => {
	return (
		<div className={style}> <h6> {title} </h6> </div>
	);
};
