import React from 'react'
import AboutImg from "../../assets/about-img.webp";

export default function About() {
  return (
    <section className="bg-secondary text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-[#3e8bef] pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, My Name Is Rodrigo Barbosa Lima everyone calls me Barbosa. I am a
            Frontend Developer. I build beautiful websites with Javascript, Typescript, Jquery, Css and more.
          </p>
          <p className="pb-5">
            I am proficient in Frontend skills like React.js, Redux, Redux Tool
            Kit, Axios, Tailwind CSS, SaSS, Css3 and many more.
          </p>

          <p>In backend I know Nest.js, Node.js, Express.js, Prisma ORM</p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  )
}
