export const firstFilterStyles = isOpen => {
  return {
    control: provided => ({
      ...provided,
      width: '222px',
      height: '48px',
      borderRadius: '14px',
      cursor: 'pointer',
      marginTop: '8px',
      background: 'var(--white)',
      fontWeight: '500',
      fontSize: '18px',
      lineHeight: '1.11',
      color: 'var(--main)',
      padding: '0 8px',
      border: 'none',
      boxShadow: 'none',
      '&:hover': {
        border: 'none',
      },
    }),

    placeholder: provided => ({
      ...provided,
      fontWeight: '500',
      fontSize: '18px',
      lineHeight: '1.11',
      color: 'var(--main)',
    }),

    indicatorSeparator: () => ({
      display: 'none', // Убирает разделитель между селектором и стрелкой
    }),

    dropdownIndicator: provided => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '20px',
      height: '20px',
      background: `url('/images/chevron-down.svg') no-repeat center`,
      backgroundSize: 'cover',
      color: 'transparent',
      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    }),

    option: (provided, state) => ({
      ...provided,
      backgroundColor: 'transparent',
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: 1.11,
      color: state.isSelected ? 'var(--main)' : 'rgba(18, 20, 23, 0.2)',
      marginTop: '8px',
      cursor: 'pointer',
      padding: '0',
      '&:firstChild': {
        marginTop: '14',
      },
      '&:active': {
        fontWeight: '500',
        fontSize: '18px',
        lineHeight: '1.11',
        color: '#101828',
      },
    }),

    menu: provided => ({
      ...provided,
      width: '222px',
      height: '160px',
      background: 'var(--white)',
      borderRadius: '12px',
      padding: '14px 18px',
      border: '1px solid #f7f7f7',
      boxShadow: '0 4px 36px 0 rgba(0, 0, 0, 0.02)',
      margin: '4px 0 0',
    }),

    menuList: provided => ({
      ...provided,
      height: '100%',
      '::-webkit-scrollbar': {
        width: '8px',
        height: '50px',
      },
      '::-webkit-scrollbar-track': {
        background: 'transparent',
      },
      '::-webkit-scrollbar-thumb': {
        background: '#dadde1',
        borderRadius: '10px',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: '#BCC3CC',
      },
    }),
  };
};

export const secondFilterStyles = isOpen => {
  return {
    control: provided => ({
      ...provided,
      width: '124px',
      height: '48px',
      borderRadius: '14px',
      cursor: 'pointer',
      marginTop: '8px',
      background: 'var(--white)',
      fontWeight: '500',
      fontSize: '18px',
      lineHeight: '1.11',
      color: 'var(--main)',
      padding: '0 8px',
      border: 'none',
      boxShadow: 'none',
      '&:hover': {
        border: 'none',
      },
    }),

    placeholder: provided => ({
      ...provided,
      fontWeight: '500',
      fontSize: '18px',
      lineHeight: '1.11',
      color: 'var(--main)',
    }),

    indicatorSeparator: () => ({
      display: 'none', // Убирает разделитель между селектором и стрелкой
    }),

    dropdownIndicator: provided => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '20px',
      height: '20px',
      background: `url('/images/chevron-down.svg') no-repeat center`,
      backgroundSize: 'cover',
      color: 'transparent',
      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    }),

    option: (provided, state) => ({
      ...provided,
      backgroundColor: 'transparent',
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: 1.11,
      color: state.isSelected ? '#000' : 'rgba(18, 20, 23, 0.2)',
      marginTop: '8px',
      cursor: 'pointer',
      padding: '0',
      '&:firstChild': {
        marginTop: '14',
      },
      '&:active': {
        fontWeight: '500',
        fontSize: '18px',
        lineHeight: '1.11',
        color: '#101828',
      },
    }),

    menu: provided => ({
      ...provided,
      width: '124px',
      height: '160px',
      background: 'var(--white)',
      borderRadius: '12px',
      padding: '14px 18px',
      border: '1px solid #f7f7f7',
      boxShadow: '0 4px 36px 0 rgba(0, 0, 0, 0.02)',
      margin: '4px 0 0',
    }),

    menuList: provided => ({
      ...provided,
      height: '100%',
      '::-webkit-scrollbar': {
        width: '8px',
        height: '100vh',
      },
      '::-webkit-scrollbar-track': {
        background: 'transparent',
      },
      '::-webkit-scrollbar-thumb': {
        background: '#dadde1',
        borderRadius: '10px',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: '#BCC3CC',
      },
    }),
  };
};

export const getPriceOptions = () => {
  return [
    { value: '20', label: '20' },
    { value: '25', label: '25' },
    { value: '30', label: '30' },
    { value: '35', label: '35' },
    { value: '40', label: '40' },
  ];
};

export const getLanguagesOptions = () => {
  return [
    { value: 'English', label: 'English' },
    { value: 'Spanish', label: 'Spanish' },
    { value: 'French', label: 'French' },
    { value: 'German', label: 'German' },
    { value: 'Mandarin Chinese', label: 'Mandarin Chinese' },
    { value: 'Italian', label: 'Italian' },
    { value: 'Korean', label: 'Korean' },
    { value: 'Vietnamese', label: 'Vietnamese' },
  ];
};

export const getLevelsOptions = () => {
  return [
    { value: 'A1 Beginner', label: 'A1 Beginner' },
    { value: 'A2 Elementary', label: 'A2 Elementary' },
    { value: 'B1 Intermediate', label: 'B1 Intermediate' },
    { value: 'B2 Upper-Intermediate', label: 'B2 Upper-Intermediate' },
    { value: 'C1 Advanced', label: 'C1 Advanced' },
    { value: 'C2 Proficient', label: 'C2 Proficient' },
  ];
};
