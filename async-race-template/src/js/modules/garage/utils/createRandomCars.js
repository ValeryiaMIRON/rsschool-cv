export function createRandomCars(count) {
  return new Array(count).fill('1').map(( _, i ) => i);
}