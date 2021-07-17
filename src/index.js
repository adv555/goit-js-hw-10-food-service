import './sass/main.scss';
import './js/changeTheme';
import menuCards from './menu.json';
import menuCardTpl from './templates/menu-item.hbs';

// =========== создает разметку по шаблону ===========//

const menuContainer = document.querySelector('.js-menu');
const menuMarkup = createMenuMarkup(menuCards);

function createMenuMarkup(menuCards) {
  return menuCards.map(menuCardTpl).join('');
}

menuContainer.insertAdjacentHTML('afterbegin', menuMarkup);
