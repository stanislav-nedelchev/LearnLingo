import HeroBtn from '../../components/HeroBtn/HeroBtn.jsx';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <section className={css.section}>
      <div className={css.heroMainInfo}>
        <div className={css.heroLeftPart}>
          <h1 className={css.heroTitle}>
            Unlock your potential with the best{' '}
            <span className={css.heroTitleSpan}>language</span> tutors
          </h1>
          <p className={css.heroText}>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <HeroBtn />
        </div>
        <div className={css.heroRightPart}>
          <img src="/heroImg.png" alt="Hero image" />
        </div>
      </div>
      <div className={css.heroInfo}>
        <svg className={css.svgRectangle}>
          <use href="/sprite.svg#rectangle"></use>
        </svg>
        <ul className={css.infoList}>
          <li className={css.infoItem}>
            <p className={css.infoItemNumber}>32,000 +</p>
            <p className={css.infoItemText}>Experienced tutors</p>
          </li>
          <li className={css.infoItem}>
            <p className={css.infoItemNumber}>300,000 +</p>
            <p className={css.infoItemText}>5-star tutor reviews</p>
          </li>
          <li className={css.infoItem}>
            <p className={css.infoItemNumber}>120 +</p>
            <p className={css.infoItemText}>Subjects taught</p>
          </li>
          <li className={css.infoItem}>
            <p className={css.infoItemNumber}>200 +</p>
            <p className={css.infoItemText}>Tutor nationalities</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HomePage;
