import React, { Component } from 'react';
import Layout from '../../hoc/Layout/Layout';
import '../../frontend-challenge-pattern-library/src/assets/toolkit/styles/toolkit.scss';
import Person from '../../components/UI/Person/Person';

class LifeSciences extends Component {

  state = {
    fname: ''
  }

  componentDidMount() {
    var fname = '';
    if (localStorage.getItem('fname')) {
      fname = localStorage.getItem('fname');
    }
    this.setState({ fname: fname });
  }

  render() {
    return (
      <div>
        <Layout />
        <Person name={this.state.fname} />
      </div>
    );
  }
}

export default LifeSciences;