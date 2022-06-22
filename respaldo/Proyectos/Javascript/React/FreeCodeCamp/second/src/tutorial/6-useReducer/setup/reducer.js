export const reducer = (state, action) => {
  const result = {
    ...state,
    people: state.people,
    isModalOpen: true,
    modalContent: "item added",
  };

  if (action.type === "ADD_ITEM") {
    const newItems = [...state.people, action.payload];
    let test = state.people.some((el) => el.name === action.payload.name);
    if (test) {
      result.modalContent = "Try with another name!";
      return result;
    }
    result.people = newItems;
    return result;
  }
  if (action.type === "NO_VALUE") {
    result.modalContent = "Please enter value";
    return result;
  }
  if (action.type === "CLOSE_MODAL") {
    result.isModalOpen = false;
    return result;
  }

  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );

    result.modalContent = `${action.payload}: removed`;
    result.people = newPeople;
    return result;
  }

  throw new Error("no matching action type");
};
