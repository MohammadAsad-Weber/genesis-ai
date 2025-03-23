// List Array
const ListArray: Array<string> = [
  "Completely Free - No hidden costs, no sign-ups required.",
  "High-Quality Images - Get sharp, detailed, and professional-grade.",
  "Endless Creativity - Generate anything from realistic portraits to abstract art.",
  "Fast & Easy - No design skills needed—just describe it, and let AI handle the rest!",
];

function WhyUs() {
  return (
    <section className="p-5 flex flex-col items-center justify-center gap-5">
      <h3 className="text-center text-xl font-semibold text-transparent bg-[linear-gradient(270deg,_#3EECAC_0%,_#EE74E1_100%)] bg-clip-text sm:text-2xl lg:text-3xl">
        Why Choose Genesis AI Image Generator?
      </h3>
      <ul className="mx-5 text-sm flex flex-col gap-3.5 md:text-base">
        {ListArray.map((list, index) => {
          return (
            <li key={index} className="list-disc">
              {list}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default WhyUs;
