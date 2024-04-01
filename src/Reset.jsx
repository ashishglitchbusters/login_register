import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

function Reset() {
  return (
    <div>
        <Header/>
        <div className="row">
            <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
                <form className="container">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h2>Reset Password</h2>
                        </div>
                        <div className="card-body">
                       
                            <div className="form-group">
                                <label>New Password <span className="errmsg">*</span></label>
                                <input  placeholder="Password"  className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Confirm Password <span className="errmsg">*</span></label>
                                <input type="password" placeholder="confirm password.."  className="form-control"></input>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary me-2">Reset Password</button>                         </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Reset
