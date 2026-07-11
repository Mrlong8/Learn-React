import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// thư viện thông báo

const ModalResult = (props) => {
    const { show, setShow, dataModalResult } = props;

    const handleClose = () => setShow(false);

    console.log(" >>>  check : ", dataModalResult)
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
                <Modal.Body>
                    <div>Total Questions : {dataModalResult.countTotal} </div>
                    <div>Total Correct answers : {dataModalResult.countCorrect} </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Show answers
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Colose
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalResult;