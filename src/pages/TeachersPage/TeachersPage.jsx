import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeachers } from '../../redux/teachers/operations.js';
import { selectTeachers } from '../../redux/teachers/selectors.js';
import TeachersList from '../../components/TeachersList/TeachersList.jsx';
import Filters from '../../components/Filters/Filters.jsx';
import css from './TeachersPage.module.css';
import { fetchFavorites } from '../../redux/favorites/operations.js';
import { selectUserData } from '../../redux/auth/authSelector.js';

const TeachersPage = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);

  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const [filteredTeachers, setFilteredTeachers] = useState([]);

  const userData = useSelector(selectUserData);

  useEffect(() => {
    dispatch(fetchTeachers());
    dispatch(fetchFavorites(userData));
  }, [dispatch, userData]);

  useEffect(() => {
    const filtered = teachers.filter(teacher => {
      const languageMatch =
        !selectedLanguage || teacher.languages.includes(selectedLanguage.value);
      const levelMatch =
        !selectedLevel || teacher.levels.includes(selectedLevel.value);
      const priceMatch =
        !selectedPrice || teacher.price_per_hour <= selectedPrice.value;

      return languageMatch && levelMatch && priceMatch;
    });

    setFilteredTeachers(filtered);
  }, [teachers, selectedLanguage, selectedLevel, selectedPrice]);

  return (
    <section className={css.section}>
      <h2 className="visually-hidden">Teachers</h2>
      <Filters
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        selectedLevel={selectedLevel}
        setSelectedLevel={setSelectedLevel}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
      />
      <TeachersList teachers={filteredTeachers} selectedLevel={selectedLevel} />
    </section>
  );
};

export default TeachersPage;
