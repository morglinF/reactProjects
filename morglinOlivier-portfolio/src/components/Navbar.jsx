import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="m-8 flex items-center justify-center">
        <a href="http://linkedin.com/in/morglin-olivier" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />   
        </a>
        <a href="https://github.com/morglinF" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
  </nav>
  );
};

export default Navbar
