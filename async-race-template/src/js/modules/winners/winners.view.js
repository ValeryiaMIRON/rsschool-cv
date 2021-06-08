import { garageSetting } from '../garage/garage.model';

export function winnerRender() {
  document.querySelector('.content').innerHTML = `<div>${garageSetting.check.toString()}</div>`;
}