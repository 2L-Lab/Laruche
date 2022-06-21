import React, { useEffect, useState } from "react";
import Card from "./Card";

import sanityClient from "../client.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Post = () => {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          mainImage{
            asset->{
            _id,
            url
          }
        }
      }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);
  return (
    <div className="all-post">
      <h2>Mes dernier articles</h2>
      <span></span>
      <div className="post-container">
        {allPostsData &&
          allPostsData.map((post, index) => <Card key={index} post={post} />)}
      </div>
    </div>
  );
};

export default Post;
