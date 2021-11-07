import './Edit.css'
import { useState, useEffect } from 'react';
import { useParams, Redirect } from "react-router-dom";
import { getOnePost, putPost } from '../../services/posts';

export default function Edit() {
  const [editPost, setEditPost] = useState({
    location: '',
  });
  const { id } = useParams();
  const [updatePost, setUpdatePost] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getOnePost(id);
      setEditPost(post); 
    };
    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditPost({
      ...editPost,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const update = await putPost(id, editPost);
    setUpdatePost(update);
  };
  if (updatePost) {
    return <Redirect to='/'/>;
  }

  return (
    <div className='whole-div'>
      <div post={editPost} className='details'>
        <h4>@{editPost.user?.username}</h4>
        <img src={editPost?.image_url}
          alt='post'
          style={{
            width: 200,
            borderRadius: 20
          }}
        />
        <form onSubmit={handleSubmit} className='edit-form'>
          <label>Location:</label>
          <input
            type='text'
            name='location'
            value={editPost.location}
            onChange={handleChange}
          />
          <br/>
          <button className='submit-edit' type='submit'>SAVE</button>
        </form>
      </div>
    </div>
  );
}
