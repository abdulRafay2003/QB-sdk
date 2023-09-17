// QB initialization
export const INIT_QB_REQUEST = 'INIT_QB_REQUEST';
export const INIT_QB_REQUEST_SUCCESS = 'INIT_QB_REQUEST_SUCCESS';
export const INIT_QB_REQUEST_FAIL = 'INIT_QB_REQUEST_FAIL';
// Network connection state changed
export const CONNECTION_CHANGED = 'CONNECTION_CHANGED';
// User authentication
export const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAIL = 'AUTH_LOGIN_FAIL';
export const AUTH_LOGOUT_REQUEST = 'AUTH_LOGOUT_REQUEST';
export const AUTH_LOGOUT_SUCCESS = 'AUTH_LOGOUT_SUCCESS';
export const AUTH_LOGOUT_FAIL = 'AUTH_LOGOUT_FAIL';
export const AUTH_GET_SESSION_REQUEST = 'AUTH_GET_SESSION_REQUEST';
export const AUTH_GET_SESSION_SUCCESS = 'AUTH_GET_SESSION_SUCCESS';
export const AUTH_GET_SESSION_FAIL = 'AUTH_GET_SESSION_FAIL';
// QB chat authentication
export const CHAT_IS_CONNECTED_REQUEST = 'CHAT_IS_CONNECTED_REQUEST';
export const CHAT_IS_CONNECTED_SUCCESS = 'CHAT_IS_CONNECTED_SUCCESS';
export const CHAT_IS_CONNECTED_FAIL = 'CHAT_IS_CONNECTED_FAIL';
export const CHAT_CONNECT_REQUEST = 'CHAT_CONNECT_REQUEST';
export const CHAT_CONNECT_SUCCESS = 'CHAT_CONNECT_SUCCESS';
export const CHAT_CONNECT_FAIL = 'CHAT_CONNECT_FAIL';
export const CHAT_CONNECT_AND_SUBSCRIBE = 'CHAT_CONNECT_AND_SUBSCRIBE';
export const CHAT_DISCONNECT_REQUEST = 'CHAT_DISCONNECT_REQUEST';
export const CHAT_DISCONNECT_SUCCESS = 'CHAT_DISCONNECT_SUCCESS';
export const CHAT_DISCONNECT_FAIL = 'CHAT_DISCONNECT_FAIL';
// QB Users
export const USERS_CREATE_REQUEST = 'USERS_CREATE_REQUEST';
export const USERS_CREATE_SUCCESS = 'USERS_CREATE_SUCCESS';
export const USERS_CREATE_FAIL = 'USERS_CREATE_FAIL';
export const USERS_UPDATE_REQUEST = 'USERS_UPDATE_REQUEST';
export const USERS_UPDATE_SUCCESS = 'USERS_UPDATE_SUCCESS';
export const USERS_UPDATE_FAIL = 'USERS_UPDATE_FAIL';
export const USERS_GET_REQUEST = 'USERS_GET_REQUEST';
export const USERS_GET_SUCCESS = 'USERS_GET_SUCCESS';
export const USERS_GET_FAIL = 'USERS_GET_FAIL';
export const USERS_SELECT = 'USERS_SELECT';
export const USERS_BULK_SELECT = 'USERS_BULK_SELECT';
export const USERS_SET_FILTER = 'USERS_SET_FILTER';
export const USERS_SET_PAGE = 'USERS_SET_PAGE';
// QB Info
export const GET_INFO_REQUEST = 'GET_INFO_REQUEST';
export const GET_INFO_SUCCESS = 'GET_INFO_SUCCESS';
export const GET_INFO_FAIL = 'GET_INFO_FAIL';
// QB WebRTC
export const WEBRTC_INIT_REQUEST = 'WEBRTC_INIT_REQUEST';
export const WEBRTC_INIT_SUCCESS = 'WEBRTC_INIT_SUCCESS';
export const WEBRTC_INIT_FAIL = 'WEBRTC_INIT_FAIL';
export const WEBRTC_RELEASE_REQUEST = 'WEBRTC_RELEASE_REQUEST';
export const WEBRTC_RELEASE_SUCCESS = 'WEBRTC_RELEASE_SUCCESS';
export const WEBRTC_RELEASE_FAIL = 'WEBRTC_RELEASE_FAIL';
export const WEBRTC_CALL_REQUEST = 'WEBRTC_CALL_REQUEST';
export const WEBRTC_CALL_SUCCESS = 'WEBRTC_CALL_SUCCESS';
export const WEBRTC_CALL_FAIL = 'WEBRTC_CALL_FAIL';
export const WEBRTC_ACCEPT_REQUEST = 'WEBRTC_ACCEPT_REQUEST';
export const WEBRTC_ACCEPT_SUCCESS = 'WEBRTC_ACCEPT_SUCCESS';
export const WEBRTC_ACCEPT_FAIL = 'WEBRTC_ACCEPT_FAIL';
export const WEBRTC_REJECT_REQUEST = 'WEBRTC_REJECT_REQUEST';
export const WEBRTC_REJECT_SUCCESS = 'WEBRTC_REJECT_SUCCESS';
export const WEBRTC_REJECT_FAIL = 'WEBRTC_REJECT_FAIL';
export const WEBRTC_HANGUP_REQUEST = 'WEBRTC_HANGUP_REQUEST';
export const WEBRTC_HANGUP_SUCCESS = 'WEBRTC_HANGUP_SUCCESS';
export const WEBRTC_HANGUP_FAIL = 'WEBRTC_HANGUP_FAIL';
export const WEBRTC_TOGGLE_AUDIO_REQUEST = 'WEBRTC_TOGGLE_AUDIO_REQUEST';
export const WEBRTC_TOGGLE_AUDIO_SUCCESS = 'WEBRTC_TOGGLE_AUDIO_SUCCESS';
export const WEBRTC_TOGGLE_AUDIO_FAIL = 'WEBRTC_TOGGLE_AUDIO_FAIL';
export const WEBRTC_TOGGLE_VIDEO_REQUEST = 'WEBRTC_TOGGLE_VIDEO_REQUEST';
export const WEBRTC_TOGGLE_VIDEO_SUCCESS = 'WEBRTC_TOGGLE_VIDEO_SUCCESS';
export const WEBRTC_TOGGLE_VIDEO_FAIL = 'WEBRTC_TOGGLE_VIDEO_FAIL';
export const WEBRTC_SWITCH_CAMERA_REQUEST = 'WEBRTC_SWITCH_CAMERA_REQUEST';
export const WEBRTC_SWITCH_CAMERA_SUCCESS = 'WEBRTC_SWITCH_CAMERA_SUCCESS';
export const WEBRTC_SWITCH_CAMERA_FAIL = 'WEBRTC_SWITCH_CAMERA_FAIL';
export const WEBRTC_SWITCH_AUDIO_OUTPUT_REQUEST =
  'WEBRTC_SWITCH_AUDIO_OUTPUT_REQUEST';
