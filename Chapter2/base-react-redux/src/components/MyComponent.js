import React from 'react'


class MyComponent extends React.Component {
    state = {
        name: "Long",
        address: "Thanh Hoa",
        age: 20
    }

    // JSX
    handleClick = (event) => {
        console.log(">>> click my btn")
        console.log("My name is : ", this.state.name, " Age :", this.state.age)
        this.setState({
            name: "Long Xuan"
        })
        this.setState({
            age: Math.floor((Math.random() * 100) + 1)
        })
    }
    handleOnMouveOver(event) {
        // console.log(event.pageX)
    }

    handleOnChargeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    // tránh load trang

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm age {this.state.age}

                <form onSubmit={this.handleOnSubmit}>
                    <input
                        type="text"
                        onChange={(event) =>
                            this.handleOnChargeInput(event)
                        }
                    />

                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}
export default MyComponent;