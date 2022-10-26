import React , {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import loading from './../../assets/loading.gif';
import photo from './../../assets/photo.jpg';
import email from './../../assets/email.png';

function Dashboard() {
    const id = JSON.parse(localStorage.getItem('id'));
    let[year, setYear] = useState(2022);
    let[data, setData] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    const Previous = ()=>{
        if (year !==  2020) {
            setYear(year-1)   
        }
        else{
            alert("Pas d'année scolaire correspondant");
        }
    }

    const Next = ()=>{
        if (year <  2022) {
            setYear(year+1)   
        }
        else{
            alert("Pas d'année scolaire correspondant");
        }
    }

    useEffect(() => {
      axios.get(`http://localhost:8000/api/student/${id}`)
      .then( res => {
          setTimeout(() => {
            console.log('grades', res.data.student.grades);
            setData(res.data);
            setIsLoading(false);
          }, 2000);
      })
  }, [])


  return (
    <div>
       <div className="container mt-3">
          { (isLoading) ? <img src={loading} className="ml-5" width={150+'px'}/> : 
          <>
              <div className="media-body mt-3" style={{border:1+'px solid black', borderRadius:15+'px', backgroundColor:'gray'}}>
                <div className="row">
                  <img src={photo} alt="photo" class="mr-3 mt-3 rounded-circle col-5"/>
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
              </div>

              <div className="container mt-4">
                <div className="row"> 
                {data.student.grades.map(()=>{
                  <div className="col border">
                    test 
                  </div>
                })}
                </div>
              </div>
          </>
          }
        </div>
    </div>
  )
}

export default Dashboard
