import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>
                Hello, world.
            </h1>
        );
    }
}

const ele = <Hello />;

ReactDOM.render(ele, document.getElementById('root'));