import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss'
import { FaPlus } from "react-icons/fa";
import { useState } from "react";

const ManageUser = (props) => {

    const [showModalCreateUser, setShowModalCreateUser] = useState(false);

    return (
        <div className="manage-user-container">

            <div className="title">
                Manage user
            </div>
            <div className="user-content">
                <div className='btn-Add-New'>
                    <button className="btn btn-primary" onClick={() => setShowModalCreateUser(true)}>
                        <FaPlus /> Add new user
                    </button>
                </div>
                <div className='table-users-container'>
                    user table

                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                >

                </ModalCreateUser>
            </div>
        </div>
    )
}
export default ManageUser;