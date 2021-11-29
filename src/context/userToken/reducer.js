export function UserTokenReducer(currentState, action) {
  if (action.type === "LOGIN_SUCCESS") {
    return action.payload;
  } else if (action.type === "LOGOUT") {
    return "";
  }
}
