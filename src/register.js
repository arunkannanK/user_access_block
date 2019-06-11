import React from 'react';
import validator from 'validator' ;
//for email valid
import isEmail from 'validator/lib/isEmail';

class Register extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
        name_register : '',  
        sname_register : '',
        email_register : '',
        mobile_register : '',
        password_register : '',
        focus:true
      }
    }
  
    storeData()
    {
        localStorage.setItem('name',this.state.name_register);
        localStorage.setItem('sname',this.state.sname_register);
        localStorage.setItem('email',this.state.email_register);
        localStorage.setItem('mobile',this.state.mobile_register);
        localStorage.setItem('password',this.state.password_register);

        alert('registration success');
        window.location.replace('login'); 
        return true; 
    } 

    handleSubmit(e) {
        e.preventDefault();
        //alert(this.state.email_register);
        if(validator.isEmail(this.state.email_register) && validator.isMobilePhone(this.state.mobile_register))
        {
            this.storeData();
        }
        else  
        {  
            alert('Email / Mobile Invalid!');
            return false;
        }
    }

    validatePhoneNumber = (number) => {
        const isValidPhoneNumber = validator.isMobilePhone(number)
        return (isValidPhoneNumber)
    }

    // EmailCheck(email)
    // {
    //     if(validator.isEmail(email))
    //     {
    //         return true;
    //     }
    //     else
    //     {
    //         alert('invalid Email Addr');
    //         preventDefault();
    //         return false;
    //     }
    // }
  
    render() {
      return (
        <div className="ui grid" style={{marginTop:'5%'}}>
            <div className="three column row">
                <div className="column"></div>
                <div className="column">
                    <form onSubmit={this.handleSubmit} className="ui form">
                    {/* <label>
                        Name:
                        <input type="text" ref={(input) => this.input = input} />
                    </label>
                    <input type="submit" value="Submit" /> */}
                        <label className="ui tag label">User Registration Block</label><br /><br />
                        <div className="field">
                            <label>First Name</label>
                            <input type="text" name="first-name" placeholder="first name" autoFocus={this.state.focus}  value={this.state.name_register} onChange={(event)=>this.setState({name_register:event.target.value})} required/>
                        </div>
                        <div className="field">
                            <label>Last Name</label>
                            <input type="text" name="last-name" placeholder="last name"  value={this.state.sname_register} onChange={(event)=>this.setState({sname_register:event.target.value})} required/>
                        </div>
                        <div className="field">
                            <label>Email Address</label>
                            <input type="text" name="first-name" placeholder="first name"  value={this.state.email_register} onChange={
                                // ()=>{this.EmailCheck(this.state.password_register)}
                                (event)=>this.setState({email_register:event.target.value})
                                } required/>
                        </div>
                        <div className="field">
                            <label>Mobile</label>
                            <input type="number" name="mobile" placeholder="number.." value={this.state.mobile_register} onChange={(event)=>this.setState({mobile_register:event.target.value})} required/>
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input type="password" name="password" placeholder="code.." value={this.state.password_register} onChange={(event)=>this.setState({password_register:event.target.value})} required/>
                        </div>
                       
                        <button className="ui button primary" type="submit" value="submit">Submit</button>
                    </form>
                </div>
                <div className="column"></div>
            </div>
            <div className="three column row"></div>
        </div>
      );
    }
  }

  export default Register;