import { createStore, combineReducers } from "redux";
import contactReducer from "../reducers/ContactReducer";
import { editEmail, editPhone, editName } from "../actions/EditContacts";

const configStore = () => {
  const store = createStore(
    contactReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
export default configStore;
