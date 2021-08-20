import React from 'react';
import PropTypes from 'prop-types';


class App extends React.Component {
    constructor(props) {
        super(props);
        console.log('hello constructor!');
    }

    state ={
        count: 0,
    };

    add = () => {
      // this.setState({
      //     count: this.state.count + 1
      // });
      this.setState(current => ({ count: current.count + 1}));
    };

    minus = () => {
        // this.setState({
        //     count: this.state.count - 1
        // });
        this.setState(current => ({ count: current.count - 1}));
    };

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate: i just updated');
    }

    componentWillUnmount() {
        console.log('componetWillUnmount: ')
    }

    render() {
        console.log('hello render!');
        return (
            <div>
                <h1>The Number is {this.state.count}</h1>
                <button onClick={this.add}> Add </button>
                <button onClick={this.minus}> Minus </button>
            </div>
        )
    }
}

export default App;
