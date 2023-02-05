import React , { useState } from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate} from 'react-router-dom';


const AdminLogin = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/admin_login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        const getData = res.json();

        if (res.status === 4000 || !getData) {
            window.alert("Invalid Credentials");

        } else {
            window.alert("Login Succesfull")
            navigate("/admin");
        }
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="card">
                            <div className="card-body">
                                <form method="POST" className='form'>
                                    <MDBInput className="mb-4" name="email" type="email" id="form1Example1" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <MDBInput className="mb-4" name="password" type="password" id="form1Example2" label="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />

                                    <MDBBtn onClick={handleSubmit} type="submit" value="submit" block>
                                        Sign in
                                    </MDBBtn>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default AdminLogin;