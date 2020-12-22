/*
    File Name: Get list of Roster Reducer
    @author Priyanka Subhash Ambawane
    dearpriyankasa@gmail.com
*/

import { AnyAction } from "redux";
import * as ACTION_TYPES from "./getListOfRoster.actionTypes";

const initialState = {
    status: 'INIT',
    response: {}
}

export default function getListOfRosterReducer (state = initialState, action: AnyAction) {
    switch(action.type) {
        case ACTION_TYPES.GET_LIST_OF_ROSTER:
            return {
                ...state,
                status: 'FETCHING'
            }
        case ACTION_TYPES.GET_LIST_OF_ROSTER_SUCCESS:
            return {
                ...state,
                status: 'SUCCESS',
                response: action.payload
            } 
        case ACTION_TYPES.GET_LIST_OF_ROSTER_FAILURE:
            return {
                ...state,
                status: 'ERROR',
                response: action.payload
            }
        case ACTION_TYPES.RESET_GET_LIST_OF_ROSTER:
            return {
                ...initialState
            }
        default:
            return {
                ...state
            }
    }
}