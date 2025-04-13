import { useState, useEffect } from 'react';
import TeacherCard from '../TeacherCard/TeacherCard.jsx';
import css from './TeachersList.module.css';

const TeachersList = ({ teachers }) => {
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    setVisibleCount(4);
  }, [teachers]);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  const visibleTeachers = teachers?.slice(0, visibleCount);

  return (
    <>
      {teachers.length === 0 ? (
        <p className={css.emptyMessage}>
          No teachers found for selected filters.
        </p>
      ) : (
        <>
          <ul className={css.list}>
            {visibleTeachers.map(teacher => (
              <li key={teacher.id}>
                <TeacherCard teacher={teacher} />
              </li>
            ))}
          </ul>

          {visibleCount < teachers.length && (
            <button onClick={handleLoadMore} className={css.loadMoreBtn}>
              Load more
            </button>
          )}
        </>
      )}
    </>
  );
};

export default TeachersList;
