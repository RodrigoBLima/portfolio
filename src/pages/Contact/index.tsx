import React from 'react'

export default function Contact() {
  return (
    <section className="bg-secondary px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-[#3e8bef] pb-2">
          Contact Me
        </h2>
        <p>
          I am currently open for a fulltime Frontend Developer role. If you
          want to discuss about that feel free to email me or call me.
        </p>

        <p className="py-2">
          <span className="font-bold">Email:</span> vanderdigo837@outlook.com
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span> +55 11 9 6645 2608
        </p>
      </div>
    </section>
  )
}
