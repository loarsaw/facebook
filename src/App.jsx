import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Feed from "./Feed";
import "./App.css";
import Widgets from "./Widgets";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
function App() {
  const [{user}, dispatch]= useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div>
          <Header />

          <div className="app_body">
            <SideBar />

            <Feed />

            <Widgets />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
