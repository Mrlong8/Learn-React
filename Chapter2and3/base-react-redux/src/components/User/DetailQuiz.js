import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz } from '../../services/apiService'
import _ from 'lodash'
import './DetailQuiz.scss'

const DetailQuiz = (props) => {
    const params = useParams();
    const location = useLocation();

    const quizId = params.id;

    useEffect(() => {
        fetchQuestion();
    }, [quizId])

    const fetchQuestion = async () => {
        let res = await getDataQuiz(quizId);
        console.log(" >>> Check res : ", res)
        if (res && res.EC == 0) {
            let raw = res.DT;
            let data = _.chain(raw)
                .groupBy("id")
                .map((value, key) => {
                    let answers = [];
                    let questionDescription, image = null;
                    value.forEach((item, index) => {
                        if (index === 0) {
                            questionDescription = item.description;
                            image = item.image;
                        }
                        answers.push(item.answers)
                        // console.log("item answers : ", item.answers)
                    })
                    // console.log('value : ', value, ' Key : ', key)
                    return { quizId: key, answers, questionDescription, image }
                }
                )
                .value()
            console.log(data)
        }
    }

    // console.log("Check params : ", params)
    return (
        <div className='detail-quiz-container'>
            <div className='left-content'>
                <div className='title'>
                    {location?.state?.quizTitle}
                </div>
                <div className='q-body'>
                    <img src="" alt="" />
                </div>
                <div className='q-content'>
                    questins content
                </div>
            </div>
            <div className='right-content'>
                count down
            </div>
        </div>
    )
}
export default DetailQuiz; 