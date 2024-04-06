import css from './HomePage.module.css';

export default function Home() {
  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>Greetings!</h1>
        <p className={css.text}>
          It is a simple app designed to keep your contacts in one place.
          Register/login and go to &quot;Contacts&quot; page to get started.
        </p>
      </div>
    </>
  );
}
