// Images
import Image1 from "../assets/ai_images/1.jpg";
import Image2 from "../assets/ai_images/2.jpeg";
import Image3 from "../assets/ai_images/3.jpeg";

function Hero() {
  return (
    <section className="p-5 pt-10 flex flex-col items-center justify-center gap-5">
      <h1 className="text-center text-2xl font-bold text-transparent bg-[linear-gradient(345deg,_#4158D0_0%,_#C850C0_46%,_#FFCC70_100%)] bg-clip-text min-[500px]:text-3xl sm:text-4xl sm:leading-12 md:text-5xl md:leading-16">
        Free AI Image Generator:
        <br />
        Text to Image Online
      </h1>
      <p className="max-w-screen-md w-full text-center tracking-wider text-xs leading-5 text-[#b0b3b8] min-[500px]:text-sm min-[500px]:leading-6 sm:text-base md:text-lg md:leading-8">
        Convert words to images online in seconds with Genesis' free AI image
        generator. Watch your imagination transform into incredible AI art from
        text and image prompts at your fingertips. No watermarks or ads.
      </p>
      <button className="h-12 w-60 cursor-pointer font-medium bg-violet-700 rounded-xl transition-all duration-300 hover:bg-violet-600 hover:scale-105">
        <a href="/text-to-image">Generate Image Now</a>
      </button>
      <div className="aspect-video max-w-screen-md w-full mt-2.5 grid grid-cols-7 grid-rows-4 gap-2.5">
        <img
          src={Image1}
          alt="AI Image - 1"
          className="h-full w-full row-start-1 row-end-5 col-start-1 col-end-6 object-cover"
        />
        <img
          src={Image2}
          alt="AI Image - 2"
          className="h-full w-full row-start-1 row-end-3 col-start-6 col-end-8 object-cover"
        />
        <img
          src={Image3}
          alt="AI Image - 3"
          className="h-full w-full row-start-3 row-end-5 col-start-6 col-end-8 object-cover"
        />
      </div>
    </section>
  );
}

export default Hero;
