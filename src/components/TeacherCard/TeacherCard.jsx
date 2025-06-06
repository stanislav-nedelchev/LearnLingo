import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ReadMoreBtn from '../ReadMoreBtn/ReadMoreBtn.jsx';
import LevelsList from '../LevelsList/LevelsList.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/selectors.js';
import { addFavorite, removeFavorite } from '../../redux/favorites/slice.js';
import {
  selectUserData,
  selectUserDataIsLoggedIn,
} from '../../redux/auth/authSelector.js';
import {
  addTeacherToFavorites,
  removeTeacherFromFavorites,
} from '../../redux/favorites/operations.js';
import css from './TeacherCard.module.css';

const TeacherCard = React.memo(({ teacher, selectedLevel }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);
  const favorites = useSelector(selectFavorites) || [];
  const isFavorited = favorites.includes(teacher.id);
  const activeLevel = selectedLevel?.label || 'A1 Beginner';
  const [isReadMoreExpanded, setIsReadMoreExpanded] = useState(false);

  const user = useSelector(selectUserData);
  const userId = user?.id;

  const SvgLine = () => (
    <svg width="2" height="16" className={css.svgLine}>
      <use href="/sprite.svg#line"></use>
    </svg>
  );

  const handleFavoriteTeacher = async () => {
    if (!isLoggedIn) {
      toast.error('This feature is available for authenticated users only.');
      return;
    }

    try {
      if (isFavorited) {
        await removeTeacherFromFavorites(userId, teacher.id);
        dispatch(removeFavorite(teacher.id));
        toast.success('Removed from favorites');
      } else {
        await addTeacherToFavorites(userId, teacher.id);
        dispatch(addFavorite(teacher.id));
        toast.success('Added to favorites');
      }
    } catch (error) {
      toast.error('Something went wrong');
      console.error(error);
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
        <p className={css.textLang}>Teacher</p>
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
