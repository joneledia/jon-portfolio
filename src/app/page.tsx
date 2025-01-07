import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-gray-900 text-white">
      <header className="w-full max-w-2xl text-center">
        <h1 className="text-6xl font-extrabold font-montserrat">Jon Eledia</h1>
        <p className="mt-4 text-lg italic font-roboto">Software Developer</p>
        <nav className="mt-6">
          <ul className="flex justify-center space-x-6 font-roboto">
            <li>
              <a href="/" className="text-blue-400 hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/contact" className="text-blue-400 hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section id="about" className="my-16 text-center">
        <h2 className="text-4xl font-semibold font-montserrat">About Me</h2>
        <p className="mt-4 font-roboto">
          I am a software developer with a passion for building dynamic websites
          and automations that enhance user experiences and streamline
          processes. I am proficient in JavaScript, Node.js, and React, and I am
          always eager to learn and grow.
        </p>
      </section>
      <section id="projects" className="my-16 text-center">
        <h2 className="text-4xl font-semibold font-montserrat">Projects</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-blue-500 bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold font-montserrat">Excursbot</h3>
            <p className="mt-2 font-roboto">
              A Twitch chat bot that allows user interaction. Built with
              Node.js.
            </p>
          </div>
          <div className="border border-blue-500 bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold font-montserrat">BetterMacro</h3>
            <p className="mt-2 font-roboto">
              A tool for enhancing productivity in macro tasks.
            </p>
          </div>
        </div>
      </section>
      <section id="contact" className="my-16 text-center">
        <h2 className="text-4xl font-semibold font-montserrat">Contact</h2>
        <p className="mt-4 font-roboto">
          Reach me at{" "}
          <a
            href="mailto:elediajp@gmail.com"
            className="text-blue-400 hover:underline"
          >
            elediajp@gmail.com
          </a>
        </p>
      </section>
      <footer className="w-full max-w-2xl mt-16 text-center">
        <p className="font-roboto">
          &copy; {new Date().getFullYear()} Jon Eledia. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
