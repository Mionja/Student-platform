import React, { useState } from 'react'
import logo from './../assets/esti.jpg'
import Vector from './../assets/VECTOR.png'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'

function Login() {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState()
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const student = { email, password};
    console.log(student);

    const res = await axios({
        method: 'GET',
        url: `http://localhost:8000/api/login/${email}/${password}`,
        // data: student,
      })
    console.log('data', res.data);
    console.log('status', res.status);
    if (res.status === 201 ){
      localStorage.setItem('id', JSON.stringify(res.data.student_id))
      Swal.fire({
        icon: 'success',
        title: 'Logged successfully',
        showConfirmButton: true,
      })
      navigate('/dashboard');
    }        
}


  return (
    <>
    <form action="#" method="post" onSubmit={handleSubmit}>
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{borderRadius: 1+'rem'}}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block" >
                    <img src={Vector} alt="login form" className="img-fluid" style={{borderRadius: 1+'rem'+ 0 +  0 + 1+'rem'}}/>
                
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
      
                      <div>
      
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <span className="h1 fw-bold mb-0">
                            <img src={logo} alt="" className="img-fluid mr-5" style={{width:100+"px"}}/></span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: 1+"px"}}>Se connecter sur votre compte</h5>
                      
                        <div className="form-outline mb-4">
                          <input name="login" type="email" id="form2Example17" 
                          className="form-control form-control-lg" placeholder="Addresse email" 
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}/>
                        </div>
      
                        <div className="form-outline mb-4">
                          <input name="password" type="password" id="form2Example27" 
                          className="form-control form-control-lg" placeholder="Mot de passe"
                           required
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                        </div>
      
                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block" type="submit" name="connect">Se connecter</button>
                        </div>
      
                        <a className="small text-muted" href="#!">Mot de passe oublié?</a>
                        <p className="mb-5 pb-lg-2" style={{color: "#393f81"}}>Pas de compte?
                        <a href="#" className="text-info">S'inscrire</a></p>
                        <a href="#!" className="small text-muted">Bienvenu à ESTI.</a>
                        
                      </div>
      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default Login
