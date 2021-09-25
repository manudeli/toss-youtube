import './styles/main.scss';
import { querySelector } from './utils/domUtil';
import { css, html } from 'lit';

window.addEventListener('scroll', () => {
  const target = querySelector('.scroll');
  const scrolled = window.pageYOffset;
  const rate = scrolled * 1;

  console.log(rate);
  target.style = css`
    transform: translate(0, ${rate * 2}px);
    opacity: ${rate > 100 ? 0 : 1};
    transition: opacity 1s;
  `;
});
