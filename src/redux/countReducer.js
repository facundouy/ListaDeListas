function countReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return state + 1;
    case "DECREMENT_COUNT":
      return state - 1;
    case "RESET_COUNT":
      return 0;
    case "UPDATE_COUNT":
      return action.payload;
    default:
      return state;
  }
}

export default countReducer;

//En el return definimos cuál va a ser el nuevo valor del state. NO HACER STATE ++ NI STATE --. LOS REDUCERS TIENEN QUE SER FUNCIONES PURAS!
//El reducer es como el set. ES LA FUNCIÓN QUE VA A MODIFICAR EL ESTADO.
