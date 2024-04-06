import css from './ContactsPage.module.css';

import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from '../../redux/contacts/operations';

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const error = useSelector(state => state.contacts.error);
  const loading = useSelector(state => state.contacts.loading);

  return (
    <>
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
