import axios from "axios";
import { Dispatch } from "react";
import Toast from "light-toast";

import {
  User,
  SET_USER_CATEGORY,
  SET_USER_COUNTRY,
  SET_USER_UNITS,
  SET_USER_COORDS,
  SET_USER_SIDEBAR_MENU,
  SET_USER_WEATHER_MENU,
  SET_CURRENT_USER,
  GET_CURRENT_USER_START,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_FAILURE,
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_OUT,
  GET_USER_SAVED_START,
  GET_USER_SAVED_SUCCESS,
  GET_USER_SAVED_FAILURE,
  POST_USER_SAVED_START,
  POST_USER_SAVED_SUCCESS,
  POST_USER_SAVED_FAILURE,
  DELETE_USER_SAVED_START,
  DELETE_USER_SAVED_SUCCESS,
  DELETE_USER_SAVED_FAILURE,
  GET_USER_LIKED_START,
  GET_USER_LIKED_SUCCESS,
  GET_USER_LIKED_FAILURE,
  POST_USER_LIKED_START,
  POST_USER_LIKED_SUCCESS,
  POST_USER_LIKED_FAILURE,
  DELETE_USER_LIKED_START,
  DELETE_USER_LIKED_SUCCESS,
  DELETE_USER_LIKED_FAILURE,
  GET_USER_DISLIKED_START,
  GET_USER_DISLIKED_SUCCESS,
  GET_USER_DISLIKED_FAILURE,
  POST_USER_DISLIKED_START,
  POST_USER_DISLIKED_SUCCESS,
  POST_USER_DISLIKED_FAILURE,
  DELETE_USER_DISLIKED_START,
  DELETE_USER_DISLIKED_SUCCESS,
  DELETE_USER_DISLIKED_FAILURE,
  GET_USER_HIDDEN_START,
  GET_USER_HIDDEN_SUCCESS,
  GET_USER_HIDDEN_FAILURE,
  POST_USER_HIDDEN_START,
  POST_USER_HIDDEN_SUCCESS,
  POST_USER_HIDDEN_FAILURE,
  DELETE_USER_HIDDEN_START,
  DELETE_USER_HIDDEN_SUCCESS,
  DELETE_USER_HIDDEN_FAILURE,
  GET_USER_SEARCHES_START,
  GET_USER_SEARCHES_SUCCESS,
  GET_USER_SEARCHES_FAILURE,
  POST_USER_SEARCHES_START,
  POST_USER_SEARCHES_SUCCESS,
  POST_USER_SEARCHES_FAILURE,
  DELETE_USER_SEARCHES_START,
  DELETE_USER_SEARCHES_SUCCESS,
  DELETE_USER_SEARCHES_FAILURE,
  UPDATE_USER_DATA_START,
  UPDATE_USER_DATA_SUCCESS,
  UPDATE_USER_DATA_FAILURE,
  UPDATE_USER_PASSWORD_START,
  UPDATE_USER_PASSWORD_SUCCESS,
  UPDATE_USER_PASSWORD_FAILURE,
  UPDATE_USER_PHOTO_START,
  UPDATE_USER_PHOTO_SUCCESS,
  UPDATE_USER_PHOTO_FAILURE,
  UserActionTYPES,
  UserNews,
  UserCoords,
  UserUpdate,
  Authorization,
} from "./user.types";
import { News } from "../news/news.types";

// Set User News
export const setUserCategory = (category: string): UserActionTYPES => ({
  type: SET_USER_CATEGORY,
  payload: category,
});

export const setUserCountry = (country: string): UserActionTYPES => ({
  type: SET_USER_COUNTRY,
  payload: country,
});

// Set User Weather
export const setUserSidebarMenu = (bool: boolean): UserActionTYPES => ({
  type: SET_USER_SIDEBAR_MENU,
  payload: bool,
});

export const setUserWeatherMenu = (bool: boolean): UserActionTYPES => ({
  type: SET_USER_WEATHER_MENU,
  payload: bool,
});

// Set User Menus
export const setUserUnits = (unit: string): UserActionTYPES => ({
  type: SET_USER_UNITS,
  payload: unit,
});

// Set User Coords
export const setUserCoords = (coords: UserCoords): UserActionTYPES => ({
  type: SET_USER_COORDS,
  payload: coords,
});

