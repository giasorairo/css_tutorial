import { useEffect, useRef } from 'react';
import styles from './emoji-cursor.module.scss';

const EmojiCursor = () => {

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlerMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) {
        return;
      }

      const EMOJIS = ['๐ฏ', '๐', '๐', '๐', '๐ถ', '๐ฎ', '๐ฆ'];

      const emojiElement = document.createElement('span');

      // get mouse position
      const x = e.offsetX;
      const y = e.offsetY;

      // set emoji position
      emojiElement.style.left = x + 'px';
      emojiElement.style.top = y + 'px';

      // get emoji
      const emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
      // set emoji
      emojiElement.innerText = emoji;

      // get emoji size
      const emojiSize = Math.random() * 50;
      // set emoji size
      emojiElement.style.fontSize = 5 + emojiSize + 'px';

      // get random value for transform emoji
      const MAX = 0;
      const MIN = 200;
      const randomValue = Math.floor(
        (Math.random() * ((MAX + 1) - MIN))
        + MIN
      )
      // set emoji transform (่กจ็คบใใ็ตตๆๅญใฎ x ๅบงๆจใใใใฆในๅบงๆจใใใฉใใ ใใใใใ)
      emojiElement.style.transform = `translateX(${randomValue}px)`;

      containerRef.current.appendChild(emojiElement);

      // remove emoji
      const REMOVE_EMOJI_DERAY_TIME_MS = 1000;
      setTimeout(() => {
        emojiElement.remove();
      }, REMOVE_EMOJI_DERAY_TIME_MS);

    };

    document.addEventListener('mousemove', handlerMouseMove);

    return () => {
      document.removeEventListener('mousemove', handlerMouseMove);
    }
  }, []);

  return (
    <div className={styles['emoji_cursor']} ref={containerRef} />
  );
};

export default EmojiCursor;