import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import mainLogo from './img/logo.png';
import { useState } from 'react';

function App() {
	const [numClick, setNumClick] = useState(0);

	const clickHandler = () => {
		setNumClick(numClick + 1);
	};

	const resetCounter = () => {
		setNumClick(0);
	};

	return (
		<div className='App'>
			<div className='container-logo'>
				<img className='main-logo' alt='Logo principal' src={mainLogo} />
			</div>
			<div className='container-counter'>
				<Counter numClick={numClick} />
				<Button
					text='Click'
					isAClickButton={true}
					clickHandler={clickHandler}
				/>
				<Button
					text='Reset'
					isAClickButton={false}
					clickHandler={resetCounter}
				/>
			</div>
		</div>
	);
}

export default App;
