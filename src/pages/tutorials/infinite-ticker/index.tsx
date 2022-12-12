import styles from 'pages/tutorials/infinite-ticker/infinite-ticker.module.scss';
import { CSSProperties } from 'react';

type ItemCSS = {
  '--d': number,
  '--y': number,
} & CSSProperties;

const InfiniteTicker = () => {
  return (
    <div className={styles['infinite_ticker']}>
      <section>
        <div
          className={styles['scroll']}
          style={{
           '--d': 25,
           '--y': 200,
          } as ItemCSS}
        >
          <div>
            <span>Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross -</span>
          </div>
          <div>
            <span>Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross -</span>
          </div>
        </div>

        <div
          className={styles['scroll']}
          style={{
            '--d': 15,
            '--y': 500,
          } as ItemCSS}
        >
          <div>
            <span>Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross -</span>
          </div>
          <div>
            <span>Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross -</span>
          </div>
        </div>

        <div
          className={styles['scroll']}
          style={{
           '--d': -5,
           '--y': 50,
          } as ItemCSS}
        >
          <div>
            <span>Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross -</span>
          </div>
          <div>
            <span>Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross -</span>
          </div>
        </div>

        <div
          className={styles['scroll']}
          style={{
           '--d': -15,
           '--y': 350,
          } as ItemCSS}
        >
          <div>
            <span>Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross -</span>
          </div>
          <div>
            <span>Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross - Police line do not cross -</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfiniteTicker;