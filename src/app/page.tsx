import Image from "next/image";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutMe";
import ProjectsSection from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Head from 'next/head';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <title>Shraddha Subash</title>
      <Head>
        <meta content="My Personal Portfolio" />
      </Head>
       <Navbar/>
       <div className="container mt-24 mx-auto px-12 py-4">
        <Intro/>
        <br></br>
        <br></br>
        <AboutSection/>
        <br></br>
        <ProjectsSection/>
        <br></br>
        <ContactMe/>
        <br></br>
        
       </div>
    </main>
  );
}
