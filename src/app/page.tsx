import Head from "next/head"
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {
  AiFillInstagram, 
  AiFillLinkedin
  } from "react-icons/ai";
import Image from "next/image"

import cartoonPhoto from 'public/AIPhoto.jpg'
import chessPhoto from 'public/PProjectSS_7:10:23.png'


export default function Home() {

  return(
    <div>
      <Head>
        <title> Alexander Thomas Portfolio</title>
        <meta name="desctription" content="Genertated by create next app"/>
        <link rel="icon" href="favicon.ico" />

      </Head>

      <main className=" bg-black px-10">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className=" text-lg font-burtons">
              Portfolio Website Developed by Alex Thomas
            </h1>
            <ul className=" flex items-center">
              <li>
                <BsFillMoonStarsFill className=" cursor-pointer text-2xl"/>
              </li>
              <li><a className= " bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href='https://drive.google.com/file/d/1V395_TK3QNNSb1mlQ7oWf0KXeRA3qu5b/view?usp=sharing' target="_blank">Resume</a></li>
            </ul>
          </nav>
          <div className=" text-center p-10 shadow-blue rounded-lg">
            <h2 className="text-5xl py-2 text-cyan-500 font-medium">Alexander Thomas</h2>
            <h3 className="text-2xl py-2">Student and Aspiring Software Engineer.</h3>
            <p className=" text-md py-5 leading-8 text-white">
              3rd year computer science major at UCSB looking for professional oppurtunities to grow my skills
            </p>
          </div>

          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden">
            <Image src={cartoonPhoto} alt="no image to show" layout="fill" objectFit="cover"/>
          </div>

          <div className = "text-5xl flex justify-center gap-16 py-3 mt-20">
            <div className="flex flex-col items-center">
            <a href="https://www.linkedin.com/in/alxthomas2025/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>
              <p className=" text-white text-xl">
                LinkedIn
              </p>
            </div>


            
            <div className="flex flex-col items-center">
              <a href="https://www.instagram.com/alex_thomas_47/" target="_blank" rel="noopener noreferrer">
                <AiFillInstagram />
              </a>
              <p className=" text-white text-xl">
                Instagram
              </p>
            </div>
          </div>
          

        </section>
        <section>
          <div>
            <h3 className="text-3xl text-orange-600 py-3 text-center">Projects I have done</h3>
          </div>
        </section>

        <section>
          <div>
            <div className="flex flex-col items-center gap-16 py-3">
              <div className="text-center shadow-orange shadow-lg p-10  my-10  flex-1">
                 <h3 className="text-3xl mb-10">
                   Chess Puzzle Generator
                 </h3>
                
                  <Image src={chessPhoto} alt="no image to show"  objectFit="cover"/>
                  <iframe
                    width="560"
                    height="315"
                    src={'https://youtu.be/T_VrPDMSrYM'}
                    title="YouTube video player"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
               
                  
                  
                </div>
                <p>
                  Project 2
                </p>
            </div>
          </div>
        </section>

      </main>

    </div>
  );
}