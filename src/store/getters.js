const getters = {
    sidebar: state => state.app.sidebar,
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    showtoast: state => state.user.showtoast,
    title: state => state.user.title,
    showmenu: state => state.user.showmenu,
    language: state => state.user.language,
    userInfo: state => state.user.userInfo,
  };
  export default getters