import { useState } from 'react';
import {
  firstFilterStyles,
  getLanguagesOptions,
  getLevelsOptions,
  getPriceOptions,
  secondFilterStyles,
} from '../../utils/filters.js';
import Select from 'react-select';
import CustomInput from '../CustomInput/CustomInput.jsx';
import css from './Filters.module.css';

const Filters = ({
  selectedLanguage,
  setSelectedLanguage,
  selectedLevel,
  setSelectedLevel,
  selectedPrice,
  setSelectedPrice,
}) => {
  const [isOpenLanguages, setIsOpenLanguages] = useState(false);
  const [isOpenLevels, setIsOpenLevels] = useState(false);
  const [isOpenPrice, setIsOpenPrice] = useState(false);

  const languagesOptions = getLanguagesOptions();
  const levelsOptions = getLevelsOptions();
  const priceOptions = getPriceOptions();

  const allOption = { value: null, label: 'All' };
  const languageOptionsWithAll = [allOption, ...languagesOptions];
  const levelOptionsWithAll = [allOption, ...levelsOptions];
  const priceOptionsWithAll = [allOption, ...priceOptions];

  const formatPriceOptionLabel = (option, { context }) =>
    context === 'value' ? `To $${option.label}` : option.label;

  return (
    <div className={css.formWrapper}>
      <div>
        <label className={css.label}>Language</label>
        <Select
          options={languageOptionsWithAll}
          value={selectedLanguage}
          onChange={value => {
            if (value?.value === null) {
              setSelectedLanguage(null);
            } else {
              setSelectedLanguage(value);
            }
          }}
          onMenuOpen={() => setIsOpenLanguages(true)}
          onMenuClose={() => setIsOpenLanguages(false)}
          placeholder="All"
          styles={firstFilterStyles(isOpenLanguages)}
          components={{ Input: CustomInput }}
        />
      </div>

      <div>
        <label className={css.label}>Level of knowledge</label>
        <Select
          options={levelOptionsWithAll}
          value={selectedLevel}
          onChange={value => {
            if (value?.value === null) {
              setSelectedLevel(null);
            } else {
              setSelectedLevel(value);
            }
          }}
          onMenuOpen={() => setIsOpenLevels(true)}
          onMenuClose={() => setIsOpenLevels(false)}
          placeholder="All"
          styles={firstFilterStyles(isOpenLevels)}
          components={{ Input: CustomInput }}
        />
      </div>

      <div>
        <label className={css.label}>Price</label>
        <Select
          options={priceOptionsWithAll}
          value={selectedPrice}
          onChange={value => {
            if (value?.value === null) {
              setSelectedPrice(null);
            } else {
              setSelectedPrice(value);
            }
          }}
          onMenuOpen={() => setIsOpenPrice(true)}
          onMenuClose={() => setIsOpenPrice(false)}
          placeholder="All"
          styles={secondFilterStyles(isOpenPrice)}
          formatOptionLabel={formatPriceOptionLabel}
          components={{ Input: CustomInput }}
        />
      </div>
    </div>
  );
};

export default Filters;
