import { CSSProperties } from 'react';
import styles from './creative-menu-hover-effect.module.scss';

type CSSItem = {
  '--clr': string,
} & CSSProperties;

const CreativeMenuHoverEffect = () => {
  return (
    <div className={styles['creative_menu_hover_effect']}>
      <ul>
        <li style={{ '--clr': '#81ecec' } as CSSItem}><a href="#" data-text="HOME">HOME</a></li>
        <li style={{ '--clr': '#ff7675' } as CSSItem} ><a href="#" data-text="About">About</a></li>
        <li style={{ '--clr': '#55efc4' } as CSSItem} ><a href="#" data-text="Services">Services</a></li>
        <li style={{ '--clr': '#a29bfe' } as CSSItem} ><a href="#" data-text="Work">Work</a></li>
        <li style={{ '--clr': '#fb79a8' } as CSSItem} ><a href="#"data-text="Team">Team</a></li>
        <li style={{ '--clr': '#ffeaa7' } as CSSItem} ><a href="#" data-text="Contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default CreativeMenuHoverEffect;