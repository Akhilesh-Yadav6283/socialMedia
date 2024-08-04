// src/components/Home.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/postActions';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const { loading, posts, error } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/item/${post.id}`}>
              <h2>{post.title.slice(0, 20)}...</h2>
              <p>{post.body.slice(0, 100)}... <span>Read More...</span></p>
              <img src={`https://picsum.photos/200?random=${post.id}`} alt={post.title} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
