import { useState, useEffect } from 'react';
import { useParams, Redirect } from "react-router-dom";
import { getOnePost, putPost } from '../../services/posts';

export default function Edit() {
  const [post, setPost] = useState({
    location: '',
  });
  const { id } = useParams();
  const [updatePost, setUpdatePost] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getOnePost(id);
      setPost(post); 
    };
    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const update = await putPost(id, post);
    setUpdatePost(update);
  };
  if (updatePost) {
    return <Redirect to='/posts/profile'/>;
  }

  return (
    <div>
      <div post={post} className='details'>
        <h4>@{post.user?.username}</h4>
        <img src={post?.image_url}
          alt='post'
          style={{
            width: 200,
            borderRadius: 20
          }}
        />
        <form onSubmit={handleSubmit}>
          <label>Location:</label>
          <input
            type='text'
            value={post.location}
            onChange={handleChange}
            post={post}
            setPost={setPost}
          />
          <button type='submit'>SAVE</button>
        </form>
      </div>
    </div>
  );
}
