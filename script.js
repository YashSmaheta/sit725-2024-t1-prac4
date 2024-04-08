

// app.get('/', (req, res) => res.send('Hello World!'))

// const express = require('express');
// const { MongoClient } = require('mongodb');
// const app = express();
// const port = 3000;

// const url = 'mongodb://localhost:27017';
// const dbName = 'yashFormDb';

// app.use(express.json());

// app.post('/submit', async(req,res)=> {

//     try{
//         const client = new MongoClient(url);
//         await client.connect();
//         const db = client.db(dbName);
//         const collection = db.collection('formData');

//         const result = await collection.insertOne(req.body);

//         res.status(201).json({ message: 'Form Data Saved Success!!!!!', result});
//     }
//     catch(err){
//         console.error('Error occured !!! :(', err);
//         res.status(500).json({error: 'Internal Server error'});
//     }
//     finally{
//         client.close();
//     }
// });


// app.listen(port, () => { console.log(`Example app listening on port ${port}!`)
// });


const submitForm = () => {
    let formData = {
        first_name : document.getElementById("fname").value,
        last_name : document.getElementById("lname").value,
        mobile_no : document.getElementById("mobile").value,
        email : document.getElementById("email").value

    };

    fetch('/submit',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Data Submitted", data);
    })
    .catch(error =>{
        console.error("Error in submitting form Data:", error);
    });
    console.log("Form Data: ", formData);
};

$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#submitForm').click(() => {
        submitForm();
    })
    $('.modal').modal();
});
