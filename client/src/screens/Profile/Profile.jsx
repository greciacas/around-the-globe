import './Profile.css'
import { Link } from 'react-router-dom'
import { deletePost } from "../../services/posts";
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Profile(props) {
  const { posts, currentUser } = props;

  return (
    <div className='profile-div-one'>
      <h2>Your Posts</h2>
      <br />
      <div className='profile-div-two'>
        {(posts.filter((post) => {
          return post.user_id === currentUser.id
        })).map((post, index) => (
          <div key={index}>
            <h4>@{post.user.username}</h4>
            <p> <FaMapMarkerAlt/> {post.location}</p>
            <img src={post.image_url} alt='post' style={{ height: 260, width: 280 }} />
            <br />
            <Link to={`/posts/${post.id}/edit`}><button className='edit'>EDIT</button></Link>
            <button className='delete' onClick={()=>deletePost(post.id)}>DELETE</button>
          </div>
        ))}
      </div>
      <br/>
      <Link to='/posts/create' ><button className='make-post'>MAKE A POST</button></Link>
    </div>
  )
}
