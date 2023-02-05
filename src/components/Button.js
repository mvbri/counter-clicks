import React from 'react';
import '../styles/Button.css';

function Button({ text, isAClickButton, clickHandler }) {
	return (
		<button
			className={isAClickButton ? 'click-button' : 'reset-button'}
			onClick={clickHandler}
		>
			{text}
		</button>
	);
}

export default Button;
