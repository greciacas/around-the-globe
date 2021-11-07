import './Details.css'
import { useState, useEffect } from 'react';
import { useParams} from "react-router-dom";
import { getOnePost } from '../../services/posts';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Details() {
  const [postDetail, setPostDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getOnePost(id);
      setPostDetail(post);
    };
    fetchPost();
  }, [id]);

  return (
    <div post={postDetail} className='details-div'>
      <h4>@{postDetail?.user.username}</h4>
      <p> <FaMapMarkerAlt/> {postDetail?.location}</p>
      <img src={postDetail?.image_url}
        alt='post'
        style={{
          width: 200,
          borderRadius: 20
        }}
      />
      <h4>Comments:  {postDetail?.comments.map((comment, index) => (
        <p key={index}>{comment.content}</p>
      ))}</h4>
    </div>
  )
}