// Set Current User
export const setCurrentUser = (user: User): UserActionTYPES => ({
  type: SET_CURRENT_USER,
  payload: user,
});

// Get Current User
export const getCurrentUserStart = (): UserActionTYPES => ({
  type: GET_CURRENT_USER_START,
});

export const getCurrentUserSuccess = (currentUser: User): UserActionTYPES => ({
  type: GET_CURRENT_USER_SUCCESS,
  payload: currentUser,
});

export const getCurrentUserFailure = (errorMessage: any): UserActionTYPES => ({
  type: GET_CURRENT_USER_FAILURE,
  payload: errorMessage,
});

export const getCurrentUserStartAsync = (
  email: string,
  token: string
) => async (dispatch: Dispatch<UserActionTYPES>) => {
  try {
    dispatch(getCurrentUserStart());

    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_ONEWS_BACKEND_URL}profile`,
      data: {
        email,
      },
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res.data.id) {
      dispatch(getCurrentUserSuccess(res.data));

      // console.log(res.data.email);
      // getUserSavedStartAsync;

      // Toast.success('Welcome back!', 1000);
    }
  } catch (error) {
    dispatch(getCurrentUserFailure(error.response.data));
    // Toast.fail('Failed signing in!', 1000);

    if (error.response.data === "Unauthorized!") {
      dispatch(signOut());
    }
  }
};

// Sign In
export const signInStart = (): UserActionTYPES => ({
  type: SIGN_IN_START,
});

export const signInSuccess = (
  authorization: Authorization
): UserActionTYPES => ({
  type: SIGN_IN_SUCCESS,
  payload: authorization,
});

export const signInFailure = (errorMessage: any): UserActionTYPES => ({
  type: SIGN_IN_FAILURE,
  payload: errorMessage,
});

export const signInStartAsync = (email: string, password: string) => async (
  dispatch: Dispatch<UserActionTYPES>
) => {
  try {
    dispatch(signInStart());

    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_ONEWS_BACKEND_URL}sign-in`,
      data: {
        email,
        password,
      },
    });

    if (res.data.success) {
      dispatch(signInSuccess(res.data));

      // console.log(res.data.email);
      // getUserSavedStartAsync;

      Toast.success("Welcome back!", 1500);
    }
  } catch (error) {
    dispatch(signInFailure(error.response.data));
    Toast.fail(error.response.data, 1500);
  }
};

// Sign Up
export const signUpStart = (): UserActionTYPES => ({
  type: SIGN_UP_START,
});

export const signUpSuccess = (
  authorization: Authorization
): UserActionTYPES => ({
  type: SIGN_UP_SUCCESS,
  payload: authorization,
});

export const signUpFailure = (errorMessage: string): UserActionTYPES => ({
  type: SIGN_UP_FAILURE,
  payload: errorMessage,
});

export const signUpStartAsync = (
  name: string,
  email: string,
  password: string
) => async (dispatch: Dispatch<UserActionTYPES>) => {
  try {
    dispatch(signInStart());

    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_ONEWS_BACKEND_URL}sign-up`,
      data: {
        name,
        email,
        password,
      },
    });

    if (res.data.success) {
      dispatch(signUpSuccess(res.data));
      Toast.success(`Welcome, ${name}!`, 1500);
    }
  } catch (error) {
    dispatch(signUpFailure(error.response.data));
    Toast.fail(error.response.data, 1500);
  }
};

// Sign Out
export const signOut = (): UserActionTYPES => ({
  type: SIGN_OUT,
});

// Get Saved
export const getUserSavedStart = (): UserActionTYPES => ({
  type: GET_USER_SAVED_START,
});

export const getUserSavedSuccess = (saved: News[]): UserActionTYPES => ({
  type: GET_USER_SAVED_SUCCESS,
  payload: saved,
});

export const getUserSavedFailure = (errorMessage: string): UserActionTYPES => ({
  type: GET_USER_SAVED_FAILURE,
  payload: errorMessage,
});

export const getUserSavedStartAsync = (email: string, token: string) => async (
  dispatch: Dispatch<UserActionTYPES>
) => {
  try {
    dispatch(getUserSavedStart());

    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_ONEWS_BACKEND_URL}get-saved/`,
      data: {
        email,
      },
      headers: { Authorization: `Bearer ${token}` },
    });

    // console.log(res);

    if (res.status === 200) {
      dispatch(getUserSavedSuccess(res.data));
      // Toast.success(`Welcome back ${res.data.name}!`, 1000);
    }
  } catch (error) {
    dispatch(getUserSavedFailure(error.response.data));
    // Toast.fail(`Failed signing in!`, 1000);
  }
};

