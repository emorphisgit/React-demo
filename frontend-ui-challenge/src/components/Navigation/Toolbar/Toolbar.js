import React, { Component } from 'react';

import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';


class Toolbar extends Component {

    state = {
        initialFname:'',
        initialLname:'',
    }

    componentDidMount() {
        var fname = '';
        var lname = '';
        var initialFname = '';
        var initialLname = '';
        if (localStorage.getItem('fname')) {
            fname = localStorage.getItem('fname');
            initialFname =fname.substring(0,1);
        }
        if (localStorage.getItem('lname')) {
            lname = localStorage.getItem('lname');
            initialLname =lname.substring(0,1);
        }
        this.setState({ initialFname: initialFname });
        this.setState({ initialLname: initialLname });
    }
    render() {
        return (
            <div>
                <header className={classes.Toolbar}>
                    <nav className={classes.DesktopOnly}>
                        <NavigationItems  iFn={this.state.initialFname} iLn={this.state.initialLname} click={() => this.clickHandler()}/>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Toolbar;