import React , {useState,useEffect} from "react";
import { Link } from 'react-router-dom'


function ListModule(props) {
  let [data,setData] = useState ([]);

  useEffect (() =>{
      fetch(`http://localhost:8000/api/module/list/${props.grade}/${props.year}`).then((res)=>{
          return res.json()
      }).then((data)=>{
        //console.log(data.list_module)
        setData(data.list_module)
      })
  },[props.grade, props.year]);


return (
   
      <div className="container mb-5">
            <h1 align = 'center' className="mt-3 mb-5">Les listes de module des {props.grade}</h1>
          
            <table class="table table-striped table-hover">
            <thead class="thead-dark">
            <tr>
            <td>Nom</td>
            <td>Code</td>
            <td>Coef</td>
            <td>Heure</td>
            </tr>
            </thead>
            <tbody>
              
                  {data.map((data)=>{
                    return( 
                    <tr key={data.module.id}>
                    <td>
                    <Link to={`/detailModule/${data.module.id}`} className='h6 text-dark'>
                          {data.module.name}
                    </Link>
                      </td>
                    <td>{data.module.code}</td>
                    <td>{data.module.credits}</td>
                    <td>{data.module.hour}</td>
                    </tr>
                    )
                  })}
                </tbody>
                </table>
                <div className="mt-5 mb-5">.</div>
    </div>
  )
}

export default ListModule