// Post Saved
export const postUserSavedStart = (): UserActionTYPES => ({
  type: POST_USER_SAVED_START,
});

export const postUserSavedSuccess = (saved: News[]): UserActionTYPES => ({
  type: POST_USER_SAVED_SUCCESS,
  payload: saved,
});

export const postUserSavedFailure = (
  errorMessage: string
): UserActionTYPES => ({
  type: POST_USER_SAVED_FAILURE,
  payload: errorMessage,
});

export const postUserSavedStartAsync = (
  {
    email,
    sourceName,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content,
  }: UserNews,
  token: string
) => async (dispatch: Dispatch<UserActionTYPES>) => {
  try {
    dispatch(postUserSavedStart());

    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_ONEWS_BACKEND_URL}post-saved/`,
      data: {
        email,
        source: sourceName,
        title,
        description,
        url,
        image: urlToImage,
        date: publishedAt,
        content,
      },
      headers: { Authorization: `Bearer ${token}` },
    });

    // console.log(res);

    if (res.status === 200) {
      dispatch(postUserSavedSuccess(res.data));
      Toast.success(`Saved for later!`, 1000);
    }
  } catch (error) {
    dispatch(postUserSavedFailure(error.response.data));
    Toast.fail(`Failed to save!`, 1000);
  }
};

// Delete Saved
export const deleteUserSavedStart = (): UserActionTYPES => ({
  type: DELETE_USER_SAVED_START,
});

export const deleteUserSavedSuccess = (saved: News[]): UserActionTYPES => ({
  type: DELETE_USER_SAVED_SUCCESS,
  payload: saved,
});

export const deleteUserSavedFailure = (
  errorMessage: string
): UserActionTYPES => ({
  type: DELETE_USER_SAVED_FAILURE,
  payload: errorMessage,
});

export const deleteUserSavedStartAsync = (
  email: string,
  title: string,
  token: string
) => async (dispatch: Dispatch<UserActionTYPES>) => {
  try {
    dispatch(deleteUserSavedStart());

    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_ONEWS_BACKEND_URL}delete-saved/`,
      data: {
        email,
        title,
      },
      headers: { Authorization: `Bearer ${token}` },
    });

    // console.log(res);

    if (res.status === 200) {
      dispatch(deleteUserSavedSuccess(res.data));
      Toast.success(`Removed from saved stories!`, 1000);
    }
  } catch (error) {
    dispatch(deleteUserSavedFailure(error.response.data));
    Toast.fail(`Failed to remove!`, 1000);
  }
};

// Get Liked
export const getUserLikedStart = (): UserActionTYPES => ({
  type: GET_USER_LIKED_START,
});

export const getUserLikedSuccess = (liked: News[]): UserActionTYPES => ({
  type: GET_USER_LIKED_SUCCESS,
  payload: liked,
});

export const getUserLikedFailure = (errorMessage: string): UserActionTYPES => ({
  type: GET_USER_LIKED_FAILURE,
  payload: errorMessage,
});

export const getUserLikedStartAsync = (email: string, token: string) => async (
  dispatch: Dispatch<UserActionTYPES>
) => {
  try {
    dispatch(getUserLikedStart());

    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_ONEWS_BACKEND_URL}get-liked/`,
      data: {
        email,
      },
      headers: { Authorization: `Bearer ${token}` },
    });

    // console.log(res);

    if (res.status === 200) {
      dispatch(getUserLikedSuccess(res.data));
      // Toast.success(`Welcome back ${res.data.name}!`, 1000);
    }
  } catch (error) {
    dispatch(getUserLikedFailure(error.response.data));
    // Toast.fail(`Failed signing in!`, 1000);
  }
};

// Post Liked
export const postUserLikedStart = (): UserActionTYPES => ({
  type: POST_USER_LIKED_START,
});

export const postUserLikedSuccess = (liked: News[]): UserActionTYPES => ({
  type: POST_USER_LIKED_SUCCESS,
  payload: liked,
});

export const postUserLikedFailure = (
  errorMessage: string
): UserActionTYPES => ({
  type: POST_USER_LIKED_FAILURE,
  payload: errorMessage,
});

export const postUserLikedStartAsync = (
  {
    email,
    sourceName,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content,
  }: UserNews,
  token: string
) => async (dispatch: Dispatch<UserActionTYPES>) => {
  try {
    dispatch(postUserLikedStart());

    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_ONEWS_BACKEND_URL}post-liked/`,
      data: {
        email,
        source: sourceName,
        title,
        description,
        url,
        image: urlToImage,
        date: publishedAt,
        content,
      },
      headers: { Authorization: `Bearer ${token}` },
    });

    // console.log(res);

    if (res.status === 200) {
      dispatch(postUserLikedSuccess(res.data));
      Toast.success("Story liked!", 1000);
    }
  } catch (error) {
    dispatch(postUserLikedFailure(error.response.data));

    Toast.fail(`Failed to like!`, 1000);
  }
};

