import './App.css';
import Button from './Button';
function Enrolledcoursecard(props){
	const butvalll="View";
	return(
	<div className = "enrollcard">
	<div className = "cardbuttiontar">
	<p>{props.cardtext}</p>
	<Button value={butvalll} />
	</div>
	<div>
	<img src={require("./image/" + props.image)} alt="my Test Image" />
	</div>
	</div>
	);
}
export default Enrolledcoursecard;

