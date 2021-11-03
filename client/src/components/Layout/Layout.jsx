import Nav from "../Nav/Nav";

export default function Layout(props) {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  )
}
