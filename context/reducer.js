import { LOGIN, LOGOUT, RELOAD } from "./constants";
import jwt_decode from "jwt-decode";
import cookies from "js-cookie";

const initState = {
  isAuthenticated: false,
  userId: -1,
  username: null,
  role: -1,
  fullname: "",
};

function reducer(state, action) {
  switch (action.type) {
    case RELOAD:
      const token = cookies.get("token");
      if (token) {
        const infoReload = jwt_decode(token);
        return {
          isAuthenticated: true,
          userId: infoReload.userId,
          username: infoReload.username,
          role: infoReload.role,
          fullname: infoReload.fullname,
        };
      } else {
        return initState;
      }
    case LOGIN:
      cookies.set("token", action.payload, { sameSite: "strict", expires: 3 });
      const info = jwt_decode(action.payload);
      return {
        isAuthenticated: true,
        userId: info.userId,
        username: info.username,
        role: info.role,
        fullname: info.fullname,
      };
    case LOGOUT:
      cookies.remove("token");
      return initState;
    default:
      throw new Error("Invalid action");
  }
}

export { initState };
export default reducer;
