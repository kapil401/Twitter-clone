import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// import{Button }from "@material-ui/core";
import {Link} from 'react-router'

function Sidebar() {
    return (
        <>
        
            <div className="sidebar">
            <a href="https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Flocalhost%3A3000%2F&ref_src=twsrc%5Etfw&text=%23reactjs%20is%20awesome&tw_
            p=tweetbutton&url=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fkapil-kumar-376280186%2F&via=Kapil" target="_blank"><TwitterIcon  className="sidebar__twitterIcon"
            /></a>
            <a href="http://localhost:3000/" target="_blank ">
            <SidebarOption  Active Icon={HomeIcon} text="Home" /></a>

            <a href="https://twitter.com/explore/tabs/news">
            <SidebarOption Icon={SearchIcon} text="Explore" />
            </a>
            <SidebarOption Icon={NotificationImportantIcon} text=" Notification" />
            <SidebarOption  Icon={ MailOutlineIcon} text=" Message"   />
            <SidebarOption   Icon={BookmarkBorderIcon} text="Bookmarks"/>
            <SidebarOption  Icon={ListAltIcon}  text="List"/>
            <SidebarOption  Icon={PersonOutlineIcon }  text="Profile"/>
            <SidebarOption  Icon={MoreHorizIcon  }  text="More"/>
            <button variant="outliend" className="sidebar_tweet "  >Tweet</button>
            </div>
        </>
    )
}

export default Sidebar;