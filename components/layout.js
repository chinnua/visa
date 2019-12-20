import Link from "next/link";
import Nav from '../components/nav'
import '../styles/tailwind.css'

const Layout = ({ children }) => (
  <div className="bg-white antialiased">
    <Nav></Nav>
    <div className="pt-2 lg:mt-16 mt-16">{children}</div>
  </div>
);

export default Layout;
