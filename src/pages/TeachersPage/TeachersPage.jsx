import { useEffect } from 'react';
import css from './TeachersPage.module.css';
import { fetchTeachers } from '../../redux/teachers/operations.js';
import { useDispatch } from 'react-redux';
import TeachersList from '../../components/TeachersList/TeachersList.jsx';

const TeachersPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  return (
    <section className={css.section}>
      <TeachersList />
    </section>
  );
};

export default TeachersPage;
