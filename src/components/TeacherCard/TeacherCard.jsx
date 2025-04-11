import css from './TeacherCard.module.css';

const TeacherCard = ({ teacher }) => {
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
      </div>
    </div>
  );
};

export default TeacherCard;
