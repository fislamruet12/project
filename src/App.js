
import './App.css'
import React, { useEffect } from 'react'

const list = [{
  app: 'Web Application', select: false
}, { app: 'Android App', select: false }, { app: 'IOS App', select: false }, { app: 'DotNet App', select: false }, { app: 'Django App', select: false }, { app: 'Laravel App', select: false }, { app: 'Swift App', select: false }, { app: 'React Native App', select: false },]
const ChoseItem = () => {
  const [applist, Setapplist] = React.useState([])
  const [ref, setref] = React.useState(false)
  useEffect(() => {
    Setapplist(list)
  }, [])
  const sel = (id) => {

    applist[id].select = !applist[id].select
    // Setapplist(applist)
    setref(!ref)
  }
  const deselct = (id) => {
    //applist[id].select = false
    alert(id)
    //setref(!ref)
  }
  //console.log(applist)
  return (
    applist.length === 0 ? null :
      <div className="row" >
        {
          Object.keys(applist).map(ind => (
            <div key={ind} className={applist[ind].select === false ? "column" : "column brd"} onClick={() => sel(ind)}>
              <div className="up">
                {
                  applist[ind].select === false ? <i className="vis"></i> :
                    <i
                      onClick={() => deselct(ind)}
                      className="fa fa-check"></i>

                }
              </div>
              <div className="down">
                <div className="box">
                  <i className="fa fa-home"></i>
                </div>
                <div className="title">
                  <h1 className="hb">{applist[ind].app}</h1>
                </div>


              </div>
            </div>
          ))
        }
      </div>
  )
}
function App() {
  return (
    <>
      <nav>
        <div class="container">
          <div className="logo">
            <img src="https://jobxprss-media-sg.s3.amazonaws.com/images/company_logo_077597.png" alt="logo" />
          </div>
          <div class="menu">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Companies</a></li>
              <li className="active"><a href="#">Services</a></li>
              <li><a href="#">Client</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div class="clr"></div>

        </div>
      </nav>

      <section id="app">
        <div className="container">
          <div>
            <h1 className="hd">What kind of project do you want To Develop?</h1>
          </div>
          <div>
            <h1 className="hb">please Choose the required field below. You Can Chosoe multiple option.</h1>
          </div>
        </div>
        <div className="container">
          <ChoseItem />
        </div>
        <div className="container">
          <button className="btn">next</button>
        </div>
      </section>
    </>
  );
}

export default App;
