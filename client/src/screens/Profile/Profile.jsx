import {Link} from 'react-router-dom'

export default function Profile() {
  return (
    <div>
      your posts
      <br/>
      <Link to='/posts/create' ><button>MAKE A POST</button></Link>
    </div>
  )
}
