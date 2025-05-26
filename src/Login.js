import './App.css';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import React, { useState } from "react";
import axios from "axios"; 

function Login(props){
	const butval="Our Gallery";
	const navigate = useNavigate();
	const [schooldata, setSchooldata] =useState({
		email:"",
		Pass:"",
		agree:false
	});	
const {email,Pass,agree}=schooldata;
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
    const res = await axios.post("http://localhost:3000/login",
      schooldata,
	
    )
    if (res.status === 200) {
      const {response, user} = res.data; 
      setResponseMessage(response);
	  if (response === "Logged in successfully!") {
                    // Save user data in localStorage
                    localStorage.setItem("user", JSON.stringify(user));
					
                    
                    // Redirect to Dashboard
                    navigate("/dashboard");
					window.location.reload();
                }
    }
	
	} catch (error) {
    console.error("Error:", error);
  } 
};



	return(
	<div className="mainlogiv">
  
	<div className="subdiv oneone">
	<h1>Champion School</h1>
	<h2>Hello </h2>
	<p>As the oldest continuously run educational institution, The Champion School remains committed to providing an academically rigorous education to students who will walk out of school ready for lives of leadership and service to their community. From literacy to music and art, each day at the Champions School is filled with activities that are both enriching and fun.</p>
	<div className="logbut">
	<Link to="/gallery"><Button value={butval} onClick={() => navigate('/gallery.js')}/></Link>
	</div>
	</div>
	<div className="subdiv twotwo">
	<h1>Login Now</h1>
	<div className="logininput">
	<label>Email </label><br/><input type="text"  name="email" value={email} onChange={handleform}  /><br/>
	<label>Password</label><br/><input type="Password" name="Pass" value={Pass} onChange={handleform} /><br/>
	<input type="checkbox" name="agree" onChange={handleform} /> <label className="change">i agree to conditions of use and privacy</label><br/>
	<input type="submit" name="submit" value="Login" onClick={handleSubmit}/>
	
	<p className="response">
	  {responseMessage}
	  </p>
	<p>Dont have an account? <Link to="/register"> <b>Sign Up</b></Link></p>
	
	</div>
	</div>
	</div>
	);
}
export default Login; 