import React, { useState, useEffect } from 'react';

interface Post {
  _id: string;
  title: string;
  content: string;
}

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = 'http://localhost:5000/api';

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_BASE_URL}/posts`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: Post[] = await response.json();
        setPosts(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch posts: ' + (err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: Post = await response.json();
      setPosts((prev) => [...prev, data]);
      setNewPost({ title: '', content: '' });
      setError(null);
    } catch (err) {
      setError('Failed to create post: ' + (err as Error).message);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Forum Posts</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={newPost.title}
            onChange={handleInputChange}
            required
            style={{ margin: '10px', padding: '5px', width: '300px' }}
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            name="content"
            value={newPost.content}
            onChange={handleInputChange}
            required
            style={{ margin: '10px', padding: '5px', width: '300px', height: '100px' }}
          />
        </div>
        <button type="submit" style={{ padding: '5px 10px', backgroundColor: "green", color: "white" }}>
          Create Post
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loading && <p>Loading posts...</p>}
      <h2>All Posts</h2>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post._id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default PostsPage;