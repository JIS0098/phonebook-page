/* eslint-disable default-case */

 

const initialState = {
  contact: [],
  keyword: "",
};
const contactReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) { // 괄호 안에 변수의 값과 동일한 값을 갖는 case로 실행문 실행
    case "ADD_CONTACT":
      state.contact.push({
        name: payload.name,
        number: payload.number,
      });
      break;
    case "SEARCH_BY_USERNAME":
      state.keyword = payload.keyword;
      break;
  }

  return { ...state };
};

export default contactReducer;
