import React from 'react';
import validator from 'validator' ;

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
          mobile_login : '',
          password_login : '',
          focus:true
      }
    }
  
    handleSubmit(e) {
      e.preventDefault();
      const name_l = localStorage.getItem('mobile');
      const password_l = localStorage.getItem('password');
      const email_l = localStorage.getItem('email');
      const name_t = this.state.name_login;
      const password_t = this.state.password_login;
      if(name_l === name_t && password_l === password_t)  
      {
        alert('login success');
        localStorage.setItem('login_status','success');
        window.location.replace('dashboard');
      }
      else if(email_l === name_t && password_l === password_t)
      {
        alert('login success');
        localStorage.setItem('login_status','success');
        window.location.replace('dashboard');
      }
      else
      {
        alert('Please check your credentials');
        localStorage.setItem('login_status','failed');
      } 
    }
  
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
                        <label className="ui tag label">User Login Block</label><br /><br />
                        <div className="field">
                            <label>Mobile / Email</label>
                            <input type="text" name="mobile-email" placeholder="Mobile / Email.." value={this.state.name_login} onChange={(event)=>this.setState({name_login:event.target.value})}required/>
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input type="password" name="last-name" placeholder="code.." value={this.state.password_login}   onChange={(event)=>this.setState({password_login:event.target.value})} required/>
                        </div>
                        
                        <button className="ui button primary" type="submit" value="submit">Login</button>
                    </form>
                </div>
                <div className="column"></div>
            </div>
            <div className="three column row"></div>
        </div>
      );
    }
  }

  export default Login;