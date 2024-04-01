import css from './Contact.module.css';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import toast from 'react-hot-toast';

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  return (
    <li>
      <div className={css.listItem}>
        <div className={css.contactInfo}>
          <p>{name}</p>
          <a className={css.number} href={`tel:${number}`}>
            <p>{number}</p>
          </a>
        </div>
        <button
          id={id}
          type="button"
          onClick={() =>
            dispatch(deleteContact(id))
              .unwrap()
              .then()
              .catch(msg => {
                toast(msg);
              })
          }
        >
          Delete
        </button>
      </div>
    </li>
  );
}
