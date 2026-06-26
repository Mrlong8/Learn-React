import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss'

const ManageUser = (props) => {
    return (
        <div className="manage-user-container">

            <div className="title">
                Manage user
            </div>
            <div className="user-content">
                <div>
                    <button>Add new user</button>
                </div>
                <div>
                    user table

                </div>
                <ModalCreateUser></ModalCreateUser>
            </div>
        </div>
    )
}
export default ManageUser;