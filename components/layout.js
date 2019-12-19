import Link from "next/link";
import Nav from '../components/nav'
import '../styles/tailwind.css'

const Layout = ({ children }) => (
  <div className="bg-white antialiased h-screen">
    <Nav></Nav>
    <div className="px-2 pt-2 lg:mt-16 mt-16">{children}</div>
  </div>
);

export default Layout;
