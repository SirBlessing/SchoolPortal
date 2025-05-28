import './App.css';
// import logooo from './image/logooo.png';
import  { useState } from "react";  // useState comes from React
import { Link,useNavigate } from "react-router-dom";  // useNavigate comes from react-router-dom

import Button from './Button';
import axios from "axios"; 
function Register(props){
	const butval="Our Gallery";
	const navigate = useNavigate();
	const [schooldata, setSchooldata] =useState({
		surname:"",
		FN:"",
		ON:"",
		sex:"",
		course:"",
		MON:"",
		email:"",
		Pass:"",
		agree:false
	});	
const {surname,FN,ON,sex,course,MON,email,Pass,agree}=schooldata;
const [responseMessage,setResponseMessage] = useState("");
function handleform(event){
		const {type, name, value,checked}= event.target;
		setSchooldata(function(form){
		  return {...form,[name]:type==="checkbox"?checked:value}
	  });
  }

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post ("http://localhost:3000/register", //("http://localhost:80/blessing/schoolregister.php",
     
	 schooldata,
	
    )
    if (res.status === 200) {
      const { response } = res.data; 
      setResponseMessage(response);
    }
	
  } catch (err) {
    console.log(err); 
  }
};
	return(
	<div className="regtest">
	
	<center><h2>Admission Portal</h2></center>
	<div className="mainlogiv">
  
	<div className="subdiv oneone testregister">
	<h1>Champion School</h1>
	<h2>Hello </h2>
	<p>As the oldest continuously run educational institution, The Champion School remains committed to providing an academically rigorous education to students who will walk out of school ready for lives of leadership and service to their community. From literacy to music and art, each day at the Champions School is filled with activities that are both enriching and fun.</p>
	<div className="logbut">
	<Link to="/gallery"><Button value={butval} onClick={() => navigate('/gallery.js')}/></Link>
	</div>
	</div>
	<div className="subdiv twotwo tworeg">
	<h1>Register Now</h1>
	<div className="logininput">
	<label><b>Surname :</b></label><br/><input type="text" name="surname" placeholder =" Enter your Surname" value={surname} onChange={handleform}/><br/>
	<label><b>First Name :</b></label><br/><input type="text" name="FN" placeholder ="Enter your First Name" value={FN} onChange={handleform} /><br/>
	<label><b>Other Name :</b></label><br/><input type="text" name="ON" placeholder ="enter your other names" value={ON} onChange={handleform}/><br/>
	<b className="shifts">Sex :</b><label><b> Male </b> </label> <input type="radio" name="sex"  value={sex} onChange={handleform}/> <label> <b>Female </b></label> <input type="radio" name= "sex" value ="female" onChange={handleform}/> <br/>
	<label><b>Course :</b></label><br/><input type="text" name="course" placeholder ="e.g microbiology" value={course} onChange={handleform}/> <br/> 

	<label> <b> Mode Of Entry :</b></label> <br/><select name ="MON" value={MON} onChange={handleform} ><option name ="MON" value ="direct entry" >Direct Entry </option> <option name ="MON" value="jamb" >Jamb</option> </select><br/> 
<label><b>Email Address :</b></label><br/><input type="text" name="email" placeholder ="Enter your email Address" value={email} onChange={handleform} /><br/> 

<label> <b> Password :</b> </label> <input type="password" name ="Pass" placeholder="enter your password" value={Pass} onChange={handleform}/> <br/>
<input type="checkbox" name="agree" value={agree} onChange={handleform} /> <label><b> I Agree to terms and condition guiding the use of this site </b></label> <br/>
<input type="submit" name="submit" value="Create" onClick={handleSubmit}/> <br/>
<p className="response">
	  {responseMessage}
</p>
	<p>Already have an account? <Link to="/login"> <b>Login</b></Link></p>
	
	</div>
	</div>
	</div>
	</div>
	);
}
export default Register; 