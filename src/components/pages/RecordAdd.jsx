import React from "react";
import Navigation from "../Navigation";

function RecordAdd() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Navigation/>
      <div className=" p-2 "  style={{width:"28rem"}}>
      <form>
        <h1>Add new Record</h1>
        <div className="mb-3">
          <label for="Input1" className="form-label">
           title
          </label>
          <input
            type="text"
            className="form-control"
            id="Input1"
          />
         
        </div>
        <div className="mb-3">
          <label for="Input2" className="form-label">
            artist
          </label>
          <input
            type="text"
            className="form-control"
            id="Input2"
          />
        </div>
        <div className="mb-3">
          <label for="Input2" className="form-label">
            year
          </label>
          <input
            type="text"
            className="form-control"
            id="Input2"
          />
       </div>
        <div className="mb-3">
          <label for="Input2" className="form-label">
            price
          </label>
          <input
            type="number"
            className="form-control"
            id="Input2"
          />
        </div>
        <div className="mb-3">
          <label for="Input2" className="form-label">
            cover img url
          </label>
          <input
            type="url"
            className="form-control"
            id="Input2"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      </div>
      
    </div>
  );
}

export default RecordAdd;
