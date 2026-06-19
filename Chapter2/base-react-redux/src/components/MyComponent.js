import React from 'react'


class MyComponent extends React.Component {
    state = {
        name: "Long",
        address: "Thanh Hoa",
        age: 20
    }

    // JSX
    handleClick(event) {
        console.log(">>> click my btn")
        console.log("My name is : ", this.state.name)
    }

    handleOnMouveOver(event) {
        console.log(event.pageX)
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
                <br></br>
                <button onClick={this.handleClick}>Click me</button>
                <button onMouseOver={this.handleOnMouveOver}>Hover me</button>
            </div>
        );
    }
}

export default MyComponent;