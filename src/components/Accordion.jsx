import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Accordion = () => {
  const [accordion, setAccordion] = useState();
  const accordionData = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is useState?",
      answer:
        "useState is a React Hook that lets you add state to functional components.",
    },
    {
      question: "What is useEffect?",
      answer:
        "useEffect is a Hook that runs side effects like fetching data or updating the DOM.",
    },
    {
      question: "What is JSX?",
      answer:
        "JSX is a syntax extension that lets you write HTML-like code inside JavaScript.",
    },
    {
      question: "What is a component?",
      answer:
        "A component is a reusable piece of UI in React that can have its own logic and state.",
    },
  ];

  return (
    <div>
      {accordionData &&
        accordionData.map((item, index) => (
          <div
            key={index}
            className={`border ${index == 0 ? "" : "border-t-0"}  p-2 px-3`}
          >
            <div
              className="flex justify-between items-center cursor-pointer font-semibold text-lg select-none"
              onClick={() => setAccordion(accordion === index ? null : index)}
            >
              {item.question}
              {accordion === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            <div
              className={`pt-1 overflow-hidden transition-all duration-300 ${
                accordion === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div>{item.answer}</div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Accordion;
