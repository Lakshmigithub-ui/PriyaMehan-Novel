import { Routes, Route } from "react-router";
// import Read from "../Header/Header";
import Login from "../Login/Login";

function Routingconfig() {
  return(
    <>
      <Routes>
        <Route path="login" element={<Login></Login>}></Route>

        {/* <Route path='Read' element={<Read></Read>} ></Route> */}
      </Routes>
    </>
  );
}

export default Routingconfig;
