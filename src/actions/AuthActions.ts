import { LOGIN_SUCCESS } from "../constants/actions";

const login = () => (
  {
    type: LOGIN_SUCCESS,
    payload: "woo! token",
  }
);

export {
  login,
}