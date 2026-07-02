import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import './Signup.scss'
import { IoMdArrowRoundBack } from "react-icons/io";
import { postRegister } from '../../services/apiService'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const [isShowPassword, setIsShowPassword] = useState(false)

    const navigate = useNavigate()

    const handleBack = () => {
        navigate('/');
    }

    const handleLogin = () => {
        navigate('/login')
    }


    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSignUp = async () => {
        // validate
        const isValidEmail = validateEmail(email);

        if (!isValidEmail) {
            toast.error("Email không hợp lệ");
            return;
        }
        if (!userName.trim()) {
            toast.error("Username không được để trống");
            return;
        }
        if (!password) {
            toast.error("Password không được để trống");
            return;
        }

        let data = await postRegister(email, userName, password)
        // console.log(">>> check res : ", data)
        if (data && +data.EC === 0) {
            toast.success(data.EM);
            navigate('/login');
        }
        if (data && +data.EC !== 0) {
            toast.error(data.EM);
        }
    }

    return (
        <div className="signup-container">
            <div className="header">
                <span>You already have an account ?</span>
                <button onClick={() => handleLogin()}>Log In</button>
            </div>
            <div className="title col-4 mx-auto">
                REGISTER
            </div>
            <div className="content-form col-4 mx-auto">
                <div className='form-group' >
                    <label >Email</label>
                    <input
                        type="email"
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='form-group' >
                    <label >User Name</label>
                    <input
                        type="text"
                        className='form-control'
                        value={userName}
                        onChange={(event) => setUserName(event.target.value)}
                    />
                </div>
                <div className='form-group  password-group' >
                    <label >Password</label>
                    <input
                        type={isShowPassword ? "text" : "password"}
                        className='form-control'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    {isShowPassword ?
                        <span
                            className='icons-eye'
                            onClick={() => setIsShowPassword(false)}
                        ><FaRegEye /></span>
                        :
                        <span
                            className='icons-eye'
                            onClick={() => setIsShowPassword(true)}
                        ><FaRegEyeSlash /></span>
                    }
                </div>
                <div>
                    <button
                        className='btn-submit'
                        onClick={() => handleSignUp()}
                    >Sign Up</button>
                </div>
                <div className='back'>
                    <span onClick={() => handleBack()}><IoMdArrowRoundBack /> Go Back Home</span>
                </div>
            </div>
        </div>
    )
}
export default Signup;
