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
      <h4>@{post?.user.username}</h4>
      <p>{post?.location}</p>
      <img src={post?.image_url}
        alt='post'
        style={{
          width: 200,
          borderRadius: 20
        }}
      />
      <div>Comments:  {post?.comments.map((comment, index) => (
        <p key={index}>{comment.content}</p>
      ))}</div>
    </div>
  )
}
