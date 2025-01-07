export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10 bg-gray-900 text-white">
      <h1 className="text-6xl font-extrabold font-montserrat mb-12">Contact</h1>
      <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-lg border border-blue-500">
        <div className="space-y-6 font-roboto">
          <div>
            <h2 className="text-2xl font-montserrat mb-4">Get in Touch</h2>
            <p className="text-gray-300">
              Feel free to reach out through any of these channels:
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-2">Email</h3>
            <a
              href="mailto:elediajp@gmail.com"
              className="text-blue-400 hover:underline"
            >
              elediajp@gmail.com
            </a>
          </div>

          <div>
            <h3 className="text-xl mb-2">Social Media</h3>
            <div className="space-y-2">
              <a href="#" className="block text-blue-400 hover:underline">
                GitHub
              </a>
              <a href="#" className="block text-blue-400 hover:underline">
                LinkedIn
              </a>
              <a href="#" className="block text-blue-400 hover:underline">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
