const getters = {
    sidebar: state => state.app.sidebar,
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    showtoast: state => state.user.showtoast,
    title: state => state.user.title,
  };
  export default getters