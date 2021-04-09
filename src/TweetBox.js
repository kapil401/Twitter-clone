import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar } from "@material-ui/core";
import db, { firebaseApp } from './firebase';



function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const [file, setfile] = useState([])

    var fileArray = []
    const handlchange = (e) => {

        let filetemp = [];
        const file = e.target.files[0];
        const storageRef = firebaseApp.storage().ref()
        const fileRef = storageRef.child(file.name);
        fileRef.put(file);
        filetemp.push(e.target.files)
        for (let i = 0; i < filetemp[0].length; i++) {
            fileArray.push(URL.createObjectURL(filetemp[0][i]))

            //  console.log(fileArray)
            setfile(fileArray);
        }
        console.log(fileArray)
        fileRef.getDownloadURL().then((url) => {
            setTweetImage(url);
        })
        // console.log(url);
       

    };
    const sendTweet = (e) => {
        e.preventDefault();


        db.collection('posts').add({
            displayName: "kapil kumar",
            username: "kumar",
            verified: true,
            text: tweetMessage,
            image: file,
            avatar: "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
            timestamp: new Date()
            // timestamp: firebaseApp.firestore().Timestamp.now()
        });
        setTweetMessage("");
        
        document.getElementById('tweetBox__imageInput').value='';
        setfile([])
    };
 
    // console.log(file[0])
    return (
        <>
            <div className="tweetBox">
                <form>

                    <div className="tweetBox__input">
                        <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
                        <input
                            onChange={(e) => setTweetMessage(e.target.value)}
                            value={tweetMessage}
                            placeholder="What's happening?"
                            type="text"

                        />
                    </div>

                    <input
                         multiple
                        onChange={handlchange}
                       id="tweetBox__imageInput"
                        
                        // accept="Image/*"
                        type="File"
                    />

                    <button onClick={sendTweet}
                        type="submit"
                          
                        className="tweetBox__tweetButton"> Tweet
                    </button>
                </form>
                <div className="muti-preview">
                {file.map(url => (
                    <img src={url} alt="..." id="multi-img" />
                ))}
                </div>
            </div>
        </>

    )
}
export default TweetBox;