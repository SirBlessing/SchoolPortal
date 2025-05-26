import './App.css';
import axios from 'axios';
import  { useState } from 'react';
function Contact(){
	const [contactresponse, setContactresponse] = useState("")
	const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/send-email', {
        to: 'emailtestolawale@gmail.com', // Or use `formData.email` if you're sending to user
        subject: formData.subject,
        message: `From: ${formData.fullName} <${formData.email}>\n\n${formData.message}`,
      });

      if (response.data.success) {
        setContactresponse('Message sent successfully!');
        setFormData({
          fullName: '',
          email: '',
          subject: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setContactresponse('Something went wrong. Please try again.');
    }
	
  };

	
	
	return(
	<div className="contactmain">
	<div className="contactsubdiv cone">
	
	<h1>Contact Us</h1>
	<p> wish to enquire about admissions, syllabus or anything else? you can walk in during office hours, give us call or simply submit the form here.</p>
	<p className="ptest">Address</p>
	<h2>1234 Demo Ave, Austin Tx 56789, United States</h2>
	<hr/>
	<p>Phone</p>
	<h2>+1234567890</h2>
	<hr/>
	<p>Email</p>
	<h2>dummymail@mail.com</h2>
	<hr/>
	</div>
	<div className="contactsubdiv ctwo">
	<p>Send Us a Message</p>
	<input type="text" placeholder="Full name" name="fullName" value={formData.fullName} onChange={handleChange}/><br/>
	<input type="text" placeholder="Email address" name="email"  value={formData.email} onChange={handleChange}/><br/>
	<input type="text" placeholder="Subject" name="subject" value={formData.subject} onChange={handleChange}/><br/>
	<textarea  placeholder="Your message" name="message" value={formData.message} onChange={handleChange}/><br/>
	<input type="Button" value="Submit" onClick={handleSubmit}/>
	<p>{contactresponse}</p>
	</div>
	</div>
	);
}
export default Contact; 