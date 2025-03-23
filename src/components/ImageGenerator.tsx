import GeneratorBody from "./GeneratorBody"; // Component

function ImageGenerator() {
  return (
    <section className="p-5 pt-10 flex flex-col items-center justify-center gap-5">
      <h1 className="text-center text-3xl font-bold text-transparent bg-[linear-gradient(345deg,_#4158D0_0%,_#C850C0_46%,_#FFCC70_100%)] bg-clip-text min-[500px]:text-4xl min-[500px]:leading-12 sm:leading-16 sm:text-5xl">
        AI Image Generator
      </h1>
      <p className="max-w-lg w-full -mt-1.5 text-center tracking-wider text-xs leading-5 text-[#b0b3b8] min-[500px]:text-sm min-[500px]:leading-6 sm:text-base md:text-lg md:leading-7">
        This is an AI Image Generator. It creates an image from scratch from a
        text description.
      </p>
      <GeneratorBody />
    </section>
  );
}

export default ImageGenerator;
