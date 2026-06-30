import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import _ from 'lodash'
import './ModalViewUser.scss'

const ModalViewUser = (props) => {

    const { show, setShow, dataUpdate } = props;

    const handleClose = () => {
        setShow(false)
        setEmail("")
        // setPassword("")
        setUsername("")
        setRole("USER")
        // setImage("")
        setPreviewImage("")
        props.resetUpdateData()
    };

    const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("USER")
    // const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    useEffect(() => {
        // console.log("run useEffect")
        if (!_.isEmpty(dataUpdate)) {
            // update state
            setEmail(dataUpdate.email)
            setUsername(dataUpdate.username)
            setRole(dataUpdate.role)
            // setImage("")
            if (dataUpdate.image) {
                setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`)
            }
        }
    }, [dataUpdate])


    return (
        <>

            <Modal
                show={show}
                onHide={handleClose}
                size='lg'
                backdrop="static"
                className='modal-view-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>View User</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {/* ============================================================= */}
                    <section className="view-user-profile">
                        <div className="profile-card">
                            <div className="profile-left">
                                {previewImage && (
                                    <img
                                        src={previewImage}
                                        alt="Avatar"
                                        className="profile-avatar"
                                    />
                                )}

                                <h5 className="profile-username">{username}</h5>
                            </div>

                            <div className="profile-right">
                                <div className="profile-body">
                                    <h6 className="profile-title">Information</h6>
                                    <hr />

                                    <div className="profile-info">
                                        <div className="profile-item">
                                            <h6>Email</h6>
                                            <p>{email}</p>
                                        </div>

                                        <div className="profile-item">
                                            <h6>Role</h6>
                                            <p>{role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalViewUser;