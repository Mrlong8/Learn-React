import { useState } from 'react'
import './ManageQuiz.scss'
import Select from 'react-select'
import { postCreateNewQuiz } from '../../../../services/apiService'
import { toast } from 'react-toastify';
import TableQuiz from './TableQuiz';
import Accordion from 'react-bootstrap/Accordion';

const options = [
    { value: 'EASY', label: 'EASY' },
    { value: 'MEDIUM', label: 'MEDIUM' },
    { value: 'HARD', label: 'HARD' }
]

const ManageQuiz = (props) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('')
    const [image, setImage] = useState(null)

    const handleChangeFile = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setImage(event.target.files[0])
        }
    }

    const handleSubmitQuiz = async () => {
        if (!name || !description) {
            toast.error("Name/description is required")
            return;
        }
        let res = await postCreateNewQuiz(
            description,
            name,
            type?.value,
            image
        );

        if (res && res.EC == 0) {
            toast.success(res.EM);
            setName('');
            setDescription('');
            setImage(null);
        } else {
            toast.error(res.EM)
        }
        console.log(">> res:", res);
    };
    return (
        <div className="quiz-container">

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header> Manage  quiz</Accordion.Header>
                    <Accordion.Body>
                        <div className="add-new">
                            <form >
                                <fieldset className="border rounded-3 p-3">
                                    <legend className="float-none w-auto px-3">Add New Quiz</legend>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='name'
                                            value={name}
                                            onChange={(event) => setName(event.target.value)}
                                        />
                                        <label >Name</label>
                                    </div>
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='description'
                                            value={description}
                                            onChange={(event) => setDescription(event.target.value)}
                                        />
                                        <label >Description</label>
                                    </div>
                                    <div className="select-level">
                                        <label className="select-label">Level</label>

                                        <Select
                                            className="quiz-select"
                                            classNamePrefix="react-select"
                                            options={options}
                                            placeholder="Select level"
                                            value={type}
                                            onChange={setType}
                                        />
                                    </div>
                                    <div className="more-actions">
                                        <label htmlFor="quiz-image">Upload Image</label>
                                        <input
                                            id="quiz-image"
                                            type="file"
                                            accept="image/*"
                                            onChange={(event) => handleChangeFile(event)}
                                        />
                                    </div>
                                    <div className='btn-save'>
                                        <button
                                            type="button"
                                            onClick={() => handleSubmitQuiz()}
                                        >Save</button>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


            <div className="list-detail">
                <TableQuiz />
            </div>
        </div>
    )
}
export default ManageQuiz;