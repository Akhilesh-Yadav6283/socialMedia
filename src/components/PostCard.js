import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css"

function PostCard({ post }) {
  const { id, title, body } = post;
  const trimmedTitle = title.length > 30 ? `${title.slice(0, 30)}...` : title;
  const trimmedBody = body.length > 100 ? `${body.slice(0, 100)}...` : body;

  return (
    <div className="post-card">
      <img src={`https://picsum.photos/200?random=${id}`} alt={title} />
      <h3>{trimmedTitle}</h3>
      <p>{trimmedBody}</p>
      <Link to={`/item/${id}`}>Read More...</Link>
    </div>
  );
}

export default PostCard;
