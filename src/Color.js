import React from 'react';
import { useParams, Link, Redirect } from 'react-router-dom';
import './Color.css';

const Color = ({ colors }) => {
	const {color} = useParams();

	if (color) {
		const selectedColor = colors.find(c => c.colorName===color);
		if (selectedColor) {
			return (
				<div className="Color" style={{ backgroundColor: selectedColor.colorValue}}>
					<h2>This is {selectedColor.colorName} !</h2>
					<button><Link to="/colors">Go Back</Link></button>
				</div>
			)
		}
	}

	return <Redirect to="/colors" />
}

export default Color;