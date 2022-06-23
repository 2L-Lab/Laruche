// src/components/OnePost.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import Headers from "./Headers.js";
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image
       }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <div className="header">
      <Headers />
      <div className="article-container">
        <div>
          <h3 className="article-title">{postData.title}</h3>
          <div>
            {postData.authorImage && (
              <img
                style={{ height: "200px", width: "250px" }}
                src={urlFor(postData.authorImage).width(100).url()}
                alt="Author is Kap"
              />
            )}
          </div>
        </div>
        <div>
          {postData.mainImage && (
            <img
              className="article-image"
              src={urlFor(postData.mainImage).width(200).url()}
              alt=""
            />
          )}
        </div>
        <h4>{postData.name}</h4>
        <div className="text-container">
          <BlockContent
            blocks={postData.body}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
          />
        </div>
      </div>
    </div>
  );
}
