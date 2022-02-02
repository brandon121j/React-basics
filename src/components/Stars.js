import React from 'react';
import stars from '../data/star.png';
import '../App.css';

function Stars({ counter }) {
    let starArr = []

	const starAdder = (counter) => {
		for (let i = 0; i < counter; i++) {
			starArr.push(<div className='eachStar' key={i}><img src={stars} width='25px'/></div>)
		}
        return starArr;
	};

	return (
		<div id="starContainer">
			<div className="starArea">{starAdder(counter)}</div>
		</div>
	);
}

export default Stars;