// Delete Liked
export const deleteUserLikedStart = (): UserActionTYPES => ({
  type: DELETE_USER_LIKED_START,
});

export const deleteUserLikedSuccess = (liked: News[]): UserActionTYPES => ({
  type: DELETE_USER_LIKED_SUCCESS,
  payload: liked,
});

export const deleteUserLikedFailure = (
  errorMessage: string
): UserActionTYPES => ({
  type: DELETE_USER_LIKED_FAILURE,
  payload: errorMessage,
});

export const deleteUserLikedStartAsync = (
  email: string,
  title: string,
  token: string,
  bool: boolean = true
) => async (dispatch: Dispatch<UserActionTYPES>) => {
  try {
    dispatch(deleteUserLikedStart());

    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_ONEWS_BACKEND_URL}delete-liked/`,
      data: {
        email,
        title,
      },
      headers: { Authorization: `Bearer ${token}` },
    });

    // console.log(res);

    if (res.status === 200) {
      dispatch(deleteUserLikedSuccess(res.data));
      if (bool) {
        Toast.success("No longer liked!", 1000);
      }
    }
  } catch (error) {
    dispatch(deleteUserLikedFailure(error.response.data));
    if (bool) {
      Toast.fail(`Failed to like!`, 1000);
    }
  }
};

// Get Disliked
export const getUserDislikedStart = (): UserActionTYPES => ({
  type: GET_USER_DISLIKED_START,
});

export const getUserDislikedSuccess = (disliked: News[]): UserActionTYPES => ({
  type: GET_USER_DISLIKED_SUCCESS,
  payload: disliked,
});

export const getUserDislikedFailure = (
  errorMessage: string
): UserActionTYPES => ({
  type: GET_USER_DISLIKED_FAILURE,
  payload: errorMessage,
});

export const getUserDislikedStartAsync = (
  email: string,
  token: string
) => async (dispatch: Dispatch<UserActionTYPES>) => {
  try {
    dispatch(getUserDislikedStart());

    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_ONEWS_BACKEND_URL}get-disliked/`,
      data: {
        email,
      },
      headers: { Authorization: `Bearer ${token}` },
    });

    // console.log(res);

    if (res.status === 200) {
      dispatch(getUserDislikedSuccess(res.data));
      // Toast.success(`Welcome back ${res.data.name}!`, 1000);
    }
  } catch (error) {
    dispatch(getUserDislikedFailure(error.response.data));
    // Toast.fail(`Failed signing in!`, 1000);
  }
};

// Post Disliked
export const postUserDislikedStart = (): UserActionTYPES => ({
  type: POST_USER_DISLIKED_START,
});

export const postUserDislikedSuccess = (disliked: News[]): UserActionTYPES => ({
  type: POST_USER_DISLIKED_SUCCESS,
  payload: disliked,
});

export const postUserDislikedFailure = (
  errorMessage: string
): UserActionTYPES => ({
  type: POST_USER_DISLIKED_FAILURE,
  payload: errorMessage,
});

