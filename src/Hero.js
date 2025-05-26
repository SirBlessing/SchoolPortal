import './App.css';
//import {Link} from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button'

function Hero(props){
	const navigate = useNavigate();
	const butval="Our Gallery";
	return(
	<div className="herosec">
	<div className="Herotext">
	<h2>The Champion School Texas</h2>
	<p>This is where we teach students skills they need to transform themselves, others, and our global communities.</p>
	</div>
	<div className="Herobut">
	<Link to="/gallery"><Button value={butval} onClick={() => navigate('/gallery.js')}/></Link>
	</div>
	</div>
	);
}
export default Hero;