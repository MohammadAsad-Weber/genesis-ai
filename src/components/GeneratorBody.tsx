import { useState } from "react"; // useState Hook

// Images
import Logo from "../assets/logo.webp";
import ErrorImg from "../assets/error.png";

function GeneratorBody() {
  // useState for Prompt and Radio button
  const [prompt, setPrompt] = useState("");
  const [provider, setProvider] = useState<"amazon" | "openai/dall-e-2">("amazon");

  // useState for Image source & Loading state
  const [isLoading, setIsLoading] = useState(false);
  const [source, setSource] = useState(Logo);

  // OnChange Handler
  const handlePrompt = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(event.target.value);
  };

  // Function to generate Image
  const handleGenerate = async () => {
    try {
      // 1. Start Loading & Put the information into Request Body
      setIsLoading(true);
      const options = {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
        body: JSON.stringify({
          response_as_dict: true,
          attributes_as_list: false,
          show_base_64: true,
          show_original_response: false,
          num_images: 1,
          providers: [provider],
          text: prompt,
          resolution: "512x512",
        }),
      };

      // 2. Fetch the Data
      const response = await fetch("https://api.edenai.run/v2/image/generation", options);
      const data: any = await response.json();

      // 3. Stop Loading, clear the prompt & set the source
      setIsLoading(false);
      setPrompt("");
      setSource(data[provider].items[0].image_resource_url);

    } catch (error: unknown) {
      if (error instanceof Error) {
        // Stop loading, clear the prompt & set the source
        setIsLoading(false);
        setPrompt("");
        setSource(ErrorImg);
      }
    }
  };

  return (
    <div className="max-w-[550px] w-full p-3.5 flex flex-col items-center justify-center gap-3.5 bg-[#141026] border-2 border-gray-600 rounded-2xl">
      <textarea
        onChange={handlePrompt}
        value={prompt}
        placeholder="Enter your prompt then click generate to get your image!"
        className="max-h-40 h-fit min-h-24 w-full py-2.5 px-3.5 overflow-y-auto resize-none outline-none bg-[#2d283c] rounded-xl"
      />
      <div className="w-full p-2 flex items-center justify-between gap-2.5 bg-[#2d283c] rounded-xl">
        <div
          style={
            provider === "openai/dall-e-2"
              ? { background: "#7008e7" }
              : { background: "transparent" }
          }
          onClick={() => setProvider("openai/dall-e-2")}
          className="w-1/2 p-2.5 cursor-pointer text-center rounded-xl"
        >
          Dall-E
        </div>
        <div
          style={
            provider === "amazon"
              ? { background: "#7008e7" }
              : { background: "transparent" }
          }
          onClick={() => setProvider("amazon")}
          className="w-1/2 p-2.5 cursor-pointer text-center rounded-xl"
        >
          Amazon
        </div>
      </div>
      <button
        onClick={handleGenerate}
        disabled={prompt.length <= 0}
        className="h-12 w-full cursor-pointer text-lg font-medium bg-violet-700 rounded-3xl transition-colors duration-300 hover:bg-violet-600 disabled:bg-gray-500"
      >
        Generate
      </button>
      <div className="aspect-square max-w-lg w-full flex items-center justify-center border border-gray-500 rounded-xl overflow-hidden">
        {isLoading ? (
          <span className="loader"></span>
        ) : (
          <img
            src={source}
            alt="Generated Image"
            className="h-full w-full object-fill"
          />
        )}
      </div>
    </div>
  );
}

export default GeneratorBody;
