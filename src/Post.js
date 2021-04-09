import { React, forwardRef } from 'react'
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";


import './Post.css'

const Post = forwardRef((
    {
        displayName,
        username,
        verified,
        text,
        image,
        avatar


    }, ref) => {
    console.log(image)
    return (
        <div className="post" ref={ref}>
            <div className="post_avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>
                            {displayName}{""}
                            <span>
                                {verified && <VerifiedUserIcon className="post_badge"></VerifiedUserIcon>} @{username}
                            </span>

                        </h3>
                    </div>
                    <div className="post_headerDescription">
                        <p>{text} </p>
                    </div>
                </div>
                <div className="file">
                    {image.map(url => (
                        <img src={url} className="img" alt=""></img>
                    ))}
                </div>
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>



    )
}
);
export default Post;