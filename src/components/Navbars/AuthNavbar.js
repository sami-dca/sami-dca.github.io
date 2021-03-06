/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import  i18n from "../../i18n";

// components

import PagesDropdown from "components/Dropdowns/PagesDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const changelanguage = (ln) => {
    return () =>
      i18n.changeLanguage(ln);
  };
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
              to="/"
            >
                   <img
                    alt="..."
                    src={require("assets/img/logo.png")}
                    className="pt-1 shadow-lg  mx-auto max-w-100-px"
                  />
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            {/* <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-auth-navbar"
                >
                  <i className="lg:text-gray-300 text-gray-500 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  Documentation
                </a>
              </li>
            </ul> */}
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {/* <li className="flex items-center">
                <PagesDropdown />
              </li> */}
              {/* <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  // href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F"
                  // target="_blank"
                >
                  <i className="lg:text-gray-300 text-gray-500 fab fa-facebook text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Facebook</span>
                </a>
              </li> */}

              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://discord.gg/Hcc6YTkpYV"
                  target="_blank"
                >
                  <i className="lg:text-gray-300 text-gray-500 fab fa-discord text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Discord</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://github.com/sami-dca/sami_dca"
                  target="_blank"
                >
                  <i className="lg:text-gray-300 text-gray-500 fab fa-github text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Github</span>
                </a>
              </li>

              <li className="flex items-center">
                <button
                  className="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i className="fas fa-arrow-alt-circle-down"></i> Download
                </button>
              </li>
            </ul>


          </div>

          {/* <select >
             <option value="fra">Fran??ais</option>
            <option value="eng" onClick ={changelanguage('en')}>Anglais</option>
                      //<button onClick={changelanguage('fr')}>FR</button> 
                      // <button onClick={changelanguage('en')}>EN</button>  
           </select> */}
             
          <div className="text-white text-sm font-bold leading-relaxed inline-block pl-4 mr-4 py-2 whitespace-no-wrap uppercase">
        
                      <button onClick={changelanguage('fr')}><img className = "pt-1"src={require("assets/img/fra1.png")} /></button> 
                      <button  onClick={changelanguage('en')}><img className = "pb-1 " src={require("assets/img/eng1.jpg")} /></button> 


          </div>
        </div>
      </nav>
    </>
  );
}
