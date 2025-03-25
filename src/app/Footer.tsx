import React from "react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="flex flex-col py-6 px-6 w-full bg-gray-900 text-white">
      <div className="flex justify-end gap-2">
        <a
          href="https://github.com/danmee10/blog-nextJS"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <Image
            src="/github-mark-white.png"
            alt="GitHub"
            width={32}
            height={32}
            className="hover:opacity-75"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-mee-58442622/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <Image
            src="/InBug-White.png"
            alt="LinkedIn"
            width={32}
            height={32}
            className="hover:opacity-75"
          />
        </a>
      </div>
    </footer>
  );
}
