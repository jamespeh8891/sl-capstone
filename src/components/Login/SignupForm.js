import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import classes from "./signup.module.css";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email_address: '', password: '', reEnterPassword: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {username, email_address, password} = this.state
    axios.post('http://localhost:4000/signup', { username, email_address, password })
      .then(res => {
        this.setState({ username: '', email_address: '', password: '' })
        this.props.updateUser(res.data)
      })
      this.props.nav('/')
    }


    render(){
    return (
        
      <div className={classes.loginBox}>
        <h2 className={classes.h2}></h2>
        <div className={classes.email}>
            <h1>CREATE ACCOUNT</h1>
          <input
            className={classes.emailInput}
            placeholder="Email"
            type="email"
            name="email"
            onChange={(e) =>
              this.setState({ ...this.state, email: e.target.value })
            }
          />
          {/* {console.log(this.state)} */}
        </div>
        <div
          className={classes.password}
          // onSubmit={(e) => this.handleSubmit(e)}
        >
          <input
            className={classes.passwordInput}
            placeholder="Password"
            type="password"
            name='pass'
            onChange={(e) =>
              this.setState({ ...this.state, password: e.target.value })
            }
          />
        </div>
        <div
          className={classes.password}
          // onSubmit={(e) => this.handleSubmit(e)}
        >
          <input
            className={classes.passwordInput2}
            placeholder="Re-enter Password"
            type="password"
            onChange={(e) =>
              this.setState({ ...this.state, reEnterPassword: e.target.value })
            }
          />
        </div>
        <div
          className={classes.createaccbtn}
          // onSubmit={(e) => this.handleSubmit(e)}
        >
          <button
            className={classes.createbtn}
            onClick={(e) => this.handleSubmit(e)}
          >
            Create Account
          </button>
        </div>
        <div className={classes.back}>
          <NavLink className={classes.back} to="/login">
            Go back
          </NavLink>
        </div>
      </div>
    );
  };
}

export default SignupForm;
  