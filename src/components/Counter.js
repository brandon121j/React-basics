import React from 'react';

function Counter({counter, setCounter}) {
	

	return (
		<div id="counterContainer">
			<div id="counterContent">
				<div className="button">
					<button onClick={() => setCounter(counter - 1)}>Remove 1</button>
				</div>
				<h3>{counter}</h3>
				<div className="button">
					<button onClick={() => setCounter(counter + 1)}>Add 1</button>
				</div>
			</div>
		</div>
	);
}

export default Counter;
