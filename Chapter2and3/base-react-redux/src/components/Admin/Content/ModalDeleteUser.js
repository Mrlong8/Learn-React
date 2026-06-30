import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUsers } from '../../../services/apiService'
import { toast } from 'react-toastify';
// thư viện thông báo

const ModalDeleteUser = (props) => {
    const { show, setShow, dataDelete, setCurrentPage } = props;

    const handleClose = () => setShow(false);


    const handleSubmitDelete = async () => {
        let data = await deleteUsers(dataDelete.id);

        if (data && data.EC === 0) {
            toast.success(data.EM);
            handleClose();
            // await props.fetchListUsers()
            setCurrentPage(1)
            await props.fetchListUsersWithPaginate(1)
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
    }

    return (
        <>


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"

            >
                <Modal.Header closeButton>
                    <Modal.Title>ConFirm Delete the user</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to delete the user e mail = <b>{dataDelete && dataDelete.email ? dataDelete.email : ""}</b> </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        CenCel
                    </Button>
                    <Button variant="primary" onClick={handleSubmitDelete}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteUser;