import React, { useState } from 'react';
import ReadMoreBtn from '../ReadMoreBtn/ReadMoreBtn.jsx';
import LevelsList from '../LevelsList/LevelsList.jsx';
import css from './TeacherCard.module.css';

const TeacherCard = React.memo(({ teacher, selectedLevel }) => {
  console.log(teacher);
  console.log(selectedLevel?.label);

  const activeLevel = selectedLevel?.label || 'A1 Beginner';
  const [isReadMoreExpanded, setIsReadMoreExpanded] = useState(false);

  const SvgLine = () => (
    <svg width="2" height="16" className={css.svgLine}>
      <use href="/sprite.svg#line"></use>
    </svg>
  );

  const [isFavorited, setIsFavorited] = useState([false]);

  const handleFavoriteTeacher = () => {
    // if (isFavorited) {
    //   dispatch(removeFavorite(car.id));
    // } else {
    //   dispatch(addFavorite(car.id));
    // }
    if (isFavorited) {
      setIsFavorited(false);
      console.log(false);
    } else {
      setIsFavorited(true);
      console.log(true);
    }
  };

  return (
    <div className={css.teacherCard}>
      <div className={css.fotoBox}>
        <img
          src={teacher.avatar_url}
          alt={`A photo of ${teacher.name}`}
          className={css.foto}
        />
        <svg width="12" height="12" className={css.svgOnline}>
          <use href="/sprite.svg#online"></use>
        </svg>
      </div>

      <div className={css.teacherInfo}>
        <div className={css.infoLine}>
          <svg width="16" height="16" className={css.infoLineSvg}>
            <use href="/sprite.svg#book"></use>
          </svg>
          <p>Lessons online</p>
          <SvgLine />
          <p>Lessons done: {teacher.lessons_done}</p>
          <SvgLine />
          <svg width="16" height="16" className={css.infoLineSvg}>
            <use href="/sprite.svg#star"></use>
          </svg>
          <p>Rating: {teacher.rating}</p>
          <SvgLine />
          <p>
            Price / 1 hour:{' '}
            <span className={css.infoLineSpan}>{teacher.price_per_hour}$</span>
          </p>
        </div>
        <button
          type="button"
          className={css.favoriteBtn}
          onClick={handleFavoriteTeacher}
        >
          <svg
            width="26"
            height="26"
            className={isFavorited ? css.svgFavorite : css.svgNormal}
          >
            <use href="/sprite.svg#heart"></use>
          </svg>
        </button>
        <p className={css.textLang}>Languages</p>
        <p className={css.teacherName}>
          {teacher.name} {teacher.surname}
        </p>
        <ul className={css.teacherShortInfo}>
          <li>
            <p>
              <span className={css.teacherSpan}>Speaks: </span>
              <span className={css.teacherLanguages}>
                {teacher.languages.join(', ')}
              </span>
            </p>
          </li>
          <li>
            <p>
              <span className={css.teacherSpan}>Lesson Info: </span>
              {teacher.lesson_info}
            </p>
          </li>
          <li>
            <p>
              <span className={css.teacherSpan}>Conditions: </span>
              {teacher.conditions.join(' ')}
            </p>
          </li>
        </ul>
        <ReadMoreBtn
          teacher={teacher}
          activeLevel={activeLevel}
          setIsReadMoreExpanded={setIsReadMoreExpanded}
        />
        {!isReadMoreExpanded && (
          <LevelsList teacher={teacher} activeLevel={activeLevel} />
        )}
      </div>
    </div>
  );
});

TeacherCard.displayName = 'TeacherCard';

export default TeacherCard;
