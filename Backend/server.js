const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.listen(8080, ()=>{
    console.log("the server is running on 8080");
});

main().then(res=>{
    console.log("Connection Successful");
}).catch(err=>{
    console.log(err);
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Practise');
}

const registerSchema = new mongoose.Schema({
    firstname: {
        required: true,
        type: String
    },
    lastname: {
        required: true,
        type: String
    },
    username: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    confirmpassword: {
        required: true,
        type: String
    },
});

const Register = mongoose.model("Registers", registerSchema);

// Register
app.post("/api/register", async (req,res)=>{
    
    try {
        const {firstname, lastname, username, email, password, confirmpassword} = req.body;

        const newUser = new Register({
            firstname: firstname,
            lastname: lastname,
            username: username,
            email: email,
            password: password,
            confirmpassword: confirmpassword
        });
        await newUser.save();
        res.status(201).send({message: 'User inserted successfully'});

    } catch (error) {
        console.log(err);
        res.status(500).send({message: 'Failed to register user'});
    }
});

// Login
app.post("/api/login", async (req,res)=> {
    try {
        const {email,password} = req.body;
        const user = await Register.findOne({email: email});
        if(!user){
            return res.status(400).send({message: 'invalid user'});
        }

        if(user.password != password){
            return res.status(400).send({message: 'incorrect password'});
        }

        res.status(200).send({message: 'login succesful'});
    } catch (error) {
        console.log(error)
    }
});

