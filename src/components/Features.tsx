// Interface for Feature Object in the Feature Array
interface FeatureObject {
  heading: string;
  paragraphs: Array<string>;
}
// Feature Array
const FeatureArray: Array<FeatureObject> = [
  {
    heading: "Introducing AI Text to Image Generator Online",
    paragraphs: [
      "It's simple to get the perfect images or create stunning visuals with our free AI image generator. Dream visualize it. Easily create different AI images for products, characters, and portraits at your fingertips, even if it doesn't exist",
      "Type your simple text descriptions, and our AI generator lets you create high-quality images in seconds. Powered by AI technology, our AI image creator makes it easy to bring imagination to life. The possibilities for creativity are endless!",
    ],
  },
  {
    heading: "Create Stunning AI-Generated Images Instantly",
    paragraphs: [
      "Unleash your creativity with Genesis' Free AI Image Generator—the ultimate tool to turn your words into breathtaking visuals. Whether you need concept art, product mockups, character designs, or portraits, our AI seconds.",
    ],
  },
  {
    heading: "Turn Text-to-Image with Genesis' Free AI Image Generator",
    paragraphs: [
      "Capture your thoughts and bring your ideas to life with Genesis' AI picture generator from text and images! Simply input your image keywords in the box or choose from our default text prompts to enrich your image descriptions and get the perfect result. Or you can refresh and enhance uploaded images as desired. With Genesis' AI photo generator app, creating artistic works is easier than ever before.",
    ],
  },
];

function Features() {
  return (
    <section className="py-7.5 px-5 flex flex-col items-center justify-center gap-10">
      {FeatureArray.map((feature, indexA) => {
        return (
          <div
            key={indexA}
            className="max-w-[850px] w-full text-center flex flex-col items-center justify-center gap-3.5"
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl">
              {feature.heading}
            </h3>
            {feature.paragraphs.map((paragraph, indexB) => {
              return (
                <p
                  key={indexB}
                  className="tracking-wide text-xs leading-4 text-[#b0b3b8] sm:text-sm sm:leading-6 lg:text-base lg:leading-7"
                >
                  {paragraph}
                </p>
              );
            })}
          </div>
        );
      })}
    </section>
  );
}

export default Features;
