import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-violet-950 text-white py-6 mt-10">
      <div className="flex flex-col items-center gap-2">
        <div className="flex space-x-6 text-xl">
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-foreground transition" />
          </a>
          <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-foreground transition" />
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-foreground transition" />
          </a>
        </div>
        <p className="text-xs">&copy; {new Date().getFullYear()} Spiky Design</p>
      </div>
    </footer>
  )
}