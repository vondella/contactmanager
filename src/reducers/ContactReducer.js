const contact = { name: "", email: "", phone: "" };

const contactReducer = (state = contact, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return {
        ...state,
        email: action.email
      };
    case "SET_NAME":
      return {
        ...state,
        name: action.name
      };
    case "SET_PHONE":
      return {
        ...state,
        phone: action.phone
      };
    default:
      return state;
  }
};
export default contactReducer;
