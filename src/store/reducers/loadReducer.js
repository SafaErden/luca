const users = {
  users: [],
  followers: [],
  followings: [],
  loading: false,
  error: null,
};

let newUsers = [];
let newFollowers = [];
let newFollowings = [];

const loadUsersReducer = (state = users, action) => {
  const { type, payload } = action;
  if (payload && payload.profile) {
    newUsers = state.users.map(user =>
      user.id === payload.profile.id ? { ...user, following: payload.profile.following } : user
    );
    newFollowers = state.followers.map(user =>
      user.id === payload.profile.id ? { ...user, following: payload.profile.following } : user
    );
    newFollowings = state.followings.map(user =>
      user.id === payload.profile.id ? { ...user, following: payload.profile.following } : user
    );
  }
  if (payload && payload.followers) {
    newFollowers = payload.users;
  }
  if (payload && payload.followings) {
    newFollowings = payload.users;
  }

  if (payload && payload.liked === 'liked') {
    newUsers = [payload.profile, ...state.users];
  }
  if (payload && payload.liked === 'disliked') {
    newUsers = state.users.filter(user => user.id !== payload.profile.id);
  }

  switch (type) {
    case 'SUCCESS_LOAD_USERS':
      return {
        ...state,
        loading: false,
        users: payload.users,
        followers: newFollowers,
        followings: newFollowings,
      };
    case 'SUCCESS_LIKE':
      return {
        ...state,
        loading: false,
        users: newUsers,
      };
    case 'UPDATE_USERS':
      return {
        ...state,
        loading: false,
        users: newUsers,
        followers: newFollowers,
        followings: newFollowings,
      };
    case 'BEGIN_LOAD_USERS':
      return {
        ...state,
        loading: true,
      };
    case 'ERROR_LOAD_USERS':
      return {
        ...state,
        loading: false,
        users: [],
      };
    default:
      return state;
  }
};

const answers = {
  answers: [],
  loading: false,
  error: null,
};

const loadAnswersReducer = (state = answers, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'BEGIN_LOAD_ANSWERS':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESS_LOAD_ANSWERS':
      return {
        ...state,
        loading: false,
        answers: payload.answers,
      };

    case 'SUCCESS_SEND_ANSWER':
      return {
        ...state,
        answers: [payload, ...state.answers],
        loading: false,
      };
    case 'ERROR_LOAD_ANSWERS':
      return {
        ...state,
        loading: false,
        answers: [],
      };
    case 'ERROR_SEND_ANSWER':
      return {
        ...state,
        loading: false,
        answers: [],
      };
    default:
      return state;
  }
};

export { loadUsersReducer, loadAnswersReducer };
