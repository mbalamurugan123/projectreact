import React from "react";
class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  

  }

  submituserRegistrationForm(e) {
    console.log(this.validateForm());
    
    e.preventDefault();
    if (this.validateForm()) {
        console.log(this.state);
         let fields = {};
         fields["username"] = "";
         fields["emailid"] = "";
         fields["mobileno"] = "";
         fields["password"] = "";
        this.setState({fields:fields});
        console.log(this.state);
        alert("Form submitted");
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "Enter your username.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "Enter alphabet characters only.";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "Enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      if (!fields["emailid"].match(/^[a-z@.0-9]*$/)){
        formIsValid = false;
        errors["emailid"] = "Enter valid email-ID.";
      }
    }

   

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^[a-zA-Z@#0-9]{8,}$/)) {
        formIsValid = false;
        errors["password"] = "Password is Weak";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;


  }
render() {
  return (
  <div id="main-registration-container">
   <div id="register">
      <h3 className="header">Login page</h3>
      <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
      <label>Name &emsp;:</label>
      <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
      <div className="errorMsg">{this.state.errors.username}</div>
      <label>Email ID :</label>
      <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
      <div className="errorMsg">{this.state.errors.emailid}</div>
      <label>Password :</label>
      <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} /><br />
      <div className="errorMsg">{this.state.errors.password}</div>
      <input type="submit" className="button"  value="Register"/>
      </form>
  </div>
</div>

    );
}
}
export default RegisterForm;