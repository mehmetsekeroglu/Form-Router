import Navbar from 'react-bootstrap/Navbar'
import {
  Link
} from "react-router-dom";

export default function Nav(params) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">HiCoders</Navbar.Brand>
        <Link to="/">Home</Link>|
        <Link to="/Forms">Online Registration</Link>|
        <Link to="/List">Registered Personnel</Link>
    </Navbar>
  )
}