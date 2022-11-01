import React , {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import loading from './../../assets/loading.gif';
import photo from './../../assets/photo.jpg';
import email from './../../assets/email.png';

function Dashboard() {
    const id = JSON.parse(localStorage.getItem('id'));
    let[data, setData] = useState([]);
    let[grades, setGrades] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      axios.get(`http://localhost:8000/api/student/${id}`)
      .then( res => {
          setTimeout(() => {
            console.log( res.data.student.grades);
            setData(res.data);
            setGrades(res.data.student.grades)
            console.log('grades', grades);
            setIsLoading(false);
          }, 2000);
      })
  }, [])


  return (
      <div className="container border mt-3" style={{border:1+'px solid black', borderRadius:15+'px', backgroundColor:'gray'}}>
          { (isLoading) ?  <p className="text-center h3">Attendez un instant...<div class="sk-cube-grid">
                                    <div class="sk-cube sk-cube1"></div>
                                    <div class="sk-cube sk-cube2"></div>
                                    <div class="sk-cube sk-cube3"></div>
                                    <div class="sk-cube sk-cube4"></div>
                                    <div class="sk-cube sk-cube5"></div>
                                    <div class="sk-cube sk-cube6"></div>
                                    <div class="sk-cube sk-cube7"></div>
                                    <div class="sk-cube sk-cube8"></div>
                                    <div class="sk-cube sk-cube9"></div>
                                    </div>
                                </p> : 
              <div className="media-body mt-3">
                <div className="row">
                  <img src={photo} alt="photo" class="mr-3 mt-3 rounded-circle col-5"
                  style={{width:150+'px'}}/>
                  <span className="col-1"></span>
                  <h2 className="col-5 mt-5">{data.student.name}</h2>
                </div>

                <div className="row mt-5 mb-3">
                <div className="col"></div>
                    <div className="col">
                      <img src={email} alt="email photo" 
                      className="mr-2"/>
                      {data.student.email}
                      </div>
                    <div className="col">Age: {data.student.age}</div>
                    <div className="col">Genre: { data.student.gender ==='M'? "Masculin": "Feminin" }</div>
                </div>
                <div className="row mt-5 mb-3">
                  {data.student.grades.map((grade)=>{
                    <div className="col">Teeest</div>
                    // <p>{grade.name}</p>
                  })}
                </div>
              </div>
          }

    </div>
  )
}

export default Dashboard
