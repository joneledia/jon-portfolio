import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold">Jon Eledia</h1>
        <nav>
          <ul className="flex gap-4">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <section id="about" className="my-16">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="mt-4">
          I am a software developer with experience in building web applications
          using modern technologies.
        </p>
      </section>
      <section id="projects" className="my-16">
        <h2 className="text-3xl font-semibold">Projects</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add project details here */}
          <div className="border p-4 rounded">
            <h3 className="text-xl font-bold">Excursbot</h3>
            <p className="mt-2">
              A simple twitch chat bot which users can interact with. Uses
              nodejs and twitch IRC.
            </p>
          </div>
          <div className="border p-4 rounded">
            <h3 className="text-xl font-bold">BetterMacro</h3>
            <p className="mt-2">Description of project 2.</p>
          </div>
          {/* Add more projects as needed */}
        </div>
      </section>
      <section id="contact" className="my-16">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <p className="mt-4">
          You can reach me at{" "}
          <a href="mailto:elediajp@gmail.com" className="text-blue-500">
            elediajp@gmail.com
          </a>
        </p>
      </section>
      <footer className="w-full max-w-5xl mt-16">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Jon Eledia. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
