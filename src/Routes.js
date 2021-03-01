import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ColorList from './ColorList';
import Color from './Color';
import AddColorForm from './AddColorForm';

const Routes = () => {
	const defaultColors = [
		{ colorName: "red", colorValue: "red" },
		{ colorName: "yellow", colorValue: "yellow" },
		{ colorName: "green", colorValue: "green" }
	]

	const initialColors = JSON.parse(window.localStorage.getItem("colors")) || defaultColors;

	const [colors, setColors] = useState(initialColors);

	const addColor = (newColor) => {
		setColors(colors => [...colors, newColor]);
	}

	useEffect(() => 
		window.localStorage.setItem("colors", JSON.stringify(colors)),
		[colors]
	);

	return (
		<Switch>
			<Route exact path="/colors">
				<ColorList colors={colors} />
			</Route>

			{/* this Route must be placed before route of /colors/:color */}
			<Route exact path="/colors/new">
				<AddColorForm addColor={addColor}	/>
			</Route>

			<Route exact path="/colors/:color">
				<Color colors={colors} />
			</Route>

			<Redirect to="/colors" />
		</Switch>
	)
}

export default Routes;