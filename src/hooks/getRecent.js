import { comics } from "../data/database";

const getRecent = () => {
  const start = comics.length - 5;
  const end = comics.length;

  const result = comics.slice(start, end);
  return result;
};

export default getRecent;
