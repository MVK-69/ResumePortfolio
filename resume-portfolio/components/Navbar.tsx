import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center flex flex-col md:flex-row gap-4 md:gap-8 p-6">
      
      {/* Left side – Logo/Name */}
      <Link href="/" className="text-xl font-bold">
        Vinay
      </Link>

      {/* Right side – Links + Icons */}
      <div className="flex items-center gap-6">
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>

        {/* Icons */}
        <a href="https://github.com/yourusername" target="_blank">
          <Github className="w-5 h-5 hover:text-gray-500" />
        </a>

        <a href="https://linkedin.com/in/yourusername" target="_blank">
          <Linkedin className="w-5 h-5 hover:text-gray-500" />
        </a>

        <a href="mailto:your@email.com">
          <Mail className="w-5 h-5 hover:text-gray-500" />
        </a>
      </div>
    </nav>
  );
}
