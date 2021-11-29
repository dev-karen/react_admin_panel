import { createContext, useContext, useReducer } from "react";
import { UserTokenReducer } from "./reducer";
import { LOCAL_STORAGE_TOKEN_KEY } from "src/constants";
export const UserTokenState = createContext();
export const UserTokenStateDispatcher = createContext();

export function useUserTokenState() {
  return useContext(UserTokenState);
}
export function useUserTokenStateDispatcher() {
  return useContext(UserTokenStateDispatcher);
}

const getLocalStorageToken = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);

export const initialState = getLocalStorageToken || "";
export function UserTokenProvider({ children }) {
  const [user, dispatch] = useReducer(UserTokenReducer, initialState);
  return (
    <UserTokenState.Provider value={user}>
      <UserTokenStateDispatcher.Provider value={dispatch}>
        {children}
      </UserTokenStateDispatcher.Provider>
    </UserTokenState.Provider>
  );
}
