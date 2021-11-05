export default function Edit() {
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
      <button>save</button>
      </form>
  )
}
