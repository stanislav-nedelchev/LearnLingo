import React from 'react';
import css from './TeacherCard.module.css';

const TeacherCard = React.memo(({ teacher }) => {
  console.log(teacher.name, teacher.surname);

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

      <div>
        <p>{teacher.name}</p>
        <p>{teacher.surname}</p>
        <p>{teacher.rating}</p>
        <p>{teacher.languages.join(', ')}</p>
        <ul className={css.levels}>
          {teacher.levels.map((level, index) => (
            <li key={index}>{level}</li>
          ))}
        </ul>
        <p>{teacher.price_per_hour}$</p>
      </div>
    </div>
  );
});

TeacherCard.displayName = 'TeacherCard';

export default TeacherCard;
