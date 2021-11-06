import './Home.css';
import { Link } from "react-router-dom";

export default function Home(props) {
  const { posts } = props;
  
  return (
    <div className='posts'>
        {posts?.map((post, index) => {
          return (
            <div className='post' key={index}>
              <Link to={`/posts/${post.id}`} className='link'>
                <h4>@{post.user.username}</h4>
                <p>{post.location}</p>
                <div>
                  <img src={post.image_url}
                    alt='posts'
                    style={{
                      maxWidth: 200,
                      maxHeight: 200,
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
