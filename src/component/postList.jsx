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
)
};
export default PostList