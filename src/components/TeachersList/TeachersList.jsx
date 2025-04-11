import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTeacherFilters } from '../../redux/filters/selectors.js';
import { setFilters, setPrice } from '../../redux/filters/slice.js';
import { selectTeachers } from '../../redux/teachers/selectors.js';
import TeacherCard from '../TeacherCard/TeacherCard.jsx';
import css from './TeachersList.module.css';

const TeachersList = () => {
  const teachers = useSelector(selectTeachers);
  const filters = useSelector(selectTeacherFilters);
  const dispatch = useDispatch();

  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    setVisibleCount(4);
  }, [filters]);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  const handleMultiSelectChange = (filterName, e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      option => option.value,
    );

    // Если выбрано "All" (пустое значение), сбрасываем фильтр
    if (selectedOptions.includes('')) {
      dispatch(setFilters({ ...filters, [filterName]: [] }));
    } else {
      dispatch(setFilters({ ...filters, [filterName]: selectedOptions }));
    }
  };

  const handlePriceChange = e => {
    const newPrice = { max: Number(e.target.value) };
    dispatch(setPrice(newPrice));
  };

  // Уникальные значения языков и уровней
  const allLanguages = Array.from(
    new Set(teachers.flatMap(teacher => teacher.languages)),
  );

  const allLevels = Array.from(
    new Set(teachers.flatMap(teacher => teacher.levels)),
  );

  // Фильтрация
  const filteredTeachers = teachers.filter(teacher => {
    const matchesLanguages =
      filters.languages.length === 0 ||
      filters.languages.some(language => teacher.languages.includes(language));

    const matchesLevels =
      filters.levels.length === 0 ||
      filters.levels.some(level => teacher.levels.includes(level));

    const teacherPrice = Number(teacher.price_per_hour);
    const minPrice = Number(filters.price.min);
    const maxPrice = Number(filters.price.max);

    const matchesPrice = teacherPrice >= minPrice && teacherPrice <= maxPrice;

    return matchesLanguages && matchesLevels && matchesPrice;
  });

  const visibleTeachers = filteredTeachers.slice(0, visibleCount);

  return (
    <>
      <div className={css.filters}>
        {/* Языки */}
        <label>
          Languages:
          <select
            onChange={e => handleMultiSelectChange('languages', e)}
            multiple
            className={css.filterSelect}
            value={filters.languages}
          >
            <option value="">All</option>
            {allLanguages.map(lang => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </label>

        {/* Уровни */}
        <label>
          Levels:
          <select
            onChange={e => handleMultiSelectChange('levels', e)}
            multiple
            className={css.filterSelect}
            value={filters.levels}
          >
            <option value="">All</option>
            {allLevels.map(level => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </label>

        {/* Цена через select */}
        <label>
          Max price per hour:
          <select
            value={filters.price.max}
            onChange={handlePriceChange}
            className={css.filterSelect}
          >
            <option value="20">Up to $20</option>
            <option value="30">Up to $30</option>
            <option value="40">Up to $40</option>
            <option value="50">Up to $50</option>
          </select>
        </label>
      </div>

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

      {visibleCount < filteredTeachers.length && (
        <button onClick={handleLoadMore} className={css.loadMoreBtn}>
          Load more
        </button>
      )}
    </>
  );
};

export default TeachersList;
