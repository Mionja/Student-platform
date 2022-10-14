import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import RDN from './RDN';

function YearList() {
    let[year, setYear] = useState(2022);
    
    let Previous = ()=>{
        if (year !==  2019) {
            setYear(year-1)   
        }
        else{
            alert("Pas d'année scolaire correspondant");
        }
    }

    let Next = ()=>{
        if (year <  2022) {
            setYear(year+1)   
        }
        else{
            alert("Pas d'année scolaire correspondant");
        }
    }
  return (
    <>
       {/** Choose the year */}
       <div className='row mt-2'>
                <div className="col-4"></div>
                <div className='col-8'>
                    <ul class="pagination">
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
        </div>
        <RDN id={JSON.parse(localStorage.getItem('id'))} year={year}/>
    </>
  )
}

export default YearList
