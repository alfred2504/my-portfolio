import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi 👋,<br />
          My name is <br />
          <span className="text-purple-500">Alfred Makura</span>
        </h1>

        <p className="mt-6 text-xl text-gray-700 dark:text-gray-300 font-medium">
          Frontend Developer
        </p>

        <p className="mt-3 text-gray-500 dark:text-gray-400">
          I build modern, responsive, and visually stunning web experiences.
        </p>
      </div>

      <div className="mt-10 md:mt-0">
        <Image
          src="/images/profile.png"
          alt="Alfred Makura"
          width={320}
          height={320}
          className="rounded-full border-4 border-purple-500"
        />
      </div>
    </section>
  );
}