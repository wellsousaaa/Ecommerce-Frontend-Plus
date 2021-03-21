import { createContext, useState } from "react";

const CarContext = createContext([]);

const CarProvider = (props) => {
  const [content, setContent] = useState([]);

  return (
    <CarContext.Provider value={[content, setContent]}>
      {props.children}
    </CarContext.Provider>
  );
};

export { CarContext, CarProvider };
