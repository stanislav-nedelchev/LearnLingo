import css from './LevelsList.module.css';

const LevelsList = ({ teacher, activeLevel }) => {
  return (
    <ul className={css.levelsList}>
      {teacher.levels.map((level, index) => (
        <li
          key={index}
          className={`${css.levelsItem} ${
            level === activeLevel ? css.selectedLevel : ''
          }`}
        >
          {level}
        </li>
      ))}
    </ul>
  );
};

export default LevelsList;
