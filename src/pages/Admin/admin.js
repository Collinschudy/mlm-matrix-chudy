import Topbar from "../../scenes/global/Topbar";
import Sidebar from "../../scenes/global/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../scenes/dashboard/dashboard";
import Users from '../../scenes/users/Users';
import Line from "../../scenes/Line";
import Calendar from "../../scenes/calender/calender";

const Admin = () => {
  return (
    <div className="content">
         <Sidebar />
        <div className="admin">
        <Topbar />
        
        
        <Routes>
            <Route path='' element={<Dashboard />}/>
            <Route path='users' element={<Users />}/>
            <Route path='lines' element={<Line />}/>
            <Route path='calendar' element={<Calendar />}/>

        </Routes>
        </div>
        
        </div>
  )
}

export default Admin