export const postUserDislikedStartAsync = (
  {
    email,
    sourceName,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content,
  }: UserNews,
  token: string
) => async (dispatch: Dispatch<UserActionTYPES>) => {
  try {
    dispatch(postUserDislikedStart());

    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_ONEWS_BACKEND_URL}post-disliked/`,
      data: {
        email,
        source: sourceName,
        title,
        description,
        url,
        image: urlToImage,
        date: publishedAt,
        content,
      },
      headers: { Authorization: `Bearer ${token}` },
    });

    // console.log(res);

    if (res.status === 200) {
      dispatch(postUserDislikedSuccess(res.data));
      Toast.success("Story disliked!", 1000);
    }
  } catch (error) {
    dispatch(postUserDislikedFailure(error.response.data));

    Toast.fail("Failed to dislike!", 1000);
  }
};

// Delete Disliked
export const deleteUserDislikedStart = (): UserActionTYPES => ({
  type: DELETE_USER_DISLIKED_START,
});

export const deleteUserDislikedSuccess = (
  disliked: News[]
): UserActionTYPES => ({
  type: DELETE_USER_DISLIKED_SUCCESS,
  payload: disliked,
});

export const deleteUserDislikedFailure = (
  errorMessage: string
): UserActionTYPES => ({
  type: DELETE_USER_DISLIKED_FAILURE,
  payload: errorMessage,
});

export const deleteUserDislikedStartAsync = (
  email: string,
  title: string,
  token: string,
  bool: boolean = true
) => async (dispatch: Dispatch<UserActionTYPES>) => {
  try {
    dispatch(deleteUserDislikedStart());

    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_ONEWS_BACKEND_URL}delete-disliked/`,
      data: {
        email,
        title,
      },
      headers: { Authorization: `Bearer ${token}` },
    });

    // console.log(res);

    if (res.status === 200) {
      dispatch(deleteUserDislikedSuccess(res.data));
      if (bool) {
        Toast.success("No longer disliked!", 1000);
      }
    }
  } catch (error) {
    dispatch(deleteUserDislikedFailure(error.response.data));
    if (bool) {
      Toast.fail(`Failed to dislike!`, 1000);
    }
  }
};

// Get Hidden
export const getUserHiddenStart = (): UserActionTYPES => ({
  type: GET_USER_HIDDEN_START,
});

export const getUserHiddenSuccess = (hidden: [string]): UserActionTYPES => ({
  type: GET_USER_HIDDEN_SUCCESS,
  payload: hidden,
});

export const getUserHiddenFailure = (
  errorMessage: string
): UserActionTYPES => ({
  type: GET_USER_HIDDEN_FAILURE,
  payload: errorMessage,
});

export const getUserHiddenStartAsync = (email: string, token: string) => async (
  dispatch: Dispatch<UserActionTYPES>
) => {
  try {
    dispatch(getUserHiddenStart());

    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_ONEWS_BACKEND_URL}get-hidden/`,
      data: {
        email,
      },
      headers: { Authorization: `Bearer ${token}` },
    });

    // console.log(res);

    if (res.status === 200) {
      dispatch(getUserHiddenSuccess(res.data));
      // Toast.success(`Welcome back ${res.data.name}!`, 1000);
    }
  } catch (error) {
    dispatch(getUserHiddenFailure(error.response.data));
    // Toast.fail(`Failed signing in!`, 1000);
  }
};

// Post Hidden
export const postUserHiddenStart = (): UserActionTYPES => ({
  type: POST_USER_HIDDEN_START,
});

export const postUserHiddenSuccess = (hidden: [string]): UserActionTYPES => ({
  type: POST_USER_HIDDEN_SUCCESS,
  payload: hidden,
});

export const postUserHiddenFailure = (
  errorMessage: string
): UserActionTYPES => ({
  type: POST_USER_HIDDEN_FAILURE,
  payload: errorMessage,
});

export const postUserHiddenStartAsync = (
  email: string,
  sourceName: string,
  token: string
) => async (dispatch: Dispatch<UserActionTYPES>) => {
  try {
    dispatch(postUserHiddenStart());

    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_ONEWS_BACKEND_URL}post-hidden/`,
      data: {
        email,
        source: sourceName,
      },
      headers: { Authorization: `Bearer ${token}` },
    });

    // console.log(res);

    if (res.status === 200) {
      dispatch(postUserHiddenSuccess(res.data));
      Toast.success(`${sourceName} blacklisted!`, 1000);
    }
  } catch (error) {
    dispatch(postUserHiddenFailure(error.response.data));
    Toast.fail(`Failed to blacklist!`, 1000);
  }
};

