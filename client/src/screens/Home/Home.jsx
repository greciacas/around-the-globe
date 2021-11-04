import './Home.css';
import { useState, useEffect } from 'react';
import { getAllPosts } from '../../services/posts';
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await getAllPosts();
      setPosts(postList);
    };
    fetchPosts();
  }, []);
  
  return (
    <div className='posts'>
        {posts.map((post, index) => {
          return (
            <div className='post' key={index}>
              <Link to={`/posts/${post.id}`}>
                <div>{post.user_id}</div>
                <br />
                <div>{post.location}</div>
                <div>
                  <img src={post.image_url}
                    alt={posts}
                    style={{
                      maxWidth: 500,
                      maxHeight: 300,
                      borderRadius: 20
                    }}
                  />
                </div>
                <br />
                </Link>
              </div>
          );
        })}
    </div>
  );
}
