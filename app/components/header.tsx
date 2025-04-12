import Image from "next/image";

export default function Header() {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <div className="fixed bottom-0 left-0 mb-4 flex h-auto w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:w-auto lg:bg-none lg:mb-0">
        <div className="flex gap-2 items-center">
        <a
          href="https://expolab.org/"
          target="_blank"
        >
          <Image
            className="rounded-xl"
            src="/expolab-icon.png"
            alt="ExpoLabs Logo"
            width={120}
            height={40}
            priority
          />
        </a>
        <a
          href="https://resilientdb.com/"
          target="_blank"
        >
          <Image
            className="rounded-xl"
            src="/resdb-logo.svg"
            alt="ResilientDB Logo"
            width={120}
            height={40}
            priority
          />
        </a>
        </div>
      </div>
    </div>
  );
}
