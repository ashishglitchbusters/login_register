import { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
// import bcrypt from "bcryptjs";
import { useParams } from "react-router-dom";
const Forgot = () => {
//   const [data, setdata] = useState({
//     username:"",
//     password:""
//   });

  
//   const handleChange = (e) =>
//   {
//       const{name,value} = e.target;
//       setdata({...data,
//         [name]:value,
//     })
    
// }

// const ForgotPassword = (e) => {
//     e.preventDefault();
//     const hashPassword = bcrypt.hashSync(data.password,10);
//     console.log(data ,hashPassword)
   

//     fetch("http://localhost:8000/user/" + data.username).then((res) => {
//                 return res.json();
//             }).then((resp) => {
//                 //console.log(resp)
//                 if (Object.keys(resp).length === 0) {
//                     alert('Please Enter valid username');
//                 } else {
//                     if (resp.password === data.password) {
//                         alert('Success');
//                         sessionStorage.setItem('userrole',resp.role);
                       
//                     }else{
//                         alert('Please Enter valid credentials');
//                     }
//                 }
//             }).catch((err) => {
//                 alert('Login Failed due to :' + err.message);
//             });

//   };



const {id} = useParams();
const[values, setValues] = useState("");
useEffect(()=>
{
    axios.get('http://localhost:8000/user'+id)
    .then(res=> {
        console.log(res)
        setValues({...values, username:res.data.name, password:res.data.email})
    })
    .catch(err => console.log(err))
},[])
const ForgotPassword = (e) =>
{
    e.preventDefault();
    axios.post('http://localhost:8000/user',values)
    .then(res=> {
        console.log(res)
    })
    .catch(err => console.log(err))
}

  return (
    <>
      <Header />
      <div>
        <div className="row">
          <div className="offset-lg-3 col-lg-6" style={{ marginTop: "100px" }}>
            <form className="container" onSubmit={ForgotPassword}>
              <div className="card">
                <div className="card-header bg-primary text-white">
                  <h2>Forgot Password</h2>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label>
                      User Name <span className="errmsg">*</span>
                    </label>
                    <input
                      placeholder="username"
                      className="form-control"
                      name="username"
                      value={values.username} onChange={e => setValues({...values, username:e.target.value})}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>
                      New Password <span className="errmsg">*</span>
                    </label>
                    <input
                      placeholder="new password..."
                      className="form-control"

                    ></input>
                  </div>
                  <div className="form-group">
                    <label>
                      Confirm Password <span className="errmsg">*</span>
                    </label>
                    <input
                      type=" password"
                      name="password"
                      value={values.password} onChange={e => setValues({...values, password:e.target.value})}
                      placeholder="confirm password.."
                      className="form-control"
                  
                    ></input>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <div>
                    <button type="submit" className="btn btn-primary me-2">
                      Forgot Password
                    </button>
                  </div>
                  <div></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Forgot;
