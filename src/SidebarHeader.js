import SidebarHeaderUser from "./SidebarHeaderUser";
import "./SidebarHeader.css"
import SidebarHeaderPlaceholderIcon from "./SidebarHeaderPlaceholderIcon";

export default function SidebarHeader(){
    let placeholderColor = getComputedStyle(document.documentElement).getPropertyValue('--placeholder-icon-color').trim().slice(1);

    let notifIcon = `https://img.icons8.com/?size=50&id=82754&format=png&color=${placeholderColor}`;
    let clipIcon = `https://img.icons8.com/?size=50&id=98927&format=png&color=${placeholderColor}`;
    
    return (
        <>
            <div className="sidebar-header"> {/* This is the parent container */}
                <SidebarHeaderUser />
                <div className="sidebar-header-placeholder-icons-layout">
                    <SidebarHeaderPlaceholderIcon iconSrc={notifIcon}/>
                    <SidebarHeaderPlaceholderIcon iconSrc={clipIcon}/>
                </div>
            </div>
        </>
    );
}