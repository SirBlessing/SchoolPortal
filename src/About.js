import './App.css';
import Acompo from'./Acompo';
function About(props){
	const firsth2="Our mission";
	const firstp="Our mission at Champion school is to develop the unique abilities and potential of each child by offering an enriched educational program. We strive for excellence through a hands-on approach. Rich traditions rooted in our innovative curriculum grow productive, caring, and intellectually curious citizens."
	const secondh2="Our Core Value";
	const secondp="We have a culture that is modern, relevant, and inspires students to have a brighter future. We are determined in our approach to learning, are creative in our thinking, and bold in our ambitions."
	const thirdh2="Our Philosophy"
	const thirdp="We, at Champion School, follow a child-centered educational approach. We make sure that it is based on scientific observations from birth to adulthood. We believe that a child is naturally curious and is capable of initiating learning in a supportive and thoughtfully prepared environment."
	return(
	<div className="mainabout">
	<div className="aboutmainh"><center><h1>ABOUT US</h1></center></div>
	<div className="aboutdiv1">
	<div className="abdii"><h1>The Champion School Texas</h1></div>
	<div className="abdii" ><p>As the oldest continuously run educational institution, The Champion School remains committed to providing an academically rigorous education to students who will walk out of school ready for lives of leadership and service to their community. From literacy to music and art, each day at the Champions School is filled with activities that are both enriching and fun.
We strive to be committed to the students we are privileged to serve, in our alumni association, our dedicated, talented faculty and staff. We also take pride in having the most active and helpful group of partners, visionary parents, well-wishers, alumni and friends.
</p></div>
	</div>
	<div><Acompo h2text={firsth2} ptext={firstp}/></div>
	<hr/>
	<div><Acompo h2text={secondh2} ptext={secondp}/></div>
	<hr/>
	<div><Acompo h2text={thirdh2} ptext={thirdp}/></div>
	</div>
	
	);
}
export default About; 