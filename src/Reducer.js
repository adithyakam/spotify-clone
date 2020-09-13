export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  // token:
  //   "BQBpOzqA-pm-WLPLsSr9XTogZLH7A5ZFy3O03jAJs4dF4djU5cdXT8nYRPVBxR-hIYKFufayRF6oIIuA95YfZOAdqzBvAyNBjufnCXWhgm6kCksFgce8EuYdjDA0qM007HcZWExPeYjKp1NfHLcoyJGpgDoFYN67L3SecHZNrt3r5k9D",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLIST": {
      return {
        ...state,
        playlist: action.playlist,
      };
    }

    case "SET_DISCOVER_WEEKLY": {
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    }

    default:
      return state;
  }
};

export default reducer;
