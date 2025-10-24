import Accordion from "../components/Accordion";
import { useState } from "react";
import Corousel from "../components/Corousel";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [components, setComponents] = useState();
  const componentTitle = [
    { title: "Accordion", component: <Accordion /> },
    { title: "Corousel", component: <Corousel /> },
    { title: "Search Bar", component: <SearchBar /> },
  ];
  return (
    <div className="flex flex-col justify-center mt-12">
      <h1 className="font-semibold text-center text-4xl mb-8">
        React Components
      </h1>
      <div className="flex justify-center gap-2 mb-4">
        {componentTitle &&
          componentTitle.map((item, index) => (
            <div
              key={index + 1}
              onClick={() => setComponents(index + 1)}
              className="border p-1 px-2 cursor-pointer font-semibold"
            >
              {item.title}
            </div>
          ))}
      </div>
      {components ? (
        componentTitle &&
        componentTitle.map((item, index) => (
          <div key={index + 1}>
            {components === index + 1 && (
              <div className="mt-10 w-[70%] m-auto">{item.component}</div>
            )}
          </div>
        ))
      ) : (
        <div className="mt-10 w-[70%] m-auto">
          These are various react components you can view working of them by
          clicking on it.
        </div>
      )}
    </div>
  );
};
export default Home;
