import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Routes, Route, Router, Link } from 'react-router-dom';
import SignUp from './SignUp';
export default function SignIn(){
        return (
            <form className='col col-3 offset-4 p-5 bg-danger rounded text-white mt-5 mb-5'>
                <div className="form-group m-2">
                    <label for="inputEmail">Email</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                </div>
                <div className="form-group m-2">
                    <label for="inputPassword">Password</label>
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                </div>
                <div className="form-group m-2">
                    <label className="form-check-label"><input type="checkbox"/> Remember me</label>
                </div>
                <button type="submit" className="btn btn-success me-2">Sign in</button>
                <Link to={'signup'}><button type="button" className="btn btn-primary">Registor</button></Link>
                
                
            </form> 
    );
}