import css from './RandomThemeButton.module.css';

const RandomThemeButton = () => {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const hexToRGBA = (hex, alpha = 1) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const handleClick = () => {
    const randomColor = getRandomColor();
    const lightColor = hexToRGBA(randomColor, 0.4);

    document.documentElement.style.setProperty('--theme', randomColor);
    document.documentElement.style.setProperty('--theme-light', lightColor);
  };

  return (
    <button className={css.btnPaint} type="button" onClick={handleClick}>
      <svg width="28" height="28" className={css.svgPaint}>
        <use href="/sprite.svg#paint"></use>
      </svg>
    </button>
  );
};

export default RandomThemeButton;
