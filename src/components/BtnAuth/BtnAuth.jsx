import css from './BtnAuth.module.css';

const BtnAuth = ({ isLoggedIn }) => {
  return (
    <>
      {isLoggedIn ? (
        <div className={css.btnAuth}>
          <p className={css.btnLogIn}>
            Hello, <span className={css.userName}>User</span>
          </p>
          <button className={css.btnReg}>Log Out</button>
        </div>
      ) : (
        <div className={css.btnAuth}>
          <button className={css.btnLogIn}>
            <svg width="20" height="20" className={css.svgLogIn}>
              <use href="/sprite.svg#login"></use>
            </svg>
            Log In
          </button>
          <button className={css.btnReg}>Registration</button>
        </div>
      )}
    </>
  );
};

export default BtnAuth;
