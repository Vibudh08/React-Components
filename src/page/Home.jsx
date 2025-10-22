import Accordion from "../components/Accordion";

const Home = () => {
  return (
    <div className="flex flex-col justify-center mt-12">
      <h1 className="font-semibold text-center text-4xl mb-8">
        React Components
      </h1>
      <div className="flex justify-center gap-2">
        <div className="border p-1 px-2 cursor-pointer font-semibold">
          Accordion
        </div>
      </div>
      <div className="mt-10 w-[70%] m-auto">
        <Accordion />
      </div>
    </div>
  );
};
export default Home;
