import React from 'react';
import ReactDOM from 'react-dom';
import Register from './register';
import Login from './login';
import Dashboard from './dashboard';
import { BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import validator from 'validator';

class UserBlock extends React.Component
{
    render()
    {
        return(
            <Router>  
                <div>              
                    <Route path="/" exact strict render={
                        ()=>{
                            return <Register />;
                        }
                    }/>
                    
                    <Route path="/Login" exact strict render={
                        ()=>{
                            return <Login />
                        }
                    }/>

                    <Route path="/Register" exact strict render={
                        ()=>{
                            return <Register />;
                        }
                    }/>

                    <Route path="/Dashboard" exact strict render={
                        ()=>{
                            return <Dashboard />;
                        }
                    }/>
                </div>
            </Router>   
        )
    }    
}

ReactDOM.render(<UserBlock />, document.getElementById('root'));