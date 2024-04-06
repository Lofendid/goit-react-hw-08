import css from './LoginForm.module.css';

import { useId } from 'react';

import { useDispatch } from 'react-redux';

import { logIn } from '../../redux/auth/operations';

import toast from 'react-hot-toast';

export const LoginForm = () => {
  const emailId = useId();
  const passwordId = useId();

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const credentials = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(logIn(credentials))
      .unwrap()
      .then()
      .catch(() => {
        toast('Login error! Try again!');
      });

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label} htmlFor={emailId}>
        Email
      </label>

      <input className={css.formInput} type="email" name="email" id={emailId} />

      <label className={css.label} htmlFor={passwordId}>
        Password
      </label>

      <input
        className={css.formInput}
        type="password"
        name="password"
        id={passwordId}
      />

      <button type="submit">Log In</button>
    </form>
  );
};
