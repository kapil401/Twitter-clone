import { React, useState, useEffect } from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import FlipMove from "react-flip-move";
import db from './firebase.js';



function Feed() {
    let [posts, setpost] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
            setpost(snapshot.docs.map((doc) => doc.data())))
    }, []);
    return (
        <>
            <div className="feed">
                <div className="feed_header">
                    <h1>Home</h1>
                </div>
                <TweetBox />
                <FlipMove>
                    {posts.map((post) => (
                        <Post
                            key={post.text}
                            displayName={post.displayName}
                            username={post.username}
                            verified={post.verified}
                            text={post.text}
                            avatar={post.avatar}
                            image={post.image}
                            
                        />
                    ))}
                </FlipMove>
            </div>
        </>

    );
}
export default Feed;
