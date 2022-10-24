import React , {useState,useEffect} from "react";

function Navbar() {
  const logout = ()=>{
    localStorage.clear();
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/dashboard">Note <span className='text-info'>'EO</span></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        
      </li>

    </ul>
    <a className="nav-link text-light" href="/module">Modules</a>
    <a className="nav-link text-light" href="/mark">Notes</a>
    <a className="nav-link text-light" href="/re-take_exam">Rattrapages</a>
    <form className="form-inline my-2 my-lg-0" onSubmit={logout}>
      <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Se déconnecter</button>
    </form>
  </div>
</nav>
    </div>
  )
}

export default Navbar
