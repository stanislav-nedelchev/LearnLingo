import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { apiGetCurrentUser } from './redux/auth/authOperations.js';
import { selectUserDataIsAuthReady } from './redux/auth/authSelector.js';
import Loader from './components/Loader/Loader.jsx';
import Header from './components/Header/Header.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const TeachersPage = lazy(() =>
  import('./pages/TeachersPage/TeachersPage.jsx'),
);
const FavoritesPage = lazy(() =>
  import('./pages/FavoritesPage/FavoritesPage.jsx'),
);

function App() {
  const dispatch = useDispatch();
  const isAuthReady = useSelector(selectUserDataIsAuthReady);

  useEffect(() => {
    dispatch(apiGetCurrentUser());
  }, [dispatch]);

  if (!isAuthReady) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route
            path="/favorites"
            element={<PrivateRoute component={<FavoritesPage />} />}
          />
        </Routes>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
