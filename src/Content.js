import './App.css';
function Content(props){
return(
	<div className = "cont">
    <img src={require("./image/" + props.image)} alt="my Test Image" />
	</div>
)
}
export default Content;