// Delete Hidden
export const deleteUserHiddenStart = (): UserActionTYPES => ({
  type: DELETE_USER_HIDDEN_START,
});

export const deleteUserHiddenSuccess = (hidden: [string]): UserActionTYPES => ({
  type: DELETE_USER_HIDDEN_SUCCESS,
  payload: hidden,
});

export const deleteUserHiddenFailure = (
  errorMessage: string
): UserActionTYPES => ({
  type: DELETE_USER_HIDDEN_FAILURE,
  payload: errorMessage,
});

export const deleteUserHiddenStartAsync = (
  email: string,
  sourceName: string,
  token: string
) => async (dispatch: Dispatch<UserActionTYPES>) => {
  try {
    dispatch(deleteUserHiddenStart());

    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_ONEWS_BACKEND_URL}delete-hidden/`,
      data: {
        email,
        source: sourceName,
      },
      headers: { Authorization: `Bearer ${token}` },
    });

    // console.log(res);

    if (res.status === 200) {
      dispatch(deleteUserHiddenSuccess(res.data));
      Toast.success(`${sourceName} whitelisted!`, 1000);
    }
  } catch (error) {
    dispatch(deleteUserHiddenFailure(error.response.data));
    Toast.fail(`Failed to whitelist!`, 1000);
  }
};

// Get Searches
export const getUserSearchesStart = (): UserActionTYPES => ({
  type: GET_USER_SEARCHES_START,
});

export const getUserSearchesSuccess = (
  searches: [string]
): UserActionTYPES => ({
  type: GET_USER_SEARCHES_SUCCESS,
  payload: searches,
});

export const getUserSearchesFailure = (
  errorMessage: string
): UserActionTYPES => ({
  type: GET_USER_SEARCHES_FAILURE,
  payload: errorMessage,
});

export const getUserSearchesStartAsync = (
  email: string,
  token: string
) => async (dispatch: Dispatch<UserActionTYPES>) => {
  try {
    dispatch(getUserSearchesStart());

    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_ONEWS_BACKEND_URL}get-searches/`,
      data: {
        email,
      },
      headers: { Authorization: `Bearer ${token}` },
    });

    // console.log(res);

    if (res.status === 200) {
      dispatch(getUserSearchesSuccess(res.data));
      // Toast.success(`Welcome back ${res.data.name}!`, 1000);
    }
  } catch (error) {
    dispatch(getUserSearchesFailure(error.response.data));
    // Toast.fail(`Failed signing in!`, 1000);
  }
};

// Post Searches
export const postUserSearchesStart = (): UserActionTYPES => ({
  type: POST_USER_SEARCHES_START,
});

export const postUserSearchesSuccess = (
  searches: [string]
): UserActionTYPES => ({
  type: POST_USER_SEARCHES_SUCCESS,
  payload: searches,
});

export const postUserSearchesFailure = (
  errorMessage: string
): UserActionTYPES => ({
  type: POST_USER_SEARCHES_FAILURE,
  payload: errorMessage,
});

export const postUserSearchesStartAsync = (
  email: string,
  query: string,
  token: string
) => async (dispatch: Dispatch<UserActionTYPES>) => {
  try {
    dispatch(postUserSearchesStart());

    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_ONEWS_BACKEND_URL}post-searches/`,
      data: {
        email,
        query,
      },
      headers: { Authorization: `Bearer ${token}` },
    });

    // console.log(res);

    if (res.status === 200) {
      dispatch(postUserSearchesSuccess(res.data));
      // Toast.success(`Welcome back ${res.data.name}!`, 1000);
    }
  } catch (error) {
    dispatch(postUserSearchesFailure(error.response.data));
    // Toast.fail(`Failed signing in!`, 1000);
  }
};

// Delete Searches
export const deleteUserSearchesStart = (): UserActionTYPES => ({
  type: DELETE_USER_SEARCHES_START,
});

export const deleteUserSearchesSuccess = (
  searches: [string]
): UserActionTYPES => ({
  type: DELETE_USER_SEARCHES_SUCCESS,
  payload: searches,
});

export const deleteUserSearchesFailure = (
  errorMessage: string
): UserActionTYPES => ({
  type: DELETE_USER_SEARCHES_FAILURE,
  payload: errorMessage,
});

export const deleteUserSearchesStartAsync = (
  email: string,
  query: string,
  token: string
) => async (dispatch: Dispatch<UserActionTYPES>) => {
  try {
    dispatch(deleteUserSearchesStart());

    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_ONEWS_BACKEND_URL}delete-searches/`,
      data: {
        email,
        query,
      },
      headers: { Authorization: `Bearer ${token}` },
    });

    // console.log(res);

    if (res.status === 200) {
      dispatch(deleteUserSearchesSuccess(res.data));
      Toast.success("Removed from history!", 1000);
    }
  } catch (error) {
    dispatch(deleteUserSearchesFailure(error.response.data));
    Toast.fail(`Failed to remove!`, 1000);
  }
};

