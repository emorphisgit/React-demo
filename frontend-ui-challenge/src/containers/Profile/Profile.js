import React, { Component } from 'react';
import '../../frontend-challenge-pattern-library/src/assets/toolkit/styles/toolkit.scss';
import classes from './Profile.css';
import Layout from '../../hoc/Layout/Layout';

class Profile extends Component {

    state = {
        fname: '',
        lname:'',
        initialFname:'',
        initialLname:'',
        email:''

    }

    componentDidMount() {
        var fname = '';
        var lname = '';
        var email = '';
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
        if (localStorage.getItem('email')) {
            email = localStorage.getItem('email');
        }
        this.setState({ fname: fname });
        this.setState({ lname: lname });
        this.setState({ email: email });
        this.setState({ initialFname: initialFname });
        this.setState({ initialLname: initialLname });
    }

    render() {
        return (
            <div className={classes.tc}>
                <Layout/>
            {/* <div className={classes.c1}>
            <div className={classes.c2}></div>
            <div className={classes.c3}>
                <div className={classes.c4}>
                    <span className={classes.c5}>PH</span>
                </div>
            </div>
            <div className={classes.c6}>Phillip Hodge</div>
            <div className={classes.c7}>philip.hodge@gmail.com</div>
            <div className={classes.c8}>EDIT</div> 
        </div>*/}
         <div className="login-box">

<span className="login-box-symbol">
    <span className="ui-icon i-darkest-blue i-xxlarge ">
    <span className={["avatar-initials", classes.av1].join(' ')} >
  <span class="avatar-initials-text">
    {this.state.initialFname}{this.state.initialLname}
  </span>
</span>
    </span>
</span>
<div className="login-box-body">
    <div className="login-box-header">
        <h2 className="login-box-title">{this.state.fname} {this.state.lname}</h2>
        <p>{this.state.email}</p>
    </div>
    <div className="login-box-header">
    </div>
    <div className="login-box-header">
        <p >EDIT</p>
    </div>


</div>
</div>
        </div>
        );
    }
}

export default Profile;