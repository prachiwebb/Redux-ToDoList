const initialState = {
  list: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Add_Todo':
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,

          {
            id: id,
            data: data,
          },
        ],
      };
    case 'Delete_Todo':
      const newList = state.list.filter((elem) => elem.id !== action.id);
      return {
        ...state,
        list: newList,
      };
    case 'Clear_Todo':
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};
export default todoReducer;
