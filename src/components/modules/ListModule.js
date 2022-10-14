import React , {useState,useEffect} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'

function ListModule(props) {
  let [data,setData] = useState ([]);

  useEffect (() =>{
      fetch(`http://localhost:8000/api/module/list/${props.grade}`).then((res)=>{
          return res.json()
      }).then((data)=>{
        //console.log(data.list_module)
        setData(data.list_module)
      })
},[props.grade]);


return (
   
      <div>
            <h1 align = 'center' className="mt-3 mb-5">Les listes de module des {props.grade}</h1>
            <table class="table table-striped">
            <thead class="thead-dark">
            <tr>
            <td>Nom</td>
            <td>code</td>
            <td>Heure</td>
            <td colSpan={2}></td>
            </tr>
            </thead>
            <tbody>
              
                    {data.map((data)=>{
                    return( 
                    <tr key={data.module.id}>
                    <td>
                    <Link to={`/detailModule/${data.module.id}`} >
                          {data.module.name}
                    </Link>
                      </td>
                    <td>{data.module.code}</td>
                    <td>{data.module.hour}</td>
                    </tr>
                    )
                })}
                </tbody>
                </table>
    </div>
  )
}

export default ListModule
