import { useDispatch, useSelector } from 'react-redux';
import {
  selectTeachers,
  selectTeachersLastKey,
  selectTeachersTotalCount,
} from '../../redux/teachers/selectors.js';
import TeacherCard from '../TeacherCard/TeacherCard.jsx';
import css from './TeachersList.module.css';
import { fetchTeachers } from '../../redux/teachers/operations.js';

const TeachersList = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);
  const lastKey = useSelector(selectTeachersLastKey);
  const totalCount = useSelector(selectTeachersTotalCount);
  console.log(totalCount);

  const handleLoadMore = async () => {
    if (lastKey) {
      dispatch(fetchTeachers(lastKey));
    }
  };

  return (
    <>
      <ul className={css.list}>
        {teachers.length > 0
          ? teachers.map(teacher => (
              <li key={teacher.id}>
                <TeacherCard teacher={teacher} />
              </li>
            ))
          : null}
      </ul>

      {teachers.length < totalCount && (
        <button onClick={handleLoadMore} className={css.loadMoreBtn}>
          Load more
        </button>
      )}
    </>
  );
};

export default TeachersList;
