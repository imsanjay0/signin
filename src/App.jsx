//react-js\myreactdev\src\App.js
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import "./App.css";

function App() {
  const checkboxId2 = uuidv4();
  const [show, setShow] = useState("password")
  const [text, setText] = useState("Show")
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [note, setNote] = useState("hidden");
  const [note2, setNote2] = useState("hidden");
  
  const handleSubmit = () => {
    
    if(pass.length === 0) {
      alert("password has left Blank!");
    } else if (email.length === 0) {
      alert("Email has left Blank!");
    } else {
      const url = "http://localhost/server/code.php";
      let fData = new FormData();
      fData.append("pass", pass);
      fData.append("email", email);
      axios
        .post(url, fData)
        .then((response) => alert(response.data))
        .catch((error) => alert(error));     
        setNote2("")
        setTimeout(() => {
          setNote2("hidden")   
        }, 3000);

        setTimeout(() => {
          setNote("")   
        }, 3500);

        setEmail("")
        setPass("")
    }
  };

  const handleClk = ()=> {
    if(show==="password"){
      setShow("text")
      setText("Hide")
    }else{
      setShow("password")
      setText("Show")
    }
  }

  return (
    <div className="vh-100 gradient-custom">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card">
                <div className="card-body p-5">
                  <h3 className="text-center mb-5">
                      Skill India Login
                  </h3>
                  <div className={`alert alert-danger ${note}`} role="alert">
                      Invalid email or password !
                  </div>
                  <p className={`text-green-600 ${note2}`}>Loggedin Successfully! Redirecting....</p>
                  <form>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="email">
                        Your Email
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="password">
                        Your Password
                      </label>
                      <input
                        type={show}
                        className="form-control form-control-lg"
                        name="pass"
                        id="password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                      />
                    </div>

                    <div className="show relative w-fit left-60">
                   <input
                       type="checkbox"
                        id={checkboxId2}
                        className="form-check-input mr-1"
                        onClick={handleClk}  
                      />
                      <label
                        htmlFor='show' 
                        className='font-medium	font-mono	'
                        id='show'>{text}</label>
                      </div>

                    <div className="form-check d-flex justify-content-center mb-5">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3cg"
                      />
                      <label className="form-check-label" htmlFor="form2Example3g">
                        Industrial Training Institute{" "}
                        <a href="#!" className="text-body">
                          <u>Terms of service</u>
                        </a>
                      </label>
                    </div>
                    <div className="d-flex justify-content-center">
                      <input
                        type="button"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 "
                        name="submit"
                        id="submit"
                        value="Register"
                        onClick={handleSubmit}
                      />
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Have already an account?{" "}
                      <a href="#!" className="fw-bold text-body">
                        <u>Login here</u>
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
