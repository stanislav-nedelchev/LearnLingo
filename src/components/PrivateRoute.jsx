import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUserDataIsLoggedIn } from '../redux/auth/authSelector.js';

const PrivateRoute = ({ component, redirectTo = '/teachers' }) => {
  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);

  return isLoggedIn ? component : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
