import { comics } from "../data/database";

const getFeatured = (name) => {
  const result = comics.filter((comic) => {
    if (comic.title.includes(name)) {
      return comic;
    } else {
      return null;
    }
  });

  return result;
};

export default getFeatured;
