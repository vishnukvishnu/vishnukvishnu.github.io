import logo from '../assets/logo.png';
import { useState } from 'react';

const Header = ({ scrollFn }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = (section) => {
    scrollFn(section);
    setIsChecked(!isChecked);
  };
  return (
    <div className="header-wrapper">
      <nav
        role="navigation"
        className="left-nav-wrapper flex-vtkl-center display-mobile-hide"
      >
        <div>
          <img src={logo} alt="logo" />
        </div>
        <ul className="right-nav-wrapper flex-vtkl-center">
          <li className="navigation-link" onClick={() => scrollFn('home')}>
            HOME
          </li>
          <li className="navigation-link" onClick={() => scrollFn('about')}>
            ABOUT
          </li>
          <li className="navigation-link" onClick={() => scrollFn('projects')}>
            PROJECTS
          </li>
          <li className="navigation-link" onClick={() => scrollFn('service')}>
            SERVICES
          </li>
          <li className="navigation-link" onClick={() => scrollFn('contact')}>
            CONTACT
          </li>
          <li className="navigation-link width-100">
            <a
              href="https://drive.google.com/drive/folders/1srW8GPGMytJIc67muCNL2hWTQnSa3RTw"
              target="_blank"
              rel="noreferrer"
            >
              <span>Resume</span>
              <i className="fa fa-solid fa-arrow-right ms-2"></i>
            </a>
          </li>
        </ul>
      </nav>
      <nav role="navigation" className="display-hide display-mobile-block">
        <div id="menuToggle">
          <div className="left-nav-mobile-wrapper display-block">
            <img src={logo} alt="logo" />
          </div>
          <input
            type="checkbox"
            onChange={handleOnChange}
            checked={isChecked}
          />
          <span className="icon"></span>
          <span className="icon"></span>
          <span className="icon"></span>

          <ul id="menu" className="right-nav-wrapper flex-vtkl-center">
            <li
              className="navigation-link"
              onClick={() => handleOnChange('home')}
            >
              <i className="fa fa-home-alt"></i>HOME
            </li>
            <li
              className="navigation-link"
              onClick={() => handleOnChange('about')}
            >
              <i className="fa fa-user"></i>ABOUT
            </li>
            <li
              className="navigation-link"
              onClick={() => handleOnChange('projects')}
            >
              <i className="fa fa-project-diagram"></i>PROJECTS
            </li>
            <li
              className="navigation-link"
              onClick={() => handleOnChange('service')}
            >
              <i className="fa fa-code"></i>SERVICES
            </li>
            <li
              className="navigation-link"
              onClick={() => handleOnChange('contact')}
            >
              <i className="fa fa-phone-square-alt"></i>CONTACT
            </li>
            <li className="navigation-link width-100">
              <a
                href="https://drive.google.com/drive/folders/1srW8GPGMytJIc67muCNL2hWTQnSa3RTw"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn-std">Resume</button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
