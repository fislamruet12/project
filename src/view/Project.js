import React from "react";
import { useLocation } from "react-router-dom";
function Project() {
  const location = useLocation();

  //console.log(location.state.update);

  let applist = location.state.update;
  return applist.length === 0 ? (
    <div className="container">
      <div>
        <h1 className="hd">Please select atleast one project to continue.</h1>
      </div>
    </div>
  ) : (
    <div id="app">
      <div className="container">
        <div>
          <h1 className="hd">You have selected these Stack to Develop?</h1>
        </div>
        <div>
          <h1 className="hb">You can Choose only one stack.</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {Object.keys(applist).map((ind) => (
            <div key={ind} className="column brd">
              <div className="up">
                <i className="vis"></i>
              </div>
              <div className="down">
                <div className="box">
                  <img src={applist[ind].srcs} />
                </div>
                <div className="title">
                  <h1 className="hb">{applist[ind].app}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Project;
