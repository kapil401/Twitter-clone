import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
function Widgets() {
    return (
        <>
            <div className="widgets">
                <div className="widgets_input">
                    <SearchIcon className="widgets_searchIcon"></SearchIcon>
                    <input placeholder="Search Twitter" type="text" />
                </div>
                <div className="widgets_widgetContainer  ">
                    <h2>What's happening</h2>
                    <TwitterTweetEmbed tweetId={"10765432100123458000"} />
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="kapil"
                        options={{ height: 400 }}
                    />

                    <TwitterShareButton
                        url={"https://www.linkedin.com/in/kapil-kumar-376280186/"}
                        options={{ text: "#reactjs is awesome", via: "Kapil" }}
                    />
                </div>
            </div>
        </>

    )

}
export default Widgets;