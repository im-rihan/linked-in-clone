import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./feed.css";
import FeedInputOption from "./FeedInputOption";
import { db } from "./firebase";
import Post from "./Post";
import { getFirestore } from "firebase/firestore"

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "Rihan Mohammed",
      description: "This is testing description",
      message: input,
      photoUrl: "",
      timestamp: firebase.getFirestore().FieldValue.serverTimestamp(),
    });
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <Create />
          <form>
            <input onChange={(e) => setInput(e.target.value)} type="text" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <FeedInputOption Icon={Image} title="Photo" color="#378fe9" />
          <FeedInputOption Icon={Subscriptions} title="Video" color="#7fc15e" />
          <FeedInputOption Icon={EventNote} title="Event" color="#e7a33e" />
          <FeedInputOption
            Icon={CalendarViewDay}
            title="Write Article"
            color="#fc9295"
          />
        </div>
      </div>
      {/* Posts */}
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />;
      })}
    </div>
  );
}

export default Feed;
