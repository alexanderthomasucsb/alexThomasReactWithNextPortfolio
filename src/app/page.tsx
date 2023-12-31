import Head from "next/head"
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {
  AiFillInstagram, 
  AiFillLinkedin
  } from "react-icons/ai";
import Image from "next/image"
import mePhoto from 'public/AIPhoto.jpg'
import pyPhoto from 'public/py.png'
import githubPhoto from 'public/githubPhoto.png'
import nba2016 from 'public/PCAofPositionsNBA2016.png'


export default function Home() {

  return(
    <div>
      <Head>
        <title> Alexander Thomas Portfolio</title>
        <meta name="description" content="Genertated by create next app"/>
        <link rel="icon" href="favicon.ico" />

      </Head>

      <main className=" bg-black px-10">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <ul className=" flex-col items-center">
              <h1 className=" text-lg font-burtons">
                Portfolio Website Developed by Alex Thomas
              </h1>
              <a href="https://github.com/alexanderthomasucsb/alexThomasReactWithNextPortfolio" target="_blank" rel="noopener noreferrer" className="flex">
                <Image src={githubPhoto} alt="no image to show" width="50" height="50" />
                <p className="py-3">&lt;- Link to website code</p>
              </a>
              

            </ul>
            <ul className=" flex items-center">
              <li><a className= " bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href='https://drive.google.com/file/d/10oUdRbsYOYsHaMuqG356VpI87hgujUKa/view?usp=drive_link' target="_blank">Resume</a></li>
            </ul>
          </nav>
          <div className=" text-center p-10 shadow-blue rounded-lg">
            <h2 className="text-5xl py-2 text-cyan-500 font-medium">Alexander Thomas</h2>
            <h3 className="text-2xl py-2">Student and Aspiring Software Engineer.</h3>
            <p className=" text-md py-5 leading-8 text-white">
              3rd year computer science major at UCSB looking for professional opportunities to grow my skills
            </p>
          </div>

          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden">
            <Image src={mePhoto} alt="no image to show" layout="fill" objectFit="cover"/>
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
          <div className="flex flex-col items-center gap-16 py-3">
            <div className="text-center shadow-orange shadow-lg p-10  my-5  flex-1 max-w-xl">
              <div className = 'p-10'>
                <h3 className="text-3xl mb-10">
                  Chess Puzzle Generator
                </h3>
                  <iframe
                    width="420"
                    height="260"
                    src={'https://www.youtube.com/embed/T_VrPDMSrYM'}
                    title="YouTube video player"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
              </div>
              <div className="flex-col h-40 w-639 items-center justify-center border-white p-2">
                <div className="flex items-center justify-center">
                  <p className="px-1">Made using with Python using Tkinter with PIL</p>
                  <Image src={pyPhoto} alt="no image to show" width="50" height="50"/>
                </div>
                <div className="flex items-center justify-center">
                  <p className="px-5">Link to project: </p>
                  <a href="https://github.com/alexanderthomasucsb/chessPuzzle-alexthomas" target="_blank" rel="noopener noreferrer" className="flex">
                    <Image src={githubPhoto} alt="no image to show" width="50" height="50" />
                  </a>
                </div>
              </div>
            </div>

            <div  className='text-center shadow-orange shadow-lg p-10  my-5  flex-1 max-w-xl'>
              <div className = 'p-10'>
                <h3 className="text-3xl mb-10">
                  Visualization of Variation by Position in the NBA
                </h3>
                <p>
                  Using principal component analysis I plotted the variation of stats: such as 3 point percentage, 2 point percentage, etc. to show how different positions in the nba vary in play style
                </p>
                <Image src={nba2016} alt="no image to show" width="639" height="360" />
              </div>
              <div className="flex-col h-40 w-639 items-center justify-center border-white p-2">
                <div className="flex items-center justify-center">
                  <p className="px-1">Made with Python using matplotlib and numpy</p>
                  <Image src={pyPhoto} alt="no image to show" width="50" height="50"/>
                </div>
                <div className="flex items-center justify-center">
                  <p className="px-5">Link to project: </p>
                  <a href="https://github.com/alexanderthomasucsb/PCAanalysisNbaPositionStats/tree/main" target="_blank" rel="noopener noreferrer" className="flex">
                    <Image src={githubPhoto} alt="no image to show" width="50" height="50" />
                  </a>
                </div>
              </div>
            </div>
                
          </div>

          
               
                  
                  
        
        </section>

      </main>

    </div>
  );
}