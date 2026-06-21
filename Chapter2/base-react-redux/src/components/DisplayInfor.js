import React from 'react'



class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        // props => truyề dữ liệu từ cha sang con 
        // destructuring array/object
        const { listUser } = this.props
        // console.log(listUser)

        return (
            <div>
                <div>
                    <span onClick={() => {
                        this.handleShowHide()
                    }}>
                        {this.state.isShowListUser === true ? "Hide" : "Show"} list User
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {listUser.map((user) => {

                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>My name is {user.name} : </div>
                                    <div>My name is {user.age}: </div>
                                    <hr />
                                </div>
                            )

                        })}
                    </div>}
            </div>
        )
    }
}

export default DisplayInfor
