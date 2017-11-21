import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>
                Hello, admin.
            </h1>
        );
    }
}

const App = function (props) {
    return (
        <div>
            <Hello />
        </div>
    );
};

export default App;