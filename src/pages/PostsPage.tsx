import React, { useState, useEffect } from 'react';

interface Post {
  _id: string;
  title: string;
  body: string;
}

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState({ title: '', body: '' });
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = 'http://localhost:5000/api';

  // Fetch posts on mount
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

  // Handle input changes for new post
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({ ...prev, [name]: value }));
  };

  // Handle input changes for editing post
  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditingPost((prev) => (prev ? { ...prev, [name]: value } : null));
  };

  // Create new post
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
      setNewPost({ title: '', body: '' });
      setError(null);
    } catch (err) {
      setError('Failed to create post: ' + (err as Error).message);
    }
  };

  // Start editing a post
  const handleEdit = (post: Post) => {
    setEditingPost(post);
  };

  // Update a post
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPost) return;
    try {
      const response = await fetch(`${API_BASE_URL}/posts/${editingPost._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: editingPost.title, body: editingPost.body }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: Post = await response.json();
      setPosts((prev) =>
        prev.map((p) => (p._id === data._id ? data : p))
      );
      setEditingPost(null);
      setError(null);
    } catch (err) {
      setError('Failed to update post: ' + (err as Error).message);
    }
  };

  // Delete a post
  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      setPosts((prev) => prev.filter((p) => p._id !== id));
      setError(null);
    } catch (err) {
      setError('Failed to delete post: ' + (err as Error).message);
    }
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingPost(null);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{textAlign: "center" , fontSize: "2rem" , fontWeight: "bold"}}>Forum Posts</h1>

      {/* Form for creating new post */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px', border: "1px solid black" }}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={newPost.title}
            onChange={handleInputChange}
            required
            style={{ margin: '10px', padding: '5px', width: '300px', border: "1px solid black" }}
          />
        </div>
        <div>
          <label>Body:</label>
          <textarea
            name="body"
            value={newPost.body}
            onChange={handleInputChange}
            required
            style={{ margin: '10px', padding: '5px', width: '300px', height: '100px', border: "1px solid black  " }}
          />
        </div>
        <button type="submit" style={{ padding: '5px 10px', backgroundColor: "lightgreen" }}>
          Create Post
        </button>
      </form>

      {/* Form for editing post */}
      {editingPost && (
        <form onSubmit={handleUpdate} style={{ marginBottom: '20px' }}>
          <h2  style={{textAlign: "center" , fontSize: " 2rem" , fontWeight: "bold"}}>Edit Post</h2>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={editingPost.title}
              onChange={handleEditInputChange}
              required
              style={{ margin: '10px', padding: '5px', width: '300px', border: "1px solid black" }}
            />
          </div>
          <div>
            <label>Body:</label>
            <textarea
              name="body"
              value={editingPost.body}
              onChange={handleEditInputChange}
              required
              style={{ margin: '10px', padding: '5px', width: '300px', height: '100px', border: "1px solid black" }}
            />
          </div>
          <button type="submit" style={{ padding: '5px 10px', marginRight: '10px', backgroundColor: "yellow" }}>
            Update Post
          </button>
          <button type="button" onClick={handleCancelEdit} style={{ padding: '5px 10px', backgroundColor: "red" }}>
            Cancel
          </button>
        </form>
      )}

      {/* Error and loading states */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loading && <p>Loading posts...</p>}

      {/* Posts list */}
      <h2 style={{textAlign: "center" , fontSize: " 2rem" , fontWeight: "bold"}}>All Posts</h2>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post._id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <button
                onClick={() => handleEdit(post)}
                style={{ padding: '5px 10px', marginRight: '10px', backgroundColor: "yellow" }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(post._id)}
                style={{ padding: '5px 10px', backgroundColor: '#ff4d4d', color: 'white' }}
              >
                Delete
              </button>
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