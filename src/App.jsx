import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/Loader/Loader.jsx';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header/Header.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { apiGetCurrentUser } from './redux/auth/authOperations.js';
import { selectUserDataIsRefreshing } from './redux/auth/authSelector.js';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const TeachersPage = lazy(() =>
  import('./pages/TeachersPage/TeachersPage.jsx'),
);
const FavoritesPage = lazy(() =>
  import('./pages/FavoritesPage/FavoritesPage.jsx'),
);

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectUserDataIsRefreshing);

  useEffect(() => {
    dispatch(apiGetCurrentUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
