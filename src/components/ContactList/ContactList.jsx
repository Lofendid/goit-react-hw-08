import css from './ContactList.module.css';

import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

import Contact from '../Contact/Contact';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {contacts.map(contact => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </ul>
  );
}
