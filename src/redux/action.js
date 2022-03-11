export const addTodo = (data) => {
  console.log(data, 'data');
  return {
    type: 'Add_Todo',
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};
export const deleteTodo = (id) => {
  return {
    type: 'Delete_Todo',
    id,
  };
};
export const clearTodo = () => {
  return {
    type: 'Clear_Todo',
  };
};
