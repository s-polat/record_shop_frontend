import React from "react";
import Navigation from "../Navigation";

function Records({ records }) {
  return (
    <div>
      <Navigation />
      <h1 className="text-center">All of Record</h1>
      <div className="d-flex justify-content-around align-items-center">
        
          {records.map((record) => {
            return (
              
                <div class="card" style={{width: "18rem"}}>
                  <img src={record.cover} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Record Name: {record.title}</h5>
                    <p class="card-text">
                      Artist: {record.artist}
                    </p>
                    <p class="card-text">
                      Year: {record.year}
                    </p>
                    <p class="card-text">
                      Price: {record.price}
                    </p>
                    
                  </div>
                </div>
              
            );
          })}
        
      </div>
    </div>
  );
}

export default Records;
