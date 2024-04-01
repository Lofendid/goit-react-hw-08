import css from './App.module.css';

import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';
import { Toaster } from 'react-hot-toast';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const error = useSelector(state => state.contacts.error);
  const loading = useSelector(state => state.contacts.loading);

  return (
    <>
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
      <div className={css.container}>
        <h1 className={css.containerItem}>Phonebook</h1>

        <div className={css.containerItem}>
          <ContactForm />
        </div>

        <div className={css.containerItem}>
          <SearchBox />
        </div>

        {loading && <p>Loading...</p>}

        <div className={css.containerItem}>
          <ContactList />
        </div>

        {error && (
          <p className={css.error}>
            Unfortunately, the following error occurred: &quot;{error.message}
            &quot; . Try reloading the page!
          </p>
        )}
      </div>
    </>
  );
}

export default App;
