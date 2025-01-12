import "./SidebarHeaderPlaceholderIcon.css";

export default function SidebarHeaderPlaceholderIcon({iconSrc}) {
  return (
    <div className="sidebar-placeholder-icon-container">
      <img src={iconSrc} className="sidebar-placeholder-icon" alt="icon" />
    </div>
  );
}
