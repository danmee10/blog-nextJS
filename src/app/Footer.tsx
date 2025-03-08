import React from "react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="row-start-3 flex flex-col gap-4 py-6 pe-6 w-full justify-end bg-gray-900 text-white mt-10">
      <div className="ml-auto flex gap-2">
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
