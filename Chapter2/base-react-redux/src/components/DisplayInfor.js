import React, { useState } from 'react'
import './DisplayInfor.scss'
import logo from './../logo.svg'

// class DisplayInfor extends React.Component {

//     constructor(props) {
//         console.log(">> call constructor")
//         super(props);

//         // bable compiler
//         this.state = {
//             isShowListUser: true
//         }
//     }
//     //    state = {

//     // }
//     handleShowHide = () => {
//         this.setState({
//             isShowListUser: !this.state.isShowListUser
//         })
//     }

//     componentDidMount() {
//         console.log(">> call did mouse")
//         setTimeout(() => {
//             document.title = "Dragon 18"
//         }, 3000)
//     }

//     componentDidUpdate(prevProps, prevState, snapshot) {
//         console.log(">>>> Call Me Did update", this.props, prevProps)
//         if (this.props.listUser !== prevProps.listUser) {
//             if (this.props.listUser.length === 5) {
//                 alert("You got 5 user")
//             }
//         }
//     }

//     render() {
//         console.log(">>> CAll me render")
//         // props => truyề dữ liệu từ cha sang con 
//         // destructuring array/object
//         const { listUser } = this.props
//         // console.log(listUser)

//         return (
//             <div className='display-infor-container'>
//                 {/* <img src={logo} alt="" /> */}

//                 <div>
//                     <span onClick={() => {
//                         this.handleShowHide()
//                     }}>
//                         {this.state.isShowListUser === true ? "Hide" : "Show"} list User
//                     </span>
//                 </div>
//                 {this.state.isShowListUser &&
//                     <>
//                         {listUser.map((user) => {

//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div>My name is {user.name} : </div>
//                                     <div>My name is {user.age}: </div>
//                                     <div><button onClick={() => this.props.handleDeleteUser(user.id)} >Delete</button></div>
//                                     <hr />
//                                 </div>
//                             )

//                         })}
//                     </>}
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {
    const { listUser } = props
    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        // alert("Cilck me")
        setShowHideListUser(!isShowHideListUser)
    }

    return (
        <div className='display-infor-container'>
            <div>
                <span onClick={() => handleShowHideListUser()} >
                    {isShowHideListUser === true ? 'Hide list user' : 'Show list users'}
                </span>
            </div>
            {isShowHideListUser &&
                <>
                    {listUser.map((user) => {

                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>My name is {user.name} : </div>
                                <div>My name is {user.age}: </div>
                                <div><button onClick={() => props.handleDeleteUser(user.id)} >Delete</button></div>
                                <hr />
                            </div>
                        )

                    })}
                </>}
        </div>
    )
}
export default DisplayInfor
