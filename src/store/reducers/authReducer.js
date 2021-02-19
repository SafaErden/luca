const user = JSON.parse(localStorage.getItem('user'));

const initState = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null };

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        loading: false,
        requireConfirmation: true,
        confirmationToken: action.payload.token,
      };
    case 'REMIND_SUCCESS':
      return {
        ...state,
        loading: false,
        reminderToken: action.payload.token,
      };
    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        requireConfirmation: false,
        user: action.payload,
      };
    case 'EDIT_SUCCESS':
      return {
        ...state,
        user: action.payload,
      };
    case 'RESEND_SUCCESS':
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        requireConfirmation: true,
        confirmationToken: action.payload.token,
      };
    case 'SIGNIN_LOCK':
      return {
        ...state,
        loading: false,
        reminderToken: null,
        confirmationToken: null,
      };
    case 'AUTH_BEGIN':
      return {
        ...state,
        loading: true,
      };
    case 'AUTH_ERROR':
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
      };
    case 'LOG_OUT':
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

const init = {
  requireConfirmation: false,
  loading: false,
};

const passwordReducer = (state = init, action) => {
  const { type } = action;
  switch (type) {
    case 'BEGIN_PASSWORD':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESS_SENT':
      return {
        ...state,
        loading: false,
        requireConfirmation: true,
      };
    case 'SUCCESS_PASSWORD':
      return {
        ...state,
        loading: false,
        requireConfirmation: false,
      };
    case 'ERROR_PASSWORD':
      return {
        ...state,
        loading: false,
        requireConfirmation: false,
      };
    default:
      return state;
  }
};

export { authReducer, passwordReducer };
