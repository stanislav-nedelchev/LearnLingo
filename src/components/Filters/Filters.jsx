// import { useEffect } from 'react';
import { useState } from 'react';

import css from './Filters.module.css';
import Select from 'react-select';
import {
  firstFilterStyles,
  getLanguagesOptions,
  getLevelsOptions,
  getPriceOptions,
  secondFilterStyles,
} from '../../utils/filters.js';
// import { fetchTeachersWithFilters } from '../../redux/teachers/operations.js';

const Filters = () => {
  // const dispatch = useDispatch();

  const languagesOptions = getLanguagesOptions();
  const [isOpenLanguages, setIsOpenLanguages] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const levelsOptions = getLevelsOptions();
  const [isOpenLevels, setIsOpenLevels] = useState(false);
  const [selectedLevels, setSelectedLevels] = useState(null);

  const priceOptions = getPriceOptions();
  const [isOpenPrice, setIsOpenPrice] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const formatPriceOptionLabel = (option, { context }) =>
    context === 'value' ? `To $${option.label}` : option.label;

  const handleSearch = async () => {
    // const filters = {
    //   selectedLanguage: selectedLanguage ? selectedLanguage.value : null,
    //   selectedLevels: selectedLevels ? selectedLevels.value : null,
    //   selectedPrice: selectedPrice ? selectedPrice.value : null,
    // };
    // console.log(filters);
    // dispatch(fetchTeachersWithFilters(filters));
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

      <div className="w-1/4">
        <label className={css.label}>Level of knowledge</label>
        <Select
          className="cursor-pointer"
          options={levelsOptions}
          value={selectedLevels}
          onChange={setSelectedLevels}
          onMenuOpen={() => setIsOpenLevels(true)}
          onMenuClose={() => setIsOpenLevels(false)}
          placeholder="All"
          styles={firstFilterStyles(isOpenLevels)}
        />
      </div>

      <div className="w-1/4">
        <label className={css.label}>Price</label>
        <Select
          options={priceOptions}
          value={selectedPrice}
          onChange={setSelectedPrice}
          onMenuOpen={() => setIsOpenPrice(true)}
          onMenuClose={() => setIsOpenPrice(false)}
          placeholder="All"
          className="cursor-pointer"
          styles={secondFilterStyles(isOpenPrice)}
          formatOptionLabel={formatPriceOptionLabel}
        />
      </div>

      {/* <div className={css.inputWrapper}>
        <label className={css.label} htmlFor="mileage">
          Сar mileage / km
        </label>
        <div className={css.mileageContainer}>
          <div className={css.inputBox}>
            <span
              className={`${css.placeholder} ${maxMileage ? css.filled : ''}`}
            >
              From
            </span>

            <input
              className={css.firstInput}
              type="number"
              id="mileage"
              value={minMileage}
              onChange={e => setMinMileage(e.target.value)}
            />
          </div>
          <div className={css.inputBox}>
            <span
              className={`${css.placeholder} ${maxMileage ? css.filled : ''}`}
            >
              To
            </span>

            <input
              className={css.secondInput}
              type="number"
              id="mileage"
              value={maxMileage}
              onChange={e => setMaxMileage(e.target.value)}
            />
          </div>
        </div>
      </div> */}
      <button className={css.submit} type="submit" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Filters;
