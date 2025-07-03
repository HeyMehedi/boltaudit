const actions = {
	setIsLoading( loadingStatus ) {
		return {
			type: 'SET_IS_LOADING',
			loadingStatus
		};
	},

	setUserInfo( userInfo ) {
		return {
			type: 'SET_USER_INFO',
			userInfo,
		};
	},
};

export default actions;
