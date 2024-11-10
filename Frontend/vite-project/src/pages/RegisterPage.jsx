import { useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function RegisterPage() {

    let [formdata, setformdata] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        confirmpassword: ''
    });

    const handlechange = (e) => {
        const {name, value} = e.target;
        setformdata({
            ...formdata,
            [name]: value,
        });
    }

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/register', formdata);
            console.log(response.data.message);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <h1 className="text-xl mb-5 font-semibold">RegisterPage</h1>
            <form action="" onSubmit={handlesubmit}>
                <div><input type="text" value={formdata.firstname} onChange={handlechange} name="firstname" placeholder="firstname" /></div>
                <div><input type="text" value={formdata.lastname} onChange={handlechange} name="lastname" placeholder="lastname" /></div>
                <div><input type="text" value={formdata.username} onChange={handlechange} name="username" placeholder="username" /></div>
                <div><input type="email" value={formdata.email} onChange={handlechange} name="email" placeholder="email" /></div>
                <div><input type="password" value={formdata.password} onChange={handlechange} name="password" placeholder="password" /></div>
                <div><input type="password" value={formdata.confirmpassword} onChange={handlechange} name="confirmpassword" placeholder="confirm password" /></div>
                <div><button type="submit">Register</button></div>
                <p>Already have an account <Link to='/'>Login</Link></p>
            </form>
        </div>
    );
}