// src/components/Home.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import { Link } from 'react-router-dom';
import "./index.css"

const Home = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Social Media App</h1>
      <hr/>
      <div className="posts-list">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <img src={`https://picsum.photos/200?random=${post.id}`} alt={post.title} />
            <h2>{post.title.slice(0, 20)}...</h2>
            <p>{post.body.slice(0, 100)}... <Link to={`/item/${post.id}`}>Read More</Link></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
