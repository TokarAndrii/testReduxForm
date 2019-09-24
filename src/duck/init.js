const LOAD_TYPE = "LOAD";

export const loadAction = initValue => ({
  type: LOAD_TYPE,
  payload: initValue
});

export const initReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case LOAD_TYPE:
      return { data: payload };
    default:
      return state;
  }
};
