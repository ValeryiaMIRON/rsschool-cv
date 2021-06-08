import { Header } from '../../components/header/header';
import { button } from '../../components/button/button';
import './layout.scss';

export function layout() {
  document.body.insertAdjacentHTML('afterbegin', `
  <div class="for-header"></div>
  <div class="content"></div>
  `);
  
  const header = new Header('.for-header');

  header.render();
  document.body.insertAdjacentElement('beforeend', button());
}
