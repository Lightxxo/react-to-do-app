import SidebarHeader from "./SidebarHeader";
import './Sidebar.css';
import SidebarContent from "./SidebarContent";

export default function Sidebar(){
    return(
        <div className="sidebar">
            <SidebarHeader/>
            <SidebarContent/>
        </div>  
        
    );
}