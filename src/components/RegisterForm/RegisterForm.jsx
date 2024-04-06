import css from './RegisterForm.module.css';

import { useId } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { register } from '../../redux/auth/operations';
import { selectError } from '../../redux/auth/selectors';

export const RegisterForm = () => {
  const error = useSelector(selectError);

  const usernameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const credentials = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(register(credentials));

    form.reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label} htmlFor={usernameId}>
          Username
        </label>

        <input
          className={css.formInput}
          type="text"
          name="name"
          id={usernameId}
        />

        <label className={css.label} htmlFor={emailId}>
          Email
        </label>

        <input
          className={css.formInput}
          type="email"
          name="email"
          id={emailId}
        />

        <label className={css.label} htmlFor={passwordId}>
          Password
        </label>

        <input
          className={css.formInput}
          type="password"
          name="password"
          id={passwordId}
        />

        <button type="submit">Register</button>
      </form>
      {error && (
        <p className={css.errMsg}>
          Unfortunately, something went wrong within registration process.
          Please, try again!
        </p>
      )}
    </>
  );
};
