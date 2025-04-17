import css from './HeroImg.module.css';

const HeroImg = () => {
  return (
    <div className={css.HeroImg}>
      <img
        src="/images/hero-boy.png"
        alt="Hero image"
        className={css.heroBoyImg}
      />
      <div className={css.HeroIMac}>
        <svg width="47" height="57" className={css.svgApple}>
          <use href="/sprite.svg#apple"></use>
        </svg>
      </div>
    </div>
  );
};

export default HeroImg;
