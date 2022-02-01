
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import RecordAdd from "./components/pages/RecordAdd";
import Records from "./components/pages/Records";

function App() {

  const [records, setRecords]=useState([])

  async function getData(){
    const data = await fetch('/api/')
    console.log(data.json());
    
  }

   useEffect(()=>{
     getData()
   },[])

   console.log(records);

  return (
    <div >


      <h1 className='text-center'>A Record Page</h1>


      <BrowserRouter>

      <Routes>
        <Route path='/' element={<Navigation/>}/>
        <Route path='/records' element={<Records/>}/>

        <Route path='/addRecord' element={<RecordAdd/>}/>
      </Routes>
      
      </BrowserRouter>
    
     
    </div>
  );
}

export default App;
