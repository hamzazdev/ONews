import { News } from "../news/news.types";

// User News
export const SET_USER_CATEGORY = "SET_USER_CATEGORY";
export const SET_USER_COUNTRY = "SET_USER_COUNTRY";

// User Menus
export const SET_USER_SIDEBAR_MENU = "SET_USER_SIDEBAR_MENU";
export const SET_USER_WEATHER_MENU = "SET_USER_WEATHER_MENU";

// User Weather
export const SET_USER_UNITS = "SET_USER_UNITS";

// User Coords
export const SET_USER_COORDS = "SET_USER_COORDS";

// Set Current User
export const SET_CURRENT_USER = "SET_CURRENT_USER";

// Get Current User
export const GET_CURRENT_USER_START = "GET_CURRENT_USER_START";
export const GET_CURRENT_USER_SUCCESS = "GET_CURRENT_USER_SUCCESS";
export const GET_CURRENT_USER_FAILURE = "GET_CURRENT_USER_FAILURE";

// User Sign In
export const SIGN_IN_START = "SIGN_IN_START";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE";

// User Sign Up
export const SIGN_UP_START = "SIGN_UP_START";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

// User Sign Out
export const SIGN_OUT = "SIGN_OUT";

// User Saved
export const POST_USER_SAVED_START = "POST_USER_SAVED_START";
export const POST_USER_SAVED_SUCCESS = "POST_USER_SAVED_SUCCESS";
export const POST_USER_SAVED_FAILURE = "POST_USER_SAVED_FAILURE";

export const GET_USER_SAVED_START = "GET_USER_SAVED_START";
export const GET_USER_SAVED_SUCCESS = "GET_USER_SAVED_SUCCESS";
export const GET_USER_SAVED_FAILURE = "GET_USER_SAVED_FAILURE";

export const DELETE_USER_SAVED_START = "DELETE_USER_SAVED_START";
export const DELETE_USER_SAVED_SUCCESS = "DELETE_USER_SAVED_SUCCESS";
export const DELETE_USER_SAVED_FAILURE = "DELETE_USER_SAVED_FAILURE";

// User Liked
export const POST_USER_LIKED_START = "POST_USER_LIKED_START";
export const POST_USER_LIKED_SUCCESS = "POST_USER_LIKED_SUCCESS";
export const POST_USER_LIKED_FAILURE = "POST_USER_LIKED_FAILURE";

export const GET_USER_LIKED_START = "GET_USER_LIKED_START";
export const GET_USER_LIKED_SUCCESS = "GET_USER_LIKED_SUCCESS";
export const GET_USER_LIKED_FAILURE = "GET_USER_LIKED_FAILURE";

export const DELETE_USER_LIKED_START = "DELETE_USER_LIKED_START";
export const DELETE_USER_LIKED_SUCCESS = "DELETE_USER_LIKED_SUCCESS";
export const DELETE_USER_LIKED_FAILURE = "DELETE_USER_LIKED_FAILURE";

// User Disliked
export const POST_USER_DISLIKED_START = "POST_USER_DISLIKED_START";
export const POST_USER_DISLIKED_SUCCESS = "POST_USER_DISLIKED_SUCCESS";
export const POST_USER_DISLIKED_FAILURE = "POST_USER_DISLIKED_FAILURE";

export const GET_USER_DISLIKED_START = "GET_USER_DISLIKED_START";
export const GET_USER_DISLIKED_SUCCESS = "GET_USER_DISLIKED_SUCCESS";
export const GET_USER_DISLIKED_FAILURE = "GET_USER_DISLIKED_FAILURE";

export const DELETE_USER_DISLIKED_START = "DELETE_USER_DISLIKED_START";
export const DELETE_USER_DISLIKED_SUCCESS = "DELETE_USER_DISLIKED_SUCCESS";
export const DELETE_USER_DISLIKED_FAILURE = "DELETE_USER_DISLIKED_FAILURE";

// User Hidden
export const POST_USER_HIDDEN_START = "POST_USER_HIDDEN_START";
export const POST_USER_HIDDEN_SUCCESS = "POST_USER_HIDDEN_SUCCESS";
export const POST_USER_HIDDEN_FAILURE = "POST_USER_HIDDEN_FAILURE";

export const GET_USER_HIDDEN_START = "GET_USER_HIDDEN_START";
export const GET_USER_HIDDEN_SUCCESS = "GET_USER_HIDDEN_SUCCESS";
export const GET_USER_HIDDEN_FAILURE = "GET_USER_HIDDEN_FAILURE";

