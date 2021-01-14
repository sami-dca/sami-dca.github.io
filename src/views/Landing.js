import React  from "react";
import {useTranslation} from 'react-i18next';
//import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";




export default function Landing() {

  function submitRequest(e) {

  e.preventDefault();


  console.log(e.target);

    emailjs.sendForm('service_1crbwab', 'sami_demo_templ', e.target, 'user_xJLFKkprVZqTCo5aIuVoS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
      e.target.reset()
  }

      

  const{ t , i18n} = useTranslation();

  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  // const submitRequest = async (e) => {
  //   e.preventDefault();
  //   console.log({ email, message });
  //   const response = await fetch("/access", { 
  //     method: 'POST', 
  //     headers: { 
  //         'Content-type': 'application/json'
  //     }, 
  //     body: JSON.stringify({email, message}) 
  // }); 
  //   const resData = await response.json(); 
  //   if (resData.status === 'success'){
  //     alert("Message Sent."); 
  //     this.resetForm()
  // }else if(resData.status === 'fail'){
  //     alert("Message failed to send.")
  // }
  // };


  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                //"url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
                //"url('https://images.unsplash.com/photo-1553905346-3b6e399115b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')",
               "url('https://media.discordapp.net/attachments/768471132285304853/798842136312414208/index1.png?width=619&height=619')" ,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Sami 
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                   {t("DescrShort")} 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            {/*<svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
               <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon> 
            </svg>*/}
          </div>
        </div>

        <section className="pb-20 bg-gray-300 -mt-24">
        {/* <section> */}
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    {/* <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div> */}
                    <h6 className="text-xl font-semibold">{t("Accessible from anywhere")}</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                    {t("L'application est actuellement disponible sur Windows, Linux et MacOS.Les réseaux peuvent être constitués de quelques personnes sur un réseau local,ou de plusieurs milliers d'ordinateurs partout dans le monde")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    {/* <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <i className="fas fa-retweet"></i>
                    </div> */}
                    <h6 className="text-xl font-semibold">{t("Secure")}</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                    {t("Les communications sont encryptées, par design, de bout-en-bout,grâce à des algorithmes d'encryption mondialement adoptés")}  
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    {/* <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <i className="fas fa-fingerprint"></i>
                    </div> */}
                    <h6 className="text-xl font-semibold">{t("Decentralized app")}</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                    {t("Inspiré de la blockchain et entièrement décentralisé,le réseau n'est détenu par personne (pas même nous !) . N'importe qui peut créer un réseau pour discuter avec ses amis, sa famille, ses collègues, ou quiconque vraiment !")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Working with us is a pleasure
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Don't let your uses guess by attaching tooltips and popoves to
                  any element. Just make sure you enable them first via
                  JavaScript.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go. Just make sure you enable them first via
                  JavaScript.
                </p>
                <Link to="/" className="font-bold text-gray-800 mt-8">
                  Check Notus React!
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blue-600">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-blue-600 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Top Notch Services
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        {/* <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-blue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">A growing company</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Carefully crafted components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Amazing page examples
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Dynamic components</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        
        <section className="pb-10 relative block bg-gray-900">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              {/* <polygon
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon> */}
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  {t("Download")}
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                  {t("Available versions")}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-window text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  {t("Windows")}
                </h6>
                {/* <p className="mt-2 mb-4 text-gray-500">
                 {t("DesktopApp")} 
                </p> */}
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-ios text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  {t("Linux")}
                </h5>
                {/* <p className="mt-2 mb-4 text-gray-500">
                  {t("Ios Version")}
                </p> */}
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-android text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  {t("Mac OS")}
                </h5>
                {/* <p className="mt-2 mb-4 text-gray-500">
                 {t("Android Version")} 
                </p> */}
              </div>
            </div>
          </div>
        </section>
        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">            
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">{t("Here are our heroes")}</h2>
                {/* <p className="text-lg leading-relaxed m-4 text-gray-600">
                  Lorem Ipsum
                </p> */}
              </div>
            </div>
            <div className="flex flex-wrap">
              {/* 1 */}
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-2-800x800.jpg")}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    {/* <h5 className="text-xl font-bold">Romina Hadid</h5> */}
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      {t("Network Designer")}
                    </p>
                    <p
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                    Hugo 
                      </p>
                    <div className="mt-6">
                
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2 */}
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-2-800x800.jpg")}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    {/* <h5 className="text-xl font-bold">Romina Hadid</h5> */}
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      {t("Marketing Manager")}
                    </p>
                    <p
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                    Hugo Ramalhosa 
                      </p>

                    <div className="mt-2">
                
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-linkedin" href = "linkedin.com/in/hugo-ramalhosa"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div> 
               {/*3  */}
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-2-800x800.jpg")}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    {/* <h5 className="text-xl font-bold">Romina Hadid</h5> */}
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      {t("Developer")}
                    </p>
                    <div className="mt-6">
                     
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div> 
              {/* 4 */}
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-1-800x800.jpg")}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    {/* <h5 className="text-xl font-bold">Ryan Tompson</h5> */}
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      {t("Web Developer")}
                      
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      {/* <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* 5 */}
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  {/* <img
                    alt="..."
                    src={require("assets/img/team-2-800x800.jpg")}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  /> */}
                  {/* <div className="pt-6 text-center">
                     <h5 className="text-xl font-bold">Romina Hadid</h5> 
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      {t("Marketing Manager")}
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div> */}
                </div>
              </div>

              {/* 6 */}
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 mt-10 ml-20">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-3-800x800.jpg")}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    {/* <h5 className="text-xl font-bold">Alexa Smith</h5> */}
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      {t("UI/UX Designer")}
                    </p>
                    <p
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                    Shakeh Tshagharyan
                      </p>
                    <div className="mt-2">
                     
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                   
                    </div>
                  </div>
                </div>
              </div>
              {/* 7 */}
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 mt-10">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://gravatar.com/avatar/86f372388dc7c62af2f3a1966e59c375?s=1024"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    {/* <h5 className="text-xl font-bold">Jenna Kardi</h5> */}
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    {t("Project Manager")}

                    </p>

                    <p
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                        Lilian BOULARD
                      </p>
                    <div className="mt-2">
                      {/* <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button> */}
  
                      {/* <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button> */}
                      <button
                        className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                      
                        <i className="fab fa-github" href="https://github.com/Phaide"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
       

        <section className=" mt-50  pt-50 pb-48">
          <div className="container  mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt 15 ">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-10 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Voulez-vous nous contacter ?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      Remplissez ce formulaire , nous vous répondrons dans un délai de 48h
                    </p>

                    <form className="contact-form" onSubmit={submitRequest}>

                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="full-name">
                        Nom & Prénom
                      </label>
                      <input name = "name"
                        type="text" className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150" placeholder="Nom & Prénom"
                      />
                    </div>
            
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="email" >
                        Email
                      </label>
                      <input type="email" className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                       placeholder="Email" name = "mail"/>
                    
                    </div>
            
                    <div>
                    <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="message" >
                        Message
                      </label>
                    <textarea
                        rows="4"
                        cols="80"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Type a message..."
                        name = "message"
                        required />
                  </div>


                  <div className="text-center mt-6">
                      <button className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                       type="submit">
                          Envoyez
                      </button>
                    </div> 


                  </form>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section> 
      </main>
      <Footer />
    </>
  );
}
