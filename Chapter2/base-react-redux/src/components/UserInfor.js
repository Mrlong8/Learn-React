import React from 'react'

class UserInfor extends React.Component {
    state = {
        name: "Long",
        address: "Thanh Hoa",
        age: 20
    }

    // JSX
    handleOnChargeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnChargeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault()
        // console.log(this.state)
        this.props.handleAddNewuser({
            id: Math.floor((Math.random() * 100) + 1) + "-random",
            name: this.state.name,
            age: this.state.age
        })
    }
    // tránh load trang
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm age {this.state.age}

                <form onSubmit={this.handleOnSubmit}>
                    <label htmlFor="">Your Name : </label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) =>
                            this.handleOnChargeInput(event)
                        }
                    />

                    <br />
                    <label htmlFor="">Your Age : </label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) =>
                            this.handleOnChargeAge(event)
                        }
                    />
                    <br />
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default UserInfor;