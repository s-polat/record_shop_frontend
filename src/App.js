import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import RecordAdd from "./components/pages/RecordAdd";
import Records from "./components/pages/Records";

function App() {
  const [records, setRecords] = useState([]);
  const [addRecord, setAddRecord] = useState({
    title: "new record",
    artist: "adele",
    cover: "",
    year: "2022",
    price: 6.99,
  });

  async function getData() {
    const data = await fetch("http://localhost:4000/api");
    const result = await data.json();
    console.log(result);
    setRecords(result.records);
  }

  function postData() {
    fetch("https://localhost:4000/records", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addRecord),
    })
      .then((response) => response.json())
      
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  useEffect(() => {
    getData();
   
  }, []);

  console.log(records);

  return (
    <div>
      <h1 className="text-center">A Record Page</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route path="/records" element={<Records records={records} />} />

          <Route path="/addRecord" element={<RecordAdd />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
