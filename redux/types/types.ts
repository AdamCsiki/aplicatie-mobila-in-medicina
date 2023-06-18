// ! AUTH TYPES

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAIL = 'REGISTER_FAILED'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGOUT = 'LOGOUT'
export const REFRESH_SUCCESS = 'REFRESH_SUCCESS'
export const SET_USER = 'SET_USER'
export const OFFLINE = 'OFFLINE'
export const OFFLINE_LOGGED_IN = 'OFFLINE_LOGGED_IN'
export const OFFLINE_LOGGED_OUT = 'OFFLINE_LOGGED_OUT'

// ! FOOD SEARCH TYPES
export const FOOD_SEARCH_SUCCESS = 'FOOD_SEARCH_SUCCESS'
export const FOOD_SEARCH_FAIL = 'FOOD_SEARCH_FAIL'
export const FOOD_SUCCESS = 'FOOD_SUCCESS'
// ! SPORT SEARCH TYPES
export const SPORT_SEARCH_SUCCESS = 'SPORT_SEARCH_SUCCESS'
export const SPORT_SEARCH_FAIL = 'SPORT_SEARCH_FAIL'
export const SPORT_SUCCESS = 'SPORT_SUCCESS'
// ! DIET TYPES
export const DEFAULT_BODY_INFO = 'DEFAULT_BODY_INFO'
export const SET_BODY_INFO = 'SET_BODY_INFO'
export const SET_BODY_MAX = 'SET_BODY_MAX'
export const SET_BMR = 'SET_BMR'
export const SET_MACRO_RATIOS = 'SET_MACRO_RATIOS'
export const AUTO_MACRO_RATIOS = 'AUTO_MACRO_RATIOS'
export const DEFAULT_MAX_MACROS = 'DEFAULT_MAX_MACROS'
export const UPDATE_MAX_MACROS_MANUAL = 'UPDATE_MAX_MACROS_MANUAL'
export const UPDATE_MAX_MACROS_AUTO = 'DIET_UPDATE_MAX_AUTO'
export const UPDATE_MAX_MACROS = 'UPDATE_MAX_MACROS'
export const UPDATE_CURRENT_MACROS = 'DIET_UPDATE'
export const ADD_CURRENT_MACROS = 'ADD_DIET'
export const DEFAULT_MACROS = 'DEFAULT_MACROS'
export const SET_CURRENT_BMR = 'SET_CURRENT_BMR'
export const SET_CURRENT_RMR = 'SET_CURRENT_RMR'
export const SET_CURRENT_ACTIVITY = 'SET_CURRENT_ACTIVITY'
export const SET_CURRENT_WEIGHT_PLAN = 'SET_CURRENT_WEIGHT_PLAN'
export const SETUP_IS_DONE = 'SETUP_IS_DONE'
export const SETUP_IS_NOT_DONE = 'SETUP_IS_NOT_DONE'
// ! FOOD DIET TYPES
export const SET_MEALS = 'SET_MEALS'
export const ADD_FOOD_TO_MEAL = 'ADD_FOOD_TO_MEAL'
export const ADD_BREAKFAST = 'ADD_BREAKFAST'
export const ADD_LUNCH = 'ADD_LUNCH'
export const ADD_DINNER = 'ADD_DINNER'
export const ADD_SNACK = 'ADD_SNACK'

export const BREAKFAST = 'Breakfast'
export type BREAKFAST = 'Breakfast'

export const LUNCH = 'Lunch'
export type LUNCH = 'Lunch'

export const DINNER = 'Dinner'
export type DINNER = 'Dinner'

export const SNACK = 'Snack'
export type SNACK = 'Snack'

export type MEAL_TYPES = BREAKFAST | LUNCH | DINNER | SNACK

export const MIFFLIN_EQUATION = 'Mifflin equation'
export type MIFFLIN_EQUATION = 'Mifflin equation'
export const HARRIS_EQUATION = 'Harris equation'
export type HARRIS_EQUATION = 'Harris equation'
export type EQUATION_TYPES = HARRIS_EQUATION | MIFFLIN_EQUATION

export const WEIGHT_LOSS = 'Weight loss'
export type WEIGHT_LOSS = 'Weight loss'
export const WEIGHT_GAIN = 'Weight gain'
export type WEIGHT_GAIN = 'Weight gain'
export const MAINTAIN_WEIGHT = 'Maintain weight'
export type MAINTAIN_WEIGHT = 'Maintain weight'

export type WEIGHT_PLAN_TYPES = WEIGHT_LOSS | WEIGHT_GAIN | MAINTAIN_WEIGHT
