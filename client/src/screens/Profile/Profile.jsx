import { Link } from 'react-router-dom'

export default function Profile(props) {
  const { posts, currentUser } = props;
    
  // const actualUser = posts.filter((post) => post.user_id === true)

  console.log((posts.filter((post) => {
    return post.user_id === Number(currentUser.id)
  })))

  console.log(currentUser.id)

  return (
    <div>
      <h2>your posts</h2>
      <br />
      <div>
        {posts?.filter((post) => {
          return Number(post.user_id) === Number(currentUser.id)
        })}
      </div>
      <br/>
      <Link to='/posts/create' ><button>MAKE A POST</button></Link>
    </div>
  )
}
