import { Link } from 'react-router-dom'
import { deletePost } from "../../services/posts";

export default function Profile(props) {
  const { posts, currentUser } = props;

  return (
    <div>
      <h2>your posts</h2>
      <br />
      <div>
        {(posts.filter((post) => {
          return post.user_id === currentUser.id
        })).map((post, index) => (
          <div key={index}>
            <h4>@{post.user.username}</h4>
            <p>{post.location}</p>
            <img src={post.image_url} alt='post' style={{height:'200px', width: '300px'}}/>
            <Link to={`/posts/${post.id}/edit`}><button>EDIT</button></Link>
            <button onClick={()=>deletePost(post.id)}>DELETE</button>
          </div>
        ))}
      </div>
      <br/>
      <Link to='/posts/create' ><button>MAKE A POST</button></Link>
    </div>
  )
}
