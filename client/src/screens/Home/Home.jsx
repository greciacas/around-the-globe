import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(()=> {
    axios.get('/')
  }, [])
  
  return (
    <div className='posts'>
      <h3>post components here</h3>
    </div>
  )
}
