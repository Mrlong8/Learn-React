import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import App from './App';
import User from './components/User/User';
import Admin from './components/Admin/Admin';
import HomePage from './components/Home/HomePage';
import ManageUser from './components/Admin/Content/ManageUser';
import DashBoard from './components/Admin/Content/DashBoard';
import Login from './components/Auth/Login';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from "./components/Auth/Signup";
import ListQuiz from "./components/User/ListQuiz";
import DetailQuiz from "./components/User/DetailQuiz";

const NotFound = () => {
    return (
        <div className="alert alert-danger container mt-3">
            404 Not Found data with your current URL
        </div>
    )
}

const Layout = (props) => {
    return (
        <>
            <Routes>

                <Route path="/" element={<App />}>
                    <Route index element={<HomePage />}></Route>
                    <Route path="users" element={<ListQuiz />}></Route>
                </Route>
                <Route path="/quiz/:id" element={<DetailQuiz />}></Route>


                <Route path="/admins" element={<Admin />}>
                    <Route index element={<DashBoard />}></Route>
                    <Route path="manage-user" element={<ManageUser />}></Route>
                </Route>

                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="*" element={<NotFound />}></Route>


            </Routes>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </>
    )
}

export default Layout