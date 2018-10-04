import React, { Component } from 'react';
import App from '../App';

class Person extends Component {
    render() {
        const name = this.props.name;
        const age = this.props.age;
        return(
            <p>I am {name} and i am {age} years old</p>
        );
    }
}

export default Person;