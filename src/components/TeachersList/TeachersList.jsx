import { useSelector } from 'react-redux';
import { selectTeachers } from '../../redux/teachers/selectors.js';
import TeacherCard from '../TeacherCard/TeacherCard.jsx';
import css from './TeachersList.module.css';
import { useState } from 'react';

const TeachersList = () => {
  const teachers = useSelector(selectTeachers);
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  const visibleTeachers = teachers.slice(0, visibleCount);

  return (
    <>
      <ul className={css.list}>
        {visibleTeachers.length === 0 ? (
          <li>
            No teacher was found for your request. Try changing the filters.
          </li>
        ) : (
          visibleTeachers.map(teacher => (
            <li key={teacher.id}>
              <TeacherCard teacher={teacher} />
            </li>
          ))
        )}
      </ul>

      {visibleCount < teachers.length && (
        <button onClick={handleLoadMore} className={css.loadMoreBtn}>
          Load more
        </button>
      )}
    </>
  );
};

export default TeachersList;
