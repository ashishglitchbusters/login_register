import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";

const UserDetails = () => {
    const [displayusername, displayusernameupdate] = useState('');
    const [showmenu, showmenuupdateupdate] = useState(false);
    const usenavigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/login' || location.pathname === '/register') {
            showmenuupdateupdate(false);
        } else {
            showmenuupdateupdate(true);
            let username = sessionStorage.getItem('username');
            if (username === '' || username === null) {
                usenavigate('/login');
            } else {
                displayusernameupdate(username);
            }
        }

    }, [location])
    return (
        <div>
            {showmenu &&
                <div >
                    <Header/>
                    <div className="d-flex justify-content-lg-end m-5">
                    <Link className="me-3" to={'/reset'} >Reset Password</Link> 
                    <Link  className="btn btn-primary" to={'/login'}>Logout</Link>
                    </div>
                    <div className="d-flex justify-content-center">
                    <h1>Welcome :- <b>{displayusername}</b></h1>

                    </div>
                </div>
            }
        </div>
    );
}

export default UserDetails;