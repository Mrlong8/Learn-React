import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FiFolderPlus } from "react-icons/fi";
import { toast } from 'react-toastify';
import { putUpdateUser } from '../../../services/apiService'
import _ from 'lodash'
import './ModalViewUser.scss'

const ModalViewUser = (props) => {

    const { show, setShow, dataUpdate } = props;

    // const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
        setEmail("")
        setPassword("")
        setUsername("")
        setRole("USER")
        setImage("")
        setPreviewImage("")
        props.resetUpdateData()
    };
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("USER")
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    useEffect(() => {
        // console.log("run useEffect")
        if (!_.isEmpty(dataUpdate)) {
            // update state
            setEmail(dataUpdate.email)
            setUsername(dataUpdate.username)
            setRole(dataUpdate.role)
            setImage("")
            if (dataUpdate.image) {
                setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`)
            }
        }
    }, [dataUpdate])

    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0])
        } else {
            // setPreviewImage(null);
        }

        console.log("upload file", event.target.files[0])
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handelSubmitCreateUser = async () => {

        //validate
        const isValiEmail = validateEmail(email);
        if (!isValiEmail) {
            toast.error("invalue email")
            return;
        }

        let data = await putUpdateUser(dataUpdate.id, username, role, image);

        if (data && data.EC === 0) {
            toast.success(data.EM);
            handleClose();
            await props.fetchListUsers()
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
    }

    console.log("check data update : ", dataUpdate)
    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal
                show={show}
                onHide={handleClose}
                size='lg'
                backdrop="static"
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>View User</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {/* ============================================================= */}
                    <section style={{ backgroundColor: '#f4f5f7' }}>
                        <div className="container">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col col-lg-6 mb-4 mb-lg-0">
                                    <div className="card mb-3" style={{ borderRadius: '.5rem' }}>
                                        <div className="row g-0">
                                            <div
                                                className="col-md-4 gradient-custom text-center text-white"
                                                style={{
                                                    borderTopLeftRadius: '.5rem',
                                                    borderBottomLeftRadius: '.5rem'
                                                }}
                                            >
                                                {previewImage && (
                                                    <img
                                                        src={previewImage}
                                                        alt="Avatar"
                                                        className="img-fluid my-5"
                                                        style={{ width: '80px' }}
                                                    />
                                                )}

                                                <h5>{username}</h5>
                                                <i className="far fa-edit mb-5"></i>
                                            </div>

                                            <div className="col-md-8">
                                                <div className="card-body p-4">
                                                    <h6>Information</h6>
                                                    <hr className="mt-0 mb-4" />

                                                    <div className="row pt-1">
                                                        <div className="col-6 mb-3">
                                                            <h6>Email</h6>
                                                            <p className="text-muted">{email}</p>
                                                        </div>

                                                        <div className="col-6 mb-3">
                                                            <h6>Role</h6>
                                                            <p className="text-muted">{role}</p>
                                                        </div>
                                                    </div>

                                                    <div className="d-flex justify-content-start">
                                                        <a href="#!">
                                                            <i className="fab fa-facebook-f fa-lg me-3"></i>
                                                        </a>
                                                        <a href="#!">
                                                            <i className="fab fa-twitter fa-lg me-3"></i>
                                                        </a>
                                                        <a href="#!">
                                                            <i className="fab fa-instagram fa-lg"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
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