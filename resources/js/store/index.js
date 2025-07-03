import { createReduxStore, register } from "@wordpress/data";
import actions from "./actions";
import selectors from "./selectors";

const DEFAULT_STATE = {
  isLoading: false,
  userInfo: {
    userName: "",
    userEmail: "",
  },
  templateStatus: {},
};

const store = createReduxStore("ba-dashboard-stores", {
  reducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
      case "SET_IS_LOADING":
        const loadingState = {
          ...state,
          isLoading: action.loadingStatus,
        };

        // Save state to localStorage whenever it changes
        localStorage.setItem(
          "ba-dashboard-stores",
          JSON.stringify(loadingState)
        );

        return loadingState;

      case "SET_USER_INFO":
        const userData = {
          ...state,
          userInfo: action.userInfo,
        };

        // Save state to localStorage whenever it changes
        localStorage.setItem("ba-dashboard-stores", JSON.stringify(userData));

        return userData;
    }

    return state;
  },

  actions,

  selectors,
});

register(store);

export default store;
