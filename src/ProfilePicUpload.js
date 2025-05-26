import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const ProfilePicUpload = () => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadedUrl, setUploadedUrl] = useState('');

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile)); // Show preview
        }
    };

    const handleUpload = async () => {
        if (!file) {
            alert('Please select a file first!');
            return;
        }

        setUploading(true);
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:3000/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            setUploadedUrl(response.data.fileUrl); // Set uploaded image URL
            alert('Upload successful!');
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Upload failed');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {preview && <img src={preview} alt="Preview" style={{ width: '150px', height: '150px', borderRadius: '50%', marginTop: '10px' }} />}
            <button onClick={handleUpload} disabled={uploading} style={{ display: 'block', marginTop: '10px' }}>
                {uploading ? 'Uploading...' : 'Upload'}
            </button>
            {uploadedUrl && <p>Uploaded Image: <img src={uploadedUrl} alt="Profile" style={{ width: '150px', height: '150px', borderRadius: '50%' }} /></p>}
        </div>
    );
};


const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) {
        console.error("No file selected");
        return;
    }

    console.log("Uploading file:", file.name);

    const formData = new FormData();
    formData.append("file", file); 

    try {
        const response = await axios.post("http://localhost:3000/", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        console.log("Upload success:", response.data);
    } catch (error) {
        console.error("Error uploading file:", error.response?.data || error.message);
    }
};






//const sql= "SELECT surname FROM schoolregister WHERE agree > 0";
	//var values = 
	//con.query(sql, function(err,res){
	//	if (err) throw err;
	//	console.log("selected data:");
	//	var i=0;
	//	while(i < res.length){
	//	console.log(res[i].surname)
	//	i++;
// Fix res.sendFile() issue
//app.get('/', (req, res) => {
 //   res.redirect('http://localhost:3001/');
//});




//app.get('/user/:email', (req, res) => {
   // const email = req.params.email;
  //  con.query("SELECT surname, firstname, course, email FROM schoolregister WHERE email = ?", [email], (err, results) => {
        //if (err) {
          //  return res.status(500).json({ response: "Server error" });
       // }
       // if (results.length === 0) {
        //    return res.status(404).json({ response: "User not found" });
      //  }
     //   res.json(results[0]); 
   // });
//});

//	});
//});

//con.connect(function(err){
//	if(err) throw err;
//	console.log("Database is connected!");
//	const sql= "INSERT INTO schoolregister (id, surname, firstname, othername, sex, course, mode, email, password, agree)  values ?";
//	var values = [['', 'olajegun', 'gbemi', 'tola', 'male', 'microbiology', 'direct entry','olajegun@gmail.com', '89eredfd', 1],
//	['', 'ogungbemi', 'gbemise', 'kunle', 'female', 'english', 'jamb','grorytola@yahoo.com', 'yhtre456', 0],
//	['', 'tungba', 'obesere', 'collins', 'male', 'chemistry', 'direct entry','tungbatungba@gmail.com', 'tyuehs987', 1]];
//	con.query(sql,[values], function(err,res){
//		if (err) throw err;
//		
//		console.log(values.length +"Data have been inserted succesfully ")
//	});
//});

	





export default ProfilePicUpload;
