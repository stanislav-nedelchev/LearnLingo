import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeachers } from '../../redux/teachers/operations.js';
import { selectTeachers } from '../../redux/teachers/selectors.js';
import TeachersList from '../../components/TeachersList/TeachersList.jsx';
import Filters from '../../components/Filters/Filters.jsx';
import { fetchFavorites } from '../../redux/favorites/operations.js';
import { selectUserData } from '../../redux/auth/authSelector.js';
import { selectFavorites } from '../../redux/favorites/selectors.js';
import css from './FavoritesPage.module.css';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);
  const favorites = useSelector(selectFavorites);
  const userData = useSelector(selectUserData);

  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const [filteredTeachers, setFilteredTeachers] = useState([]);

  useEffect(() => {
    dispatch(fetchTeachers());
    dispatch(fetchFavorites(userData));
  }, [dispatch, userData]);

  useEffect(() => {
    const favoriteTeachers = teachers.filter(teacher =>
      favorites.includes(teacher.id),
    );

    const filtered = favoriteTeachers.filter(teacher => {
      const languageMatch =
        !selectedLanguage || teacher.languages.includes(selectedLanguage.value);
      const levelMatch =
        !selectedLevel || teacher.levels.includes(selectedLevel.value);
      const priceMatch =
        !selectedPrice || teacher.price_per_hour <= selectedPrice.value;

      return languageMatch && levelMatch && priceMatch;
    });

    setFilteredTeachers(filtered);
  }, [teachers, favorites, selectedLanguage, selectedLevel, selectedPrice]);

  return (
    <section className={css.section}>
      <h2 className="visually-hidden">Favorite Teachers</h2>
      {favorites.length > 0 ? (
        <>
          <Filters
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
            selectedLevel={selectedLevel}
            setSelectedLevel={setSelectedLevel}
            selectedPrice={selectedPrice}
            setSelectedPrice={setSelectedPrice}
          />
          <TeachersList
            teachers={filteredTeachers}
            selectedLevel={selectedLevel}
          />
        </>
      ) : (
        <p>You don&apos;t have any favorite teachers.</p>
      )}
    </section>
  );
};

export default FavoritesPage;
