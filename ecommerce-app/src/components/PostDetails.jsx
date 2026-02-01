import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/posts";

  // const [postData, setPostData] = useState([])
  const [postData, setPostData] = useState([]);

  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const fetchData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log("data", data);
    setPostData(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("title", title);

    try {
      const response = await fetch(API_URL, {
        method: "PUT",
        body: JSON.stringify({
          title,
          body: "body description",
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          // "Authroization": ""
        },
      });

      const data = await response.json();
      console.log("data", data);
      setPostData((prev) => [data, ...prev]);
    } catch (error) {
      console.log("errr", error.message || "Something went wrong");
    }
  };

  const handleChange = (e) => {
    console.log(e.nativeEvent)
    setTitle(e.target.value);
  };

  const navigateToComments = (postId) => {
    // const consent = prompt("confirm on navigating to comments page!!");
    // if (!consent) return;

    navigate(`/comments/${postId}`, {
      state: {
        postId,
        userId: "Sahil",
      },
    });
    // window.history.pushState({}, "", `/comments/${postId}`);
    // window.dispatchEvent(new PopStateEvent("popstate"));
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener("popstate", () => {});

    return () => window.removeEventListener;
  }, []);

  return (
    <div>
      PostDetails
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={title} required />
        <button>Post</button>
      </form>
      <ul>
        {postData.map((ele) => (
          <li>
            <span>{ele.title}</span>
            <button onClick={() => navigateToComments(ele.id)}>👁</button>
            {/* <Link to={`/comments/${ele.id}`}>
                            <button>👁</button>
                        </Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetails;
