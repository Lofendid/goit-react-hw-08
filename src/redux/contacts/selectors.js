import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectFilter, selectContacts],
  (filter, contacts) => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
    return filteredContacts;
  }
);
