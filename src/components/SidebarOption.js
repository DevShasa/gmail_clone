import React from 'react';
import "./SidebarOption.css";

function HeaderOption({ Icon, title, number, selected }) {
    return (
        <div className={`sidebarOption ${selected && "sideBarOption--active"}`}>
            <Icon />
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    )
}

export default HeaderOption