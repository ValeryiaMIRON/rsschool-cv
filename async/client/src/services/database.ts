import { Car } from "../components/car/car";

class Database {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  getCars = async (): Promise<Car[]> => {
    return fetch(this.url + "/cars")
    .then(data => data.json)
    .catch(e => {
      console.log(e);
      return e;
    })
  }
}

export const database = new Database('path-to-server');