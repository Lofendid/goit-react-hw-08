import css from './SearchBox.module.css';

import { useDispatch, useSelector } from 'react-redux';

import { changeFilter, selectFilter } from '../../redux/filtersSlice.js';

export default function SearchBox() {
  const dispatch = useDispatch();

  const value = useSelector(selectFilter);

  function handleChange(e) {
    dispatch(changeFilter(e.target.value));
  }
  return (
    <div className={css.wrapper}>
      <label className={css.label} htmlFor="searchbar">
        Searchbar
      </label>
      <input
        className={css.searchbar}
        type="text"
        value={value}
        onChange={handleChange}
        id="searchbar"
      />
    </div>
  );
}
