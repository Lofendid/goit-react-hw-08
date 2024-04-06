import { useEffect, lazy } from 'react';

import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';

import { Layout } from '../Layout/Layout';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute/RestrictedRoute';

import { useAuth } from '../../hooks';

import { refreshUser } from '../../redux/auth/operations';

const HomePage = lazy(() => import('../../pages/Home/HomePage'));
const RegisterPage = lazy(() => import('../../pages/Register/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/Login/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/Contacts/ContactsPage'));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 2000,
          style: {
            background: 'red',
            color: 'white',
          },
        }}
      />
    </>
  );
}

export default App;
