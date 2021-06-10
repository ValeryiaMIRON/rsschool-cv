import { Car } from "./components/car/car";

export enum Options {
  'GARAGE' = 'garage',
  'WINNERS' = 'winners'
}

export interface ICar {
  id: string;
  name: string;
  color: string;
}


interface IPageOptions {
  page: number,
  allPage: number
}

interface IGarageOptions extends IPageOptions {
  
}

interface IWinnersOptions extends IPageOptions {

}

export interface IOptions {
  garage: IGarageOptions,
  winners: IWinnersOptions
}


export interface IStore {
  cars: Car[],
  winners: Car[],
  options: IOptions
}