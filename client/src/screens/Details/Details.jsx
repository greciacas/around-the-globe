import './Details.css'
import { useState, useEffect } from 'react';
import { useParams} from "react-router-dom";
import { getOnePost } from '../../services/posts';

export default function Details() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getOnePost(id);
      setPost(post);
    };
    fetchPost();
  }, [id]);

  return (
    <div post={post} className='details'>
      {post?.user_id}
      {post?.location}
      <img src={post?.image_url}
        alt='post'
        style={{
          height: 150,
          width: 150,
          borderRadius: 20
        }}
      />
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}
