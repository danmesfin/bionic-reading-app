import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-white">© 2023 Bionic Reading App</p>
        <div className="flex items-center">
          <a
            href="https://github.com/danmesfin/bionic-reading-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-white text-2xl mx-2 hover:text-gray-500" />
          </a>
          <a
            href="https://twitter.com/BionicReadingApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-white text-2xl mx-2 hover:text-gray-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/danielmesfin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white text-2xl mx-2 hover:text-gray-500" />
          </a>
        </div>
      </div>
    </footer>
  );
}
