import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import "./index.css"


function Detail() {
  const { id } = useParams();
  const post = useSelector((state) => state.posts.posts.find((p) => p.id === parseInt(id)));

  return (
    <div className="detail">
      {post ? (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <p>User ID: {post.userId}</p>
        </>
      ) : (
        <p>Post not found</p>
      )}
    </div>
  );
}

export default Detail;
