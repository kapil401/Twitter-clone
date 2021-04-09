import React from 'react';
import  './SidebarOption.css';

function SidebarOption({ Active,text, Icon}) {

    return (
        <>
            <div className={`sidebarOption ${Active &&'sidebarOption--Active'}`}>
                <Icon />
                   
                <h2>{text}</h2>

            </div>

        </>

    )
}
export default SidebarOption;