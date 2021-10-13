import { Link as Scroll } from 'react-scroll'
import Image from 'next/image'

const Header = (props) => {
    return (
    <header>
        <div className="">
          <nav className="container flex items-center flex-col lg:flex-row">
            <div className="py-1"><Image className="object-contain h-20 w-full"  src="/images/logo.png" alt="fwywd Logo" width={160} height={80} /></div>
            <ul className="flex flex-1 justify-end items-center gap-8 section-nav">
              <li><Scroll to="about" smooth={true} duration={600} className="font-medium hover:opacity-75 hover:cursor-pointer">About</Scroll></li>
              <li><Scroll to="skills" smooth={true} duration={600} className="font-medium hover:opacity-75 hover:cursor-pointer">Skills</Scroll></li>
              <li><Scroll to="values" smooth={true} duration={600} className="font-medium hover:opacity-75 hover:cursor-pointer">Values</Scroll></li>
              <li><Scroll to="future" smooth={true} duration={600} className="font-medium hover:opacity-75 hover:cursor-pointer">Future</Scroll></li>
            </ul>
          </nav>
        </div>
    </header>
    )
};

export default Header;