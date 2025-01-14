import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import toast from 'react-hot-toast'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(name, email, password, phone, address);
        // toast.success('Register Successfully')
        try {
            const res = await axios.post('/api/v1/auth/register', { name, email, password, phone, address });
            if (res.data.success) {
                toast.success(res.data.message)
                navigate("/login");
            } else {
                toast.success(res.data.message);

            }
        } catch (error) {
            console.log(error)
            toast.error("something went wrong");
        }
    }

    return (
        <Layout>
            <div className='register'>
                <h1>Register Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="text"
                            value={name} onChange={(e) => setName(e.target.value)}
                            className="form-control"
                            id="exampleInputName"
                            aria-describedby="emailHelp"
                            placeholder='Enter Your Name' />
                    </div>

                    <div className="mb-3">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}

                            className="form-control"
                            id="exampleInputName"
                            aria-describedby="emailHelp"
                            placeholder='Enter Your email'
                            required />

                    </div>

                    <div className="mb-3">
                        <input type="password"
                            value={password} onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            id="exampleInputName"
                            aria-describedby="emailHelp"
                            placeholder='Enter Your Password'
                            required />
                    </div>

                    <div className="mb-3">
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required
                            className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder='Enter Your Phone' />
                    </div>

                    <div className="mb-3">
                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required
                            className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder='Enter Your address' />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>



        </Layout>
    )
}

export default Register
