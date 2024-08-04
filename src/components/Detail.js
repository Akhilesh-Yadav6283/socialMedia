// src/components/Detail.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const post = useSelector(state =>
    state.posts.posts.find(post => post.id === parseInt(id))
  );

  if (!post) return <p>Post not found</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>User ID: {post.userId}</p>
      <img src={`https://picsum.photos/200?random=${post.id}`} alt={post.title} />
    </div>
  );
};

export default Detail;