// Update User Data
export const updateUserDataStart = (): UserActionTYPES => ({
  type: UPDATE_USER_DATA_START,
});

export const updateUserDataSuccess = (currentUser: User): UserActionTYPES => ({
  type: UPDATE_USER_DATA_SUCCESS,
  payload: currentUser,
});

export const updateUserDataFailure = (
  errorMessage: string
): UserActionTYPES => ({
  type: UPDATE_USER_DATA_FAILURE,
  payload: errorMessage,
});

export const updateUserDataStartAsync = (
  user: UserUpdate,
  token: string
) => async (dispatch: Dispatch<UserActionTYPES>) => {
  try {
    dispatch(updateUserDataStart());

    const res = await axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_ONEWS_BACKEND_URL}profile`,
      data: {
        ...user,
      },
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res.data.id) {
      dispatch(updateUserDataSuccess(res.data));

      // console.log(res.data.email);
      // getUserSavedStartAsync;

      Toast.success("Info successfully updated!", 1000);
    }
  } catch (error) {
    dispatch(updateUserDataFailure(error.response.data));
    Toast.fail("Failed updating info!", 1000);
  }
};

// Update User Password
export const updateUserPasswordStart = (): UserActionTYPES => ({
  type: UPDATE_USER_PASSWORD_START,
});

export const updateUserPasswordSuccess = (data: string): UserActionTYPES => ({
  type: UPDATE_USER_PASSWORD_SUCCESS,
  payload: data,
});

export const updateUserPasswordFailure = (
  errorMessage: string
): UserActionTYPES => ({
  type: UPDATE_USER_PASSWORD_FAILURE,
  payload: errorMessage,
});

export const updateUserPasswordStartAsync = (
  email: string,
  oldPass: string,
  newPass: string,
  token: string
) => async (dispatch: Dispatch<UserActionTYPES>) => {
  try {
    dispatch(updateUserPasswordStart());

    const res = await axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_ONEWS_BACKEND_URL}password`,
      data: {
        email,
        oldPass,
        newPass,
      },
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res.data === "Password updated!") {
      dispatch(updateUserPasswordSuccess(res.data));

      // console.log(res.data.email);
      // getUserSavedStartAsync;

      Toast.success("Password successfully updated!", 1000);
    } else {
      dispatch(updateUserPasswordFailure(res.data));
    }
  } catch (error) {
    dispatch(updateUserPasswordFailure(error.response.data));
    Toast.fail(error.response.data, 1000);
  }
};

// Update User Photo
export const updateUserPhotoStart = (): UserActionTYPES => ({
  type: UPDATE_USER_PHOTO_START,
});

export const updateUserPhotoSuccess = (user: User): UserActionTYPES => ({
  type: UPDATE_USER_PHOTO_SUCCESS,
  payload: user,
});

export const updateUserPhotoFailure = (
  errorMessage: string
): UserActionTYPES => ({
  type: UPDATE_USER_PHOTO_FAILURE,
  payload: errorMessage,
});

export const updateUserPhotoStartAsync = (
  formData: FormData,
  token: string
) => async (dispatch: Dispatch<UserActionTYPES>) => {
  try {
    dispatch(updateUserPhotoStart());
    const res = await axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_ONEWS_BACKEND_URL}photo`,
      data: formData,
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res.data.id) {
      dispatch(updateUserPhotoSuccess(res.data));

      // console.log(res.data.email);
      // getUserSavedStartAsync;

      Toast.success("Photo successfully updated!", 1000);
    } else {
      dispatch(updateUserPhotoFailure(res.data));
    }
  } catch (error) {
    dispatch(updateUserPhotoFailure(error.response.data));
    Toast.fail("Failed updating photo!", 1000);
  }
};
