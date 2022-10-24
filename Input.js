import React, { Component } from "react"

class Input extends Component {

    state = {
        title: ""
    };

    //changing the state so that it holds the new input user is placing
    onChange = e => {
        this.setState({
            title: e.target.value // e => event, target => element that triggered the event, value => value of the target
        });
    };

    //if we are trying to submit a string as an input, it will be added as a new object, otherwise an alert fires off
    handleSubmit = e => {
        e.preventDefault();
        if (this.state.title.trim()) {
            this.props.addProps(this.state.title);
            this.setState({
                title: ""
            });
        } else {
            alert("Please write item")
        }
    };


    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input
                    type="text"
                    className="input-text"
                    placeholder="Add Todo..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <button className="input-submit">Submit</button>
            </form>
        )
    }
}

export default Input