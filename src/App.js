import React from "react";
import Login from "./pages/General/Login";
import axios from "axios";
import io from "socket.io-client";
import InstallAlarm from "../src/pages/General/InstallAlarm";

axios.defaults.withCredentials = true;
// export const socket = io("http://3.34.134.62:3000");
// export const socket = io("http://localhost:4000");
//export const socket = io("https://api.pokids.site:8000");
export const socket = io(process.env.REACT_APP_SOCKET_URL);

function App() {
  return (
    <>
    <div className="fixed right-0 m-4">
      <InstallAlarm />
    </div>
      <Login />
    </>
    
  )
}

export default App;
