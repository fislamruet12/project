import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const list = [
  {
    app: "Web Application",
    select: false,
    srcs: "https://img.icons8.com/color/30/000000/windows-10.png",
  },
  {
    app: "Android App",
    select: false,
    srcs: "https://img.icons8.com/color/30/000000/android-os.png",
  },
  {
    app: "IOS App",
    select: false,
    srcs: "https://img.icons8.com/color/30/000000/mac-os--v1.png",
  },
  {
    app: "DotNet App",
    select: false,
    srcs: "https://img.icons8.com/color/30/000000/source-code.png",
  },
  {
    app: "Django App",
    select: false,
    srcs: "https://img.icons8.com/color/30/000000/mac-os--v1.png",
  },
  {
    app: "Laravel App",
    select: false,
    srcs: "https://img.icons8.com/color/30/000000/week-view.png",
  },
  {
    app: "Swift App",
    select: false,
    srcs: "https://img.icons8.com/color/30/000000/swift.png",
  },
  {
    app: "React Native App",
    select: false,
    srcs: "https://img.icons8.com/color/30/000000/react-native.png",
  },
];
const filter = (selected, item) => {
  console.log(selected, 3);
  let bolean = false;
  let temp = [];
  for (let i in selected) {
    if (selected[i].app === item.app) {
      bolean = true;
    } else {
      temp.push(selected[i]);
    }
  }
  if (bolean === false) {
    temp.push(item);
  }
  return temp;
};
const reset = (applist) => {
  for (var i in applist) {
    applist[i].select = false;
  }
  return applist;
};
const ChoseItem = () => {
  const [applist, Setapplist] = React.useState([]);
  const [ref, setref] = React.useState(false);
  const [selected, Setselected] = React.useState([]);
  const history = useHistory();
  useEffect(() => {
    Setapplist(reset(list));
    console.log("useeffect");
  }, []);

  const sel = (id) => {
    applist[id].select = !applist[id].select;
    let temp = filter(selected, applist[id]);
    //console.log(temp,1)
    Setselected(temp);
    //setref(!ref)
  };

  const goproject = () => {
    history.push({
      pathname: "/project",
      search: "?update=true", // query string
      state: {
        // location state
        update: selected,
      },
    });
  };
  const deselct = (id) => {
    //applist[id].select = false
    alert(id);
    //setref(!ref)
  };
  console.log(selected, applist);
  return applist.length === 0 ? null : (
    <div>
      <div className="row">
        {Object.keys(applist).map((ind) => (
          <div
            key={ind}
            className={applist[ind].select === false ? "column" : "column brd"}
            onClick={() => sel(ind)}
          >
            <div className="up">
              {applist[ind].select === false ? (
                <i className="vis"></i>
              ) : (
                <i onClick={() => deselct(ind)} className="fa fa-check"></i>
              )}
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
      <button className="btn" onClick={() => goproject()}>
        next
      </button>
    </div>
  );
};
function Home() {
  return (
    <section id="app">
      <div className="container">
        <div>
          <h1 className="hd">What kind of project do you want To Develop?</h1>
        </div>
        <div>
          <h1 className="hb">
            please Choose the required field below. You Can Chosoe multiple
            option.
          </h1>
        </div>
      </div>
      <div className="container">
        <ChoseItem />
      </div>
    </section>
  );
}
export default Home;
