import './App.css';
function Content(props){
return(
	<div className = "cont">
    <img src={require("./image/" + props.image)} alt="view" />
	</div>
)
}
export default Content;