export const DELETE_USER_HIDDEN_START = "DELETE_USER_HIDDEN_START";
export const DELETE_USER_HIDDEN_SUCCESS = "DELETE_USER_HIDDEN_SUCCESS";
export const DELETE_USER_HIDDEN_FAILURE = "DELETE_USER_HIDDEN_FAILURE";

// User Searches
export const POST_USER_SEARCHES_START = "POST_USER_SEARCHES_START";
export const POST_USER_SEARCHES_SUCCESS = "POST_USER_SEARCHES_SUCCESS";
export const POST_USER_SEARCHES_FAILURE = "POST_USER_SEARCHES_FAILURE";

export const GET_USER_SEARCHES_START = "GET_USER_SEARCHES_START";
export const GET_USER_SEARCHES_SUCCESS = "GET_USER_SEARCHES_SUCCESS";
export const GET_USER_SEARCHES_FAILURE = "GET_USER_SEARCHES_FAILURE";

export const DELETE_USER_SEARCHES_START = "DELETE_USER_SEARCHES_START";
export const DELETE_USER_SEARCHES_SUCCESS = "DELETE_USER_SEARCHES_SUCCESS";
export const DELETE_USER_SEARCHES_FAILURE = "DELETE_USER_SEARCHES_FAILURE";

// Update User Settings
export const UPDATE_USER_DATA_START = "UPDATE_USER_DATA_START";
export const UPDATE_USER_DATA_SUCCESS = "UPDATE_USER_DATA_SUCCESS";
export const UPDATE_USER_DATA_FAILURE = "UPDATE_USER_DATA_FAILURE";

// Update User Password
export const UPDATE_USER_PASSWORD_START = "UPDATE_USER_PASSWORD_START";
export const UPDATE_USER_PASSWORD_SUCCESS = "UPDATE_USER_PASSWORD_SUCCESS";
export const UPDATE_USER_PASSWORD_FAILURE = "UPDATE_USER_PASSWORD_FAILURE";

// Update User Photo
export const UPDATE_USER_PHOTO_START = "UPDATE_USER_PHOTO_START";
export const UPDATE_USER_PHOTO_SUCCESS = "UPDATE_USER_PHOTO_SUCCESS";
export const UPDATE_USER_PHOTO_FAILURE = "UPDATE_USER_PHOTO_FAILURE";

export interface User {
  id: number;
  name: string;
  email: string;
  occupation: string;
  age: string;
  country: string;
  phone: string;
  about: string;
  photo: string;
  joined: string;
}

export interface UserUpdate {
  name?: string;
  email: string;
  occupation?: string;
  age?: string;
  country?: string;
  phone?: string;
  about?: string;
  photo?: string;
}

