import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import RDN from './RDN';

function YearList() {
    let[year, setYear] = useState(2022);
    
    let Previous = ()=>{
        if (year !==  2020) {
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
       <div className='row'>
                <div className="col-4"></div>
                <div className='col-8'>
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#"
                        onClick={Previous}>Previous</a></li>
                        {
                            (year === 2020) ? 
                        <li className="page-item active"><a className="page-link" href="#"
                        onClick={() => setYear(2020)}>2020</a></li>
                        :
                        <li className="page-item"><a className="page-link" href="#"
                        onClick={() => setYear(2020)}>2020</a></li>
                        }
    
                        {
                            (year === 2021) ? 
                        <li className="page-item active"><a className="page-link" href="#"
                        onClick={() => setYear(2021)}>2021</a></li>
                        :
                        <li className="page-item"><a className="page-link" href="#"
                        onClick={() => setYear(2021)}>2021</a></li>
                        }
    
                        {
                            (year === 2022) ? 
                        <li className="page-item active"><a className="page-link" href="#"
                        onClick={() => setYear(2022)}>2022</a></li>
                        :
                        <li className="page-item"><a className="page-link" href="#"
                        onClick={() => setYear(2022)}>2022</a></li>
                        }
    
                        {
                            (year === 2023) ? 
                        <li className="page-item active"><a className="page-link" href="#"
                        onClick={() => setYear(2023)}>2023</a></li>
                        :
                        <li className="page-item"><a className="page-link" href="#"
                        onClick={() => setYear(2023)}>2023</a></li>
                        }
    
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
