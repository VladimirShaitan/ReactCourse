import React from "react";

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isShown: false };
    }

    toggleText = () => {
        const { isShown } = this.state;
        this.setState({ isShown: !isShown });
    };

    render() {
        const { isShown } = this.state;

        return (
            <div>
                <button onClick={this.toggleText} type="button">
                    {isShown ? 'hide' : 'show'}
                </button>
                {isShown && <p>&#127775;</p>}
            </div>
        );
    }
}

export default Component;