export interface UserNews {
  email: string;
  sourceName: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface UserCoords {
  lat: string;
  lng: string;
}

export interface Authorization {
  success: boolean;
  email: string;
  token: string;
}

// Set News
interface SetUserCategoryAction {
  type: typeof SET_USER_CATEGORY;
  payload: string;
}

interface SetUserCountryAction {
  type: typeof SET_USER_COUNTRY;
  payload: string;
}

// User Menus
interface SetUserSidebarMenuAction {
  type: typeof SET_USER_SIDEBAR_MENU;
  payload: boolean;
}

interface SetUserWeatherMenuAction {
  type: typeof SET_USER_WEATHER_MENU;
  payload: boolean;
}

// User Weather
interface SetUserUnitsAction {
  type: typeof SET_USER_UNITS;
  payload: string;
}

// User Coords
interface SetUserCoordsAction {
  type: typeof SET_USER_COORDS;
  payload: UserCoords;
}

// Set Current User
interface SetCurrentUser {
  type: typeof SET_CURRENT_USER;
  payload: User;
}

// Get Current User
interface GetCurrentUserStart {
  type: typeof GET_CURRENT_USER_START;
}

interface GetCurrentUserSuccess {
  type: typeof GET_CURRENT_USER_SUCCESS;
  payload: User;
}

interface GetCurrentUserFailure {
  type: typeof GET_CURRENT_USER_FAILURE;
  payload: string;
}

// Sign In
interface SignInStart {
  type: typeof SIGN_IN_START;
}

interface SignInSuccess {
  type: typeof SIGN_IN_SUCCESS;
  payload: Authorization;
}

interface SignInFailure {
  type: typeof SIGN_IN_FAILURE;
  payload: string;
}

// Sign Up
interface SignUpStart {
  type: typeof SIGN_UP_START;
}

interface SignUpSuccess {
  type: typeof SIGN_UP_SUCCESS;
  payload: Authorization;
}

interface SignUpFailure {
  type: typeof SIGN_UP_FAILURE;
  payload: string;
}

// Sign Out
interface SignOut {
  type: typeof SIGN_OUT;
}

// User Saved
interface PostUserSavedStart {
  type: typeof POST_USER_SAVED_START;
}

interface PostUserSavedSuccess {
  type: typeof POST_USER_SAVED_SUCCESS;
  payload: News[];
}

interface PostUserSavedFailure {
  type: typeof POST_USER_SAVED_FAILURE;
  payload: string;
}

interface GetUserSavedStart {
  type: typeof GET_USER_SAVED_START;
}

interface GetUserSavedSuccess {
  type: typeof GET_USER_SAVED_SUCCESS;
  payload: News[];
}

interface GetUserSavedFailure {
  type: typeof GET_USER_SAVED_FAILURE;
  payload: string;
}

interface DeleteUserSavedStart {
  type: typeof DELETE_USER_SAVED_START;
}

interface DeleteUserSavedSuccess {
  type: typeof DELETE_USER_SAVED_SUCCESS;
  payload: News[];
}

interface DeleteUserSavedFailure {
  type: typeof DELETE_USER_SAVED_FAILURE;
  payload: string;
}

// User Liked
interface PostUserLikedStart {
  type: typeof POST_USER_LIKED_START;
}

interface PostUserLikedSuccess {
  type: typeof POST_USER_LIKED_SUCCESS;
  payload: News[];
}

interface PostUserLikedFailure {
  type: typeof POST_USER_LIKED_FAILURE;
  payload: string;
}

interface GetUserLikedStart {
  type: typeof GET_USER_LIKED_START;
}

interface GetUserLikedSuccess {
  type: typeof GET_USER_LIKED_SUCCESS;
  payload: News[];
}

interface GetUserLikedFailure {
  type: typeof GET_USER_LIKED_FAILURE;
  payload: string;
}

interface DeleteUserLikedStart {
  type: typeof DELETE_USER_LIKED_START;
}

interface DeleteUserLikedSuccess {
  type: typeof DELETE_USER_LIKED_SUCCESS;
  payload: News[];
}

interface DeleteUserLikedFailure {
  type: typeof DELETE_USER_LIKED_FAILURE;
  payload: string;
}

// User Disliked
interface PostUserDislikedStart {
  type: typeof POST_USER_DISLIKED_START;
}

interface PostUserDislikedSuccess {
  type: typeof POST_USER_DISLIKED_SUCCESS;
  payload: News[];
}

interface PostUserDislikedFailure {
  type: typeof POST_USER_DISLIKED_FAILURE;
  payload: string;
}

interface GetUserDislikedStart {
  type: typeof GET_USER_DISLIKED_START;
}

interface GetUserDislikedSuccess {
  type: typeof GET_USER_DISLIKED_SUCCESS;
  payload: News[];
}

interface GetUserDislikedFailure {
  type: typeof GET_USER_DISLIKED_FAILURE;
  payload: string;
}

interface DeleteUserDislikedStart {
  type: typeof DELETE_USER_DISLIKED_START;
}

interface DeleteUserDislikedSuccess {
  type: typeof DELETE_USER_DISLIKED_SUCCESS;
  payload: News[];
}

interface DeleteUserDislikedFailure {
  type: typeof DELETE_USER_DISLIKED_FAILURE;
  payload: string;
}

// User Hidden
interface PostUserHiddenStart {
  type: typeof POST_USER_HIDDEN_START;
}

interface PostUserHiddenSuccess {
  type: typeof POST_USER_HIDDEN_SUCCESS;
  payload: [string];
}

interface PostUserHiddenFailure {
  type: typeof POST_USER_HIDDEN_FAILURE;
  payload: string;
}

interface GetUserHiddenStart {
  type: typeof GET_USER_HIDDEN_START;
}

interface GetUserHiddenSuccess {
  type: typeof GET_USER_HIDDEN_SUCCESS;
  payload: [string];
}

interface GetUserHiddenFailure {
  type: typeof GET_USER_HIDDEN_FAILURE;
  payload: string;
}

interface DeleteUserHiddenStart {
  type: typeof DELETE_USER_HIDDEN_START;
}

interface DeleteUserHiddenSuccess {
  type: typeof DELETE_USER_HIDDEN_SUCCESS;
  payload: [string];
}

interface DeleteUserHiddenFailure {
  type: typeof DELETE_USER_HIDDEN_FAILURE;
  payload: string;
}

// User Searches
interface PostUserSearchesStart {
  type: typeof POST_USER_SEARCHES_START;
}

interface PostUserSearchesSuccess {
  type: typeof POST_USER_SEARCHES_SUCCESS;
  payload: [string];
}

interface PostUserSearchesFailure {
  type: typeof POST_USER_SEARCHES_FAILURE;
  payload: string;
}

interface GetUserSearchesStart {
  type: typeof GET_USER_SEARCHES_START;
}

interface GetUserSearchesSuccess {
  type: typeof GET_USER_SEARCHES_SUCCESS;
  payload: [string];
}

interface GetUserSearchesFailure {
  type: typeof GET_USER_SEARCHES_FAILURE;
  payload: string;
}

interface DeleteUserSearchesStart {
  type: typeof DELETE_USER_SEARCHES_START;
}

interface DeleteUserSearchesSuccess {
  type: typeof DELETE_USER_SEARCHES_SUCCESS;
  payload: [string];
}

interface DeleteUserSearchesFailure {
  type: typeof DELETE_USER_SEARCHES_FAILURE;
  payload: string;
}

// Update User Settings
interface UpdateUserDataStart {
  type: typeof UPDATE_USER_DATA_START;
}

interface UpdateUserDataSuccess {
  type: typeof UPDATE_USER_DATA_SUCCESS;
  payload: User;
}

interface UpdateUserDataFailure {
  type: typeof UPDATE_USER_DATA_FAILURE;
  payload: string;
}

// Update User Password
interface UpdateUserPasswordStart {
  type: typeof UPDATE_USER_PASSWORD_START;
}

interface UpdateUserPasswordSuccess {
  type: typeof UPDATE_USER_PASSWORD_SUCCESS;
  payload: string;
}

interface UpdateUserPasswordFailure {
  type: typeof UPDATE_USER_PASSWORD_FAILURE;
  payload: string;
}

// Update User Photo
interface UpdateUserPhotoStart {
  type: typeof UPDATE_USER_PHOTO_START;
}

interface UpdateUserPhotoSuccess {
  type: typeof UPDATE_USER_PHOTO_SUCCESS;
  payload: User;
}

interface UpdateUserPhotoFailure {
  type: typeof UPDATE_USER_PHOTO_FAILURE;
  payload: string;
}

export type UserActionTYPES =
  | SetUserCategoryAction
  | SetUserCountryAction
  | SetUserUnitsAction
  | SetUserSidebarMenuAction
  | SetUserWeatherMenuAction
  | SetUserCoordsAction
  | SetCurrentUser
  | GetCurrentUserStart
  | GetCurrentUserSuccess
  | GetCurrentUserFailure
  | SignUpStart
  | SignInStart
  | SignInSuccess
  | SignInFailure
  | SignUpStart
  | SignUpSuccess
  | SignUpFailure
  | SignOut
  | PostUserSavedStart
  | PostUserSavedSuccess
  | PostUserSavedFailure
  | GetUserSavedStart
  | GetUserSavedSuccess
  | GetUserSavedFailure
  | DeleteUserSavedStart
  | DeleteUserSavedSuccess
  | DeleteUserSavedFailure
  | PostUserLikedStart
  | PostUserLikedSuccess
  | PostUserLikedFailure
  | GetUserLikedStart
  | GetUserLikedSuccess
  | GetUserLikedFailure
  | DeleteUserLikedStart
  | DeleteUserLikedSuccess
  | DeleteUserLikedFailure
  | PostUserDislikedStart
  | PostUserDislikedSuccess
  | PostUserDislikedFailure
  | GetUserDislikedStart
  | GetUserDislikedSuccess
  | GetUserDislikedFailure
  | DeleteUserDislikedStart
  | DeleteUserDislikedSuccess
  | DeleteUserDislikedFailure
  | PostUserHiddenStart
  | PostUserHiddenSuccess
  | PostUserHiddenFailure
  | GetUserHiddenStart
  | GetUserHiddenSuccess
  | GetUserHiddenFailure
  | DeleteUserHiddenStart
  | DeleteUserHiddenSuccess
  | DeleteUserHiddenFailure
  | PostUserSearchesStart
  | PostUserSearchesSuccess
  | PostUserSearchesFailure
  | GetUserSearchesStart
  | GetUserSearchesSuccess
  | GetUserSearchesFailure
  | DeleteUserSearchesStart
  | DeleteUserSearchesSuccess
  | DeleteUserSearchesFailure
  | UpdateUserDataStart
  | UpdateUserDataSuccess
  | UpdateUserDataFailure
  | UpdateUserPasswordStart
  | UpdateUserPasswordSuccess
  | UpdateUserPasswordFailure
  | UpdateUserPhotoStart
  | UpdateUserPhotoSuccess
  | UpdateUserPhotoFailure;
