import { createSelector } from 'reselect';

export const selectContacts = state => state.contacts.contacts;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectContactsFilter = state => state.filter.filterQuery;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectContactsFilter],
  (contacts, filterQuery) => {
    return contacts.filter(
      contact =>
        filterQuery === '' ||
        contact.name.toLowerCase().includes(filterQuery.toLowerCase())
    );
  }
);
