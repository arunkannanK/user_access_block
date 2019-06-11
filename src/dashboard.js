import React from 'react';


class Dashboard extends React.Component
{

    logout = () =>
    {
        localStorage.clear();
        window.location.replace('login');
    }

    render()
    {
        return(
            <div className="ui grid" style={{marginTop:'5%'}}>
                <div className="three column row">
                    <div className="column"></div>
                    <div className="column">
                        <label className="ui tag label">Registration Details</label><a onClick={this.logout} style={{float:'right'}} className="ui tag label">Logout</a><br /><br />
                        <table class="ui definition table">
                            <tbody>
                                <tr>
                                <td class="four wide column">First Name</td>
                                <td>{localStorage.getItem('name')}</td>
                                </tr>
                                <tr>
                                <td>Last Name</td>
                                <td>{localStorage.getItem('sname')}</td>
                                </tr>
                                <tr>
                                <td>Email</td>
                                <td>{localStorage.getItem('email')}</td>
                                </tr>
                                <tr>
                                <td>Mobile</td>
                                <td>{localStorage.getItem('mobile')}</td>
                                </tr>
                                <tr>
                                <td>Password</td>
                                <td>{localStorage.getItem('password')}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="column"></div>
                </div>
            </div>    
        )
    }
}


export default Dashboard;