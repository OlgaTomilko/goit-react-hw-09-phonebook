import { createSelector } from "@reduxjs/toolkit";

const getContacts = (state) => state.contacts.items;

const getFilter = (state) => state.contacts.filter;

const getLoading = (state) => {
  return state.contacts.loading;
};

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);

export default {
  getContacts,
  getFilter,
  getLoading,
  getVisibleContacts,
};

// const getVisibleContacts = (state) => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter)
//   );
// };
