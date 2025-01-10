import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    handleClick = () => {
        this.setState({ date: new Date() });
    }

    render() {

        return (
            <div>
                <p>It is {this.state.date.toLocaleTimeString()}.</p>
                <button
                    type="button"
                    onClick={this.handleClick}
                >
                    refresh
                </button>
            </div>
        );
    }

}

export default Clock;
