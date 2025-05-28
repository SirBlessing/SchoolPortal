import './App.css';
// import logooo from './image/logooo.png';
// import galimg1 from './image/galimg1.jpg';
// import galimg2 from './image/galimg2.jpg';
// import galimg3 from './image/galimg3.jpg';
// import galimg4 from './image/galimg4.jpg';
// import galimg5 from './image/galimg5.jpg';
// import galimg6 from './image/galimg6.jpg';
// import galimg7 from './image/galimg7.jpg';
import Content from './Content'
function Gallery(props){
	const imageAr = ["galimg1.jpg","galimg2.jpg","galimg3.jpg"];
	const imageAr2 = ["galimg4.jpg","galimg5.jpg","galimg6.jpg","galimg7.jpg"];
  const myimages = imageAr.map(function(imge){
  return <div>  <Content image = {imge} /></div>
  })
  const myimages2 = imageAr2.map(function(imge2){
  return <div>  <Content image = {imge2} /></div>
  })
	
	return(
	<div>
	<div className="galdiv"><h2>Our Gallery</h2></div>
	<div className="imgdiv">
		{myimages2}
	</div>
	<div className="imgdiv">
		{myimages}
	</div>
	
	</div>
	);
}
export default Gallery; 