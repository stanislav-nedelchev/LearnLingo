import { useState } from 'react';
import css from './Filters.module.css';
import Select from 'react-select';
import { firstFilterStyles, getLanguagesOptions } from '../../utils/filters.js';

const FilterNew = () => {
  const languagesOptions = getLanguagesOptions();
  const [isOpenLanguages, setIsOpenLanguages] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleSearch = async () => {
    console.log({ selectedLanguage });
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
