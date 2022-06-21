import React from "react";
import { Link } from "react-router-dom";

const Card = ({ post, index }) => {
  return (
    <Link to={"/" + post.slug.current} key={post.slug.current}>
      <li className="card">
        <span className="post" key={index}>
          <h2>{post.title}</h2>
          <span>
            <img src={post.mainImage.asset.url} alt="" />
          </span>

          <button>Lire la suite ...</button>
        </span>
      </li>
    </Link>
  );
};

export default Card;
