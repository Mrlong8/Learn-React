import React from 'react'
import UserInfor from '../components/UserInfor'
import DisplayInfor from '../components/DisplayInfor'

class MyComponent extends React.Component {
    state = {
        listUser: [
            { id: 1, name: "Xuân Long", age: "20" },
            { id: 2, name: "Xuan", age: "40" },
            { id: 3, name: "Dragon", age: "10" }
        ]
    }
    handleAddNewuser = (userObject) => {
        // console.log(">>> Check data : ", userObject)
        this.setState({
            listUser: [userObject, ...this.state.listUser]
        })                         // copy danh sach ra
    }

    handleDeleteUser = (userId) => {
        let listUserClone = [...this.state.listUser]
        listUserClone = listUserClone.filter(item => item.id !== userId)
        this.setState({
            listUser: listUserClone
        })
    }

    render() {

        // Dry:  don't repeat youseft
        return (
            <>
                <UserInfor
                    handleAddNewuser={this.handleAddNewuser}
                ></UserInfor>
                <DisplayInfor
                    listUser={this.state.listUser}
                    handleDeleteUser={this.handleDeleteUser}
                ></DisplayInfor>
            </>
        );
    }
}
export default MyComponent;