import './Create.css';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { postPost } from '../../services/posts';
import { FaCloudUploadAlt } from 'react-icons/fa';

export default function Create() {
  const [image, setImage] = useState("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEXw8PABFicAAAD39/cACyD6+fpJUVgAABiLjpHS0tP8/PzOzs8AABXs7e0ADyIAAAacnqAtOUMAABEcKjamp6pYX2UdJTCtsLN8gIQAABvk5eYAAA3Bw8UpND4gLTkyPUZqbnOWmZyGiYx6foMXHywYHyxrcHW4u73a3N1ASFEAECD3KgboAAACYElEQVR4nO3c63KaQBiAYWAxKBVijEbRYAxJc+j9X2DBnhbcTpFhT/Z9fjIfie+M4mGBIAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwxcTuiy6ZsB138hjpM7Md10jLONSlWE9s59XS+1xbYXzjTGFyO77CpcL5KsjGFkwLhwqXq/EPemKaUGgIhUNRaA6FQ1FozjUWirTlUBdu0lHIPRYLxba8kzzVn5Dzw90YyqP0VLBXKKoob2m+BOTj2B//FNkrnNzo+z6YP6SuFMbz8dV/Nr93pTBeL8Z3LBwqTKapGFu6WjpVqOH9j0JjKByKQnMoHIpCcy4rFGnvST8LxXNZ9R31slBsojh67jnrZ+FLUX9K7/coPS3cUijNUmgMhTIKW7MUGkOhjMLWLIXGUCijsDXrcWH678HAk8LztYgfhd3NyoftQ6GoXh86XptVwe7Gr2/KvT0ofI/OFnVD5QJxtFDs7kGhWOx7LvUmWz8Lgyy53Xc0C+J5d+M++lDs7UNhkG261nGYf753t+58fR2eH0z/cixV7+tFYdf/8o5P4c9ZCo2hUEZha5ZCYyiUUdiapdAYCmUUtmY7hRM/CqtlWBwvKfz4faX67MXWNaQXnTG0+xYpf7JQaArDXLpS3dp1wBee19b7rgGnwg4vCntTFc6Vv6zqprUwb99SodyN/m960Hr25aG9xmHnthimzi+1h8KhKDSHwqHcKiwqDfcyWc0dKgwLDXdMSkKXCjVxpHBdaCuMSxcKg5mGZ+gvj7bjTkQ200W5OAwAAAAAAAAAAAAAAAAAAAAAAAAAAADganwH5zd6LobMFeIAAAAASUVORK5CYII=");
  const [loading, setLoading] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [post, setPost] = useState({
    location: '',
    image_url: ''
  })

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "post-food");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dehiekpya/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setImage(file.secure_url);
    setPost({ ...post, [`image_url`]: `${file.secure_url}`});
    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const created = await postPost(post);
    setIsCreated({ created });  
  };

  if (isCreated) return <Redirect to={`/`}/>;

  return (
    <form onSubmit={handleSubmit} >
      <div>
        {loading ? (
          <h5>Post Loading..</h5>
        ) : (
            <img src={image} alt='new-post' style={{maxWidth: 500, maxHeight: 300}}/>
        )}
      </div>
      <label>Location:</label>
      <input
        type='text'
        name='location'
        onChange={handleChange}
      />
      <br/>
      <input
        id='file'
        type='file'
        accept='image/*'
        onChange={uploadImage}
      />
      <label htmlFor="file" className="upload">
        SELECT FILE <FaCloudUploadAlt style={{verticalAlign: 'middle'}}/>
      </label>
      <br />
      <button className='create-post'>POST</button>
    </form>
  )
}
