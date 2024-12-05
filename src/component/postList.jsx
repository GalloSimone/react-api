import React, { useState, useEffect } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3000/posts');
        
        
        const data = await response.json();
        setPosts(data); 
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []); 

  
  const deletePost = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/posts/${id}`, {
        method: 'DELETE', 
      });

      if (!response.ok) {
        throw new Error('Errore nel cancellare il post');
      }

      setPosts(posts.filter(post => post.id !== id)); 
    }catch(error){ 
      console.error(error);
    }
  };
return(
    <div>
      <h1>Lista dei Post</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Titolo</th>
            <th>Contenuto</th>
            <th>Categoria</th>
            <th>Azioni</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.content}</td>
              <td>{post.category}</td>
              <td>
                <button onClick={() => deletePost(post.id)}>Elimina</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
);
};
export default PostList