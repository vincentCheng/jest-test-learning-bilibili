// import { getNames } from "./services";
import * as services from "./services";

const searchNames = (term) => {
  const names = services.getNames();
  if (!Array.isArray(names)) {
    return [];
  }
  // const names = [];
  const matches = names.filter((names) => {
    // return Array.includes(names, term);
    return names.includes(term);
  });

  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

const functionNotTested = (term) => {
  return `hello ${term} !`;
};

export default searchNames;
