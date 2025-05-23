import css from './HeroImg.module.css';

const HeroImg = () => {
  return (
    <div className={css.heroImg}>
      <img
        src="/images/hero-boy.png"
        alt="Hero image"
        className={css.heroBoyImg}
      />
      <div className={css.heroIMac}>
        <svg className={css.svgApple}>
          <use href="/sprite.svg#apple"></use>
        </svg>
      </div>
    </div>
  );
};

export default HeroImg;
