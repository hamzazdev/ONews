import { createSelector } from "reselect";
// import { AppState } from '../root-reducer';
// import { LinkStateProps } from '../../App';

const selectUser = (state: any): any => state.user;

export const selectUserAuthorization = createSelector(
  [selectUser],
  (user) => user.authorization
);

export const selectUserCategory = createSelector(
  [selectUser],
  (user) => user.userCategory
);

export const selectUserCountry = createSelector(
  [selectUser],
  (user) => user.userCountry
);

export const selectUserUnits = createSelector(
  [selectUser],
  (user) => user.userUnits
);

export const selectUserSidebarMenu = createSelector(
  [selectUser],
  (user) => user.userSidebarMenu
);

export const selectUserWeatherMenu = createSelector(
  [selectUser],
  (user) => user.userWeatherMenu
);

export const selectUserCoords = createSelector(
  [selectUser],
  (user) => user.userCoords
);

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectUserSaved = createSelector(
  [selectUser],
  (user) => user.userSaved
);

export const selectUserLiked = createSelector(
  [selectUser],
  (user) => user.userLiked
);

export const selectUserDisliked = createSelector(
  [selectUser],
  (user) => user.userDisliked
);

export const selectUserHidden = createSelector(
  [selectUser],
  (user) => user.userHidden
);

export const selectUserSearches = createSelector(
  [selectUser],
  (user) => user.userSearches
);
