import React from 'react';
import {Link} from 'react-router-dom';
import './ColorList.css';

const ColorList = ({ colors }) => {
	return (
		<div className="ColorList">
			<h2>Welcome to the Color Factory!</h2>
			<h3 className="ColorList-addColorBtn"><Link to="/colors/new">Add A Color</Link></h3>
			<h4>Please select a color: </h4>
			{colors.map(color => 
				<p key={color.colorName}>
					<Link to={`/colors/${color.colorName}`}>{color.colorName}</Link>
				</p>
			)}
		</div>
	)
}

export default ColorList;