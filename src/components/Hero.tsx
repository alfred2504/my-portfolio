import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20">

      {/* Left Side */}
      <div className="max-w-xl">

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi 👋,<br />
          My name is <br />
          <span className="text-purple-500">
            Alfred Makura
          </span>
        </h1>

        {/* Professional Title */}
        <p className="mt-6 text-xl text-gray-700 font-medium">
          Frontend Developer
        </p>

        {/* Tagline */}
        <p className="mt-3 text-gray-500">
          I build modern, responsive, and visually stunning web experiences.
        </p>

      </div>

      {/* Right Side */}
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