export const WEBRTC_SWITCH_AUDIO_OUTPUT_SUCCESS =
  'WEBRTC_SWITCH_AUDIO_OUTPUT_SUCCESS';
export const WEBRTC_SWITCH_AUDIO_OUTPUT_FAIL =
  'WEBRTC_SWITCH_AUDIO_OUTPUT_FAIL';
// RNCallKeep
export const CALL_KEEP_INCOMING_CALL = 'CALL_KEEP_INCOMING_CALL';
// Device UDID and registration token for Push notifications
export const DEVICE_UDID_SET = 'DEVICE_UDID_SET';
export const DEVICE_UDID_REMOVE = 'DEVICE_UDID_REMOVE';
export const PUSH_TOKEN_SET = 'PUSH_TOKEN_SET';
export const PUSH_TOKEN_REMOVE = 'PUSH_TOKEN_REMOVE';
// Push notification subscriptions
export const PUSH_SUBSCRIPTION_CREATE_REQUEST =
  'PUSH_SUBSCRIPTION_CREATE_REQUEST';
export const PUSH_SUBSCRIPTION_CREATE_SUCCESS =
  'PUSH_SUBSCRIPTION_CREATE_SUCCESS';
export const PUSH_SUBSCRIPTION_CREATE_FAIL = 'PUSH_SUBSCRIPTION_CREATE_FAIL';
export const PUSH_SUBSCRIPTION_DELETE_REQUEST =
  'PUSH_SUBSCRIPTION_DELETE_REQUEST';
export const PUSH_SUBSCRIPTION_DELETE_SUCCESS =
  'PUSH_SUBSCRIPTION_DELETE_SUCCESS';
export const PUSH_SUBSCRIPTION_DELETE_FAIL = 'PUSH_SUBSCRIPTION_DELETE_FAIL';

// Notification events
export const PUSH_NOTIFICATION_CREATE_SUCCESS =
  'PUSH_NOTIFICATION_CREATE_SUCCESS';
export const PUSH_NOTIFICATION_CREATE_FAIL = 'PUSH_NOTIFICATION_CREATE_FAIL';
