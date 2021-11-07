import { useState, useEffect } from 'react';
import { useParams, Redirect } from "react-router-dom";
import { getOnePost, putPost } from '../../services/posts';

export default function Edit() {
  const [post, setPost] = useState({
    location: ''
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
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const update = await putPost(id, post);
    setUpdatePost({update});
  };
  if (updatePost) {
    return <Redirect to='/posts/profile'/>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Location:</label>
      <input
        type='text'
        placeholder='text'
        onChange={handleChange}
      />
      <button>SAVE</button>
      </form>
  )
}
