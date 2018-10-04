import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter, Switch } from 'react-router-dom';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import user from '../../assets/user.svg';
import * as actions from '../../store/actions/index';
import { updateObject, checkValidity } from '../../shared/utility';
import '../../frontend-challenge-pattern-library/src/assets/toolkit/styles/toolkit.scss';

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false,
                scss: 'login-box-form-username'
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false,
                scss: 'login-box-form-password'
            }
        },
        isSignup: true
    }

    componentDidMount() {

    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = updateObject(this.state.controls, {
            [controlName]: updateObject(this.state.controls[controlName], {
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            })
        });
        this.setState({ controls: updatedControls });
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value);
    }



    render() {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key],
            });
        }

        let form = formElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                scss={formElement.config.scss}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandler(event, formElement.id)} />
        ));

        if (this.props.loading) {
            form = <Spinner />
        }

        let errorMessage = null;

        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }


        return (
            <div>
                <Switch>
                    {authRedirect}
                </Switch>

                {errorMessage}

                <div className="login-box">

                    <span className="login-box-symbol">
                        <span className="ui-icon i-darkest-blue i-xxlarge ">
                            <img src={user} alt="" />
                        </span>
                    </span>
                    <div className="login-box-body">
                        <div className="login-box-header">
                            <h2 className="login-box-title">Sign In</h2>
                        </div>

                        <form className="login-box-form" onSubmit={this.submitHandler}>
                            {form}
                            <Button>Sign In</Button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.isAuthenticated,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
