import { BrowserRouter } from 'react-router-dom';
import AppWrapper from './components/common/AppWrapper';
import Navbar from './components/base/Navbar';
import AppRoutes from './Routes';
import { useDispatch } from 'react-redux';
import { logout } from './reducers/auth';
import useIsLoggedIn from './hooks/useIsLoggedIn';
import useNavigate from './hooks/useNavigate';
export default () => {
  return (
    <AppWrapper>
      <BrowserRouter>
        <Menu />
        <AppRoutes />
      </BrowserRouter>
    </AppWrapper>
  );
};

const Menu = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useIsLoggedIn();
  const navigate = useNavigate();
  return (
    <Navbar fluid rounded>
      <Navbar.Brand onClick={() => navigate('/')}>
        <img src="/favicon.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          DashBoard
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {isLoggedIn && (
          <Navbar.Link
            active={window.location.pathname === '/logout'}
            onClick={(e) => {
              e.preventDefault();
              dispatch(logout());
              navigate('/logout');
            }}
          >
            Logout
          </Navbar.Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};
