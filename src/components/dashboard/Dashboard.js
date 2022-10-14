import React , {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import loading from './../../assets/loading.gif';
import Graphs from './Graphs'

function Dashboard() {
    const id = JSON.parse(localStorage.getItem('id'));
    let[year, setYear] = useState(2022);
    let[data, setData] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    const Previous = ()=>{
        if (year !==  2019) {
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
          console.log(res.data);
          setTimeout(() => {
            setData(res.data);
            setIsLoading(false);
          }, 3000);
      })
  }, [])


  return (
    <div>
      { (isLoading) ? <img src={loading} className="ml-5 img-fluid"/> : 
        <table className='table table-info'>
            <thead>
              <th className="text-center">Nom</th>
              <th className="text-center">Email</th>
              <th className="text-center">Age</th>
              <th className="text-center">Genre</th>
            </thead>
            <tbody>
              <tr key={data.student.id}>
                <td className="text-center">{data.student.name}</td>
                <td className="text-center">{data.student.email}</td>
                <td className="text-center">{data.student.age}</td>
                <td className="text-center">
                  { data.student.gender ==='M'? "Masculin": "Feminin" }
                </td>
              </tr>
            </tbody>
          </table>
      }

    {/* Choosing the Academic year  */}
      <div className='row mt-5'>
            <div class="col-4"></div>
            <ul class="pagination col-8">
                <li class="page-item"><a class="page-link" href="#"
                onClick={Previous}>Previous</a></li>
                <li class="page-item"><a class="page-link" href="#"
                onClick={() => setYear(2019)}>2019</a></li>
                <li class="page-item"><a class="page-link" href="#"
                onClick={() => setYear(2020)}>2020</a></li>
                <li class="page-item"><a class="page-link" href="#"
                onClick={() => setYear(2021)}>2021</a></li>
                <li class="page-item active"><a class="page-link" href="#"
                    onClick={() => setYear(2022)}>2022</a></li>
                <li class="page-item"><a class="page-link" href="#"
                onClick={Next}>Next</a></li>
            </ul>
      </div>
      <Graphs year={year} id={id}/>
    </div>
  )
}

export default Dashboard
