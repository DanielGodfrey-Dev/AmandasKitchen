import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //required state data goes here
            data: null
            //____________________________
        }
    }

    render() {

        return (
            <div>
                <h1>Amanda's Kitchen</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('Kitchen'));