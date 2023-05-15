import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async() => {
    try {
      axios.get('http://localhost:5000/api/comments')
      .then(res => {
        setComments(res.data);
      })
    } catch(error) {
      console.error('Error fetching comments:', error);
    }
  };

  const addComment = async() => {
    try {
      axios.post('http://localhost:5000/api/comments', { text: newComment }, {
        headers: { 'Content-Type': 'application/json' }
      })
      .then(res => {
        setComments([...comments, res.data]);
        setNewComment('');
      })
    } catch(error) {
      console.error('Error posting a new comment:', error);
    }
  };

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map(comment => <li key={comment.id}>{comment.text}</li>)}
      </ul>
      <form onSubmit={addComment}>
        <input type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)} />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}

export default App;
