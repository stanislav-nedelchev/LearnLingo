import { useState } from 'react';
import css from './Filters.module.css';
import Select from 'react-select';
import { firstFilterStyles, getLanguagesOptions } from '../../utils/filters.js';
import { useDispatch } from 'react-redux';
import { fetchTeachersWithFilters } from '../../redux/teachers/operations.js';

const FilterNew = () => {
  const dispatch = useDispatch();
  const languagesOptions = getLanguagesOptions();
  const [isOpenLanguages, setIsOpenLanguages] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleSearch = async () => {
    dispatch(fetchTeachersWithFilters(selectedLanguage.value));
  };

  return (
    <div className={css.formWrapper}>
      <div className="w-1/4">
        <label className={css.label}>Language</label>
        <Select
          className="cursor-pointer"
          options={languagesOptions}
          value={selectedLanguage}
          onChange={setSelectedLanguage}
          onMenuOpen={() => setIsOpenLanguages(true)}
          onMenuClose={() => setIsOpenLanguages(false)}
          placeholder="All"
          styles={firstFilterStyles(isOpenLanguages)}
        />
      </div>

      <button className={css.submit} type="submit" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default FilterNew;
