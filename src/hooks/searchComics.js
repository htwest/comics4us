import { comics } from "../data/database";

const searchComics = (searchterm) => {
  const result = comics.filter((comic) => {
    const search = searchterm.toLowerCase();
    const title = comic.title.toLowerCase();
    const series = comic.series.toLowerCase();

    if (title.includes(search)) {
      return comic;
    } else if (series.includes(search)) {
      return comic;
    } else {
      return null;
    }
  });

  return result;
};

export default searchComics;
