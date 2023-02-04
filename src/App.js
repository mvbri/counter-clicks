import './App.css';
import mainLogo from './img/logo.png';

function App() {
	return (
		<div className='App'>
			<div className='container-logo'>
				<img className='main-logo' alt='Logo principal' src={mainLogo} />
			</div>
			<div className='container-counter'></div>
		</div>
	);
}

export default App;
