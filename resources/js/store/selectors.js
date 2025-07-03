const selectors = {
  getIsLoading(state) {
    const { isLoading } = state;

    return isLoading;
  },

  getUserInfo(state) {
    const { userInfo } = state;

    return userInfo;
  },
};

export default selectors;
