// async action types
const asyncActionType = type => ({
  PENDING: `${type}_PENDING`,
  SUCCESS: `${type}_SUCCESS`,
  ERROR: `${type}_ERROR`,
});

// API actions
export const API_REQUEST = 'API_REQUEST';
export const API_POST = 'API_POST';
export const API_UPLOAD = 'API_UPLOAD';
export const API_ERROR = 'API_ERROR';

// Firebase actions


// User Auth
export const SIGN_IN = asyncActionType('SIGN_IN');
export const SIGN_UP = asyncActionType('SIGN_UP');

// Application Operations
export const IMAGE_UPLOAD = asyncActionType('IMAGE_UPLOAD');
export const ADD_IMAGE = 'ADD_IMAGE';
export const REMOVE_IMAGE = 'REMOVE_IMAGE';
export const SET_AUTHORIZATION = 'SET_AUTHORIZATION';
export const INCREASE_UPLOAD_PROGRESS = 'INCREASE_UPLOAD_PROGRESS';
