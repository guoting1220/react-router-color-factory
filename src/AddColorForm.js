import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './AddColorForm.css';

const AddColorForm = ({ addColor }) => {

	// const [formData, setFormData] = useState({});

	// if the input is not initialy set like above and set to be null, it is initially considered 	uncontrolled. This will raise error:
	// 	component is changing an uncontrolled input of type text to be controlled. Input elements should 		 not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled 			  or uncontrolled input element for the lifetime of the component"
	// So, the input will be controlled from the start, 
	const [formData, setFormData] = useState({ colorName: "", colorValue: "#ffffff"});
	const history = useHistory();

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormData(formData =>
			({ ...formData, [name]: value })
		)
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		addColor(formData);
		history.push("/colors");
	}

	return (
		<div className="AddColorForm">
			<form onSubmit={handleSubmit}>
				<div className="AddColorForm-input">
					<label htmlFor="colorName"><b>Color Name</b>: </label>
					<input
						name="colorName"
						id="colorName"
						type="text"
						value={formData.colorName}
						onChange={handleChange}
					/>
				</div>
				
				<div className="AddColorForm-input">
					<label htmlFor="colorValue"><b>Color Value</b>: </label>
					<input
						name="colorValue"
						id="colorValue"
						type="color"
						value={formData.colorValue}
						onChange={handleChange}
					/>
				</div>

				<button className="AddColorForm-btn">Add this color</button>
			</form>
		</div>
	)
}

export default AddColorForm;