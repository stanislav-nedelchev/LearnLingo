import css from './TeachersPage.module.css';

import TeachersList from '../../components/TeachersList/TeachersList.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTeachers } from '../../redux/teachers/operations.js';
// import Filters from '../../components/Filters/Filters.jsx';
import FilterNew from '../../components/Filters/FilterNew.jsx';

const TeachersPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  return (
    <section className={css.section}>
      {/* <Filters /> */}
      <FilterNew />
      <TeachersList />
    </section>
  );
};

export default TeachersPage;
