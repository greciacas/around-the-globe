import './Home.css';
  
export default function Home(props) {
  const { posts } = props;
  
  return (
    <div className='posts'>
      {posts.map((post, index) => (
        <div key={index} className='post'>
          {post.user_id}
          <br/>
          {post.location}
          <img src={post.image_url} alt={posts} style={{ height: 100, width: 100 }} />
          <br/>
        </div>
      ))}
    </div>
  );
}
