import React, { useEffect, useState } from "react";
import Card from "./Card";

import sanityClient from "../client.js";

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
      <div className="divider">
        <h2>Mes dernier articles</h2>
        <i class="fa-solid fa-feather-pointed"></i>
      </div>

      <div className="post-container">
        {allPostsData &&
          allPostsData.map((post, index) => <Card key={index} post={post} />)}
      </div>
    </div>
  );
};

export default Post;
