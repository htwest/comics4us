import { comics } from "../data/database";

const getPopular = () => {
  let result = [];

  for (let i = 0; i < 5; i++) {
    let index = Math.floor(Math.random() * comics.length);
    result.push(comics[index]);
  }

  return result;
};

export default getPopular;
