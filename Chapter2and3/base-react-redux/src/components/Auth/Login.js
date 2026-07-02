import { useState } from 'react';
import './Login.scss';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import { postLogin } from '../../services/apiService'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux'
import { doLogin } from '../../redux/action/userAction';
import { ImSpinner9 } from "react-icons/im";


const Login = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [isLoadingData, setIsLoadingData] = useState(false)

    const handleBack = () => {
        navigate('/');
    }

    const handleSignup = () => {
        navigate('/signup')
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleLogin = async () => {

        // varidate 
        const isValiEmail = validateEmail(email);
        if (!isValiEmail) {
            toast.error("invalue email")
            return;
        }
        if (!password) {
            toast.error("invalue password")
            return;
        }

        setIsLoadingData(true)
        // submit apis
        let data = await postLogin(email, password)
        // console.log(">>> check res : ", data)
        if (data && +data.EC === 0) {
            dispatch(doLogin(data))
            toast.success(data.EM);
            setIsLoadingData(false)
            // navigate('/');
        }
        if (data && +data.EC !== 0) {
            toast.error(data.EM);
            setIsLoadingData(false)
        }
    }

    return (
        <div className="login-container">
            <div className="header">
                <span>Don't have an account yet</span>
                <button onClick={() => handleSignup()}>Sign up</button>
            </div>
            <div className="title col-4 mx-auto">
                Log In
            </div>
            <div className="welcome col-4 mx-auto">
                Hello, Who is this?
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
                    <label >Password</label>
                    <input
                        type="password"
                        className='form-control'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <span className='forgot-password'>Forgot password ? </span>
                <div>
                    <button
                        className='btn-submit'
                        onClick={() => handleLogin()}
                        disabled={isLoadingData}
                    >
                        {isLoadingData === true &&
                            <ImSpinner9 className="loader-icon" />
                        }
                        <span> Login</span>

                    </button>
                </div>
                <div className='back'>
                    <span onClick={() => handleBack()}><IoMdArrowRoundBack />Go Back Home</span>
                </div>
            </div>
        </div>
    )
}

export default Login 