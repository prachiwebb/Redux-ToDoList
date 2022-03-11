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
      // y filter kar raha h jo elem.id action.id k equal nii haii usko return kardo
      // or jo equal haii use filter kardo mtlbb remove kardo
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
