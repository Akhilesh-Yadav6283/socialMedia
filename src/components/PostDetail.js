// src/components/PostDetail.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import "./index.css"


const PostDetail = () => {
  const { id } = useParams();
  const post = useSelector(state => state.posts.posts.find(post => post.id === Number(id)));

  if (!post) return <p>Post not found</p>;

  return (
    <>
    <h1>Social Media App</h1>
    <hr/>
    <div className='post-card'>
      <img src={`https://picsum.photos/200?random=${post.id}`} alt={post.title} />
      <p>User ID: {post.userId}</p>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
    </>)
};

export default PostDetail;
