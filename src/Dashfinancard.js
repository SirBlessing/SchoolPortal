import './App.css';

function Dashfinancard(props){
	
	return(
	<div className = "dashcard"><center>
    <img src={require("./image/" + props.image)} alt="vieg" />
	<p><b>{props.cardprice}</b></p>
	<p>{props.cardtext}</p>
	
	</center>
	</div>
	);
}
export default Dashfinancard;

