import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectTeachers,
  selectTeachersLastKey,
} from '../../redux/teachers/selectors.js';
import TeacherCard from '../TeacherCard/TeacherCard.jsx';
import css from './TeachersList.module.css';
import { fetchTeachers } from '../../redux/teachers/operations.js';

const TeachersList = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);
  const lastKey = useSelector(selectTeachersLastKey);

  // Загружаем учителей при первом рендере компонента
  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  // Обработчик для загрузки дополнительных данных (пагинация)
  const handleLoadMore = async () => {
    if (lastKey) {
      dispatch(fetchTeachers(lastKey)); // Загружаем учителей начиная с последнего ключа
    }
  };

  return (
    <>
      <ul className={css.list}>
        {teachers.length === 0 ? (
          <li>
            No teacher was found for your request. Try changing the filters.
          </li>
        ) : (
          teachers.map(teacher => (
            <li key={teacher.id}>
              <TeacherCard teacher={teacher} />
            </li>
          ))
        )}
      </ul>

      {/* Показываем кнопку "Load more" только если есть учителя */}

      <button onClick={handleLoadMore} className={css.loadMoreBtn}>
        Load more
      </button>
    </>
  );
};

export default TeachersList;
