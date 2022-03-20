import Emp from './tabletitle'
import {useState,useEffect} from 'react';

function Viewdata(){
    const [filterdata,setFilterdata]=useState([])
   
    const [index, setIndex] = useState('')
    useEffect(() => {
        fetch("http://localhost:5000/?limit=4&page=1")
      .then((res) => res.json())
      .then((data) => {
        setFilterdata(data)
        setIndex(1)
      })
       
      }, [])  
const display=(num)=>{
  console.log(num)
  fetch("http://localhost:5000/?limit=4&page="+ num)
  .then((res) => res.json())
  .then((data) => {
    setFilterdata(data)
    setIndex(num)
  })
}
    const emplist= filterdata.map((emp)=>{
        return(
        <Emp name= {emp.name} age={emp.age} salary={emp.salary} id={emp.id}/>)
    })
    return(
<div >
      <table className="table table-bordered border-primary">
  <thead>
    <tr>
      <th scope="col">Employee Name</th>
      {/* <th scope="col">Id</th> */}
      <th scope="col">Salary</th>
      <th scope="col">Age</th>
    </tr>
  </thead>
  <tbody>
{emplist}
  </tbody>
  </table>
  <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-end">
    <li className= {index === 1 ? "page-item disabled": "page-item "}>
      <a className="page-link" href="#" tabindex="-1" disabled={index<2} onClick={()=>display(index-1)}>Prev</a>
    </li>
    <li className="page-item"><a class="page-link" href="#" onClick={()=>display(1)}>1</a></li>
    <li className="page-item"><a class="page-link" href="#" onClick={()=>display(2)}>2</a></li>
    <li className="page-item"><a class="page-link" href="#" onClick={()=>display(3)}>3</a></li>
    <li className="page-item"><a class="page-link" href="#" onClick={()=>display(4)}>4</a></li>
    <li className= {index === 4 ? "page-item disabled": "page-item "}>
      <a className="page-link" href="#" disabled={index>3}onClick={()=>display(index+1)}>Next</a>
    </li>
  </ul>
</nav>
    </div>
  );
}
export default Viewdata;