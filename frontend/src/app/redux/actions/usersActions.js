import { getUsers } from "../../services/sampleUsersService";

//Action Types
export const GET_USERS_LOADING = "GET_USERS_LOADING";
export const GET_USERS_OK = "GET_USERS_OK";
export const GET_USERS_ERROR = "GET_USERS_ERROR";

//Actions Creators
export const usersLoading = () => ({ type: GET_USERS_LOADING });
export const getUsersOk = (users) => ({ type: GET_USERS_OK, payload: users });
export const getUsersError = (err) => ({ type: GET_USERS_ERROR, payload: err });

//Dispatch with Thunks Middleware
export const getUsersAllUsers = () => {
  return async (dispatch) => {
    dispatch(usersLoading());
    try {
      const users = await getUsers();
      dispatch(getUsersOk(users));
    } catch (e) {
      console.log(e);
      const { message } = e;
      dispatch(getUsersError(message));
    }
  };
};
