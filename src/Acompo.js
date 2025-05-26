import './App.css';
function Acompo(props){
	return(
	<div className="aboutusinfo">
	<div className="aboutusinfodiv"><h2>{props.h2text}</h2></div>
	<div className="aboutusinfodiv text"><p>{props.ptext}</p></div>
	</div>
	);
}
export default Acompo; 