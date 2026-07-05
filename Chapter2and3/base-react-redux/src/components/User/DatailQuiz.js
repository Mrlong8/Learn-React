import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from '../../services/apiService'

const DetailQuiz = (props) => {
    const params = useParams();
    const quizId = params.id;

    useEffect(() => {
        fetchQuestion();
    }, [quizId])

    const fetchQuestion = async () => {
        let res = await getDataQuiz(quizId);
        console.log(" >>> Check res : ", res)
    }

    // console.log("Check params : ", params)
    return (
        <div className='detail-quiz-container'>

        </div>
    )
}
export default DetailQuiz; 