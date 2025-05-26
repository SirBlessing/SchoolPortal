import './App.css';
function Button(props){
	return(
	<input type="button" value={props.value} onClick={props.onClick} />
	);
}
export default Button; 