export default function Create() {
  return (
    <form>
      <label>Location:</label>
      <input
        type='text'
        placeholder='text'
      />
      <input
        type='file'
        accept='image/*'
      />
      <button>POST</button>
    </form>
  )
}
