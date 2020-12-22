/*
    File Name: Get list of Roster Actions
    @author Priyanka Subhash Ambawane
    dearpriyankasa@gmail.com
*/

import { AnyAction } from "redux";
import * as ACTION_TYPES from "./getListOfRoster.actionTypes";

export const getListOfRoster = (): AnyAction => {
    return {
        type: ACTION_TYPES.GET_LIST_OF_ROSTER,
    }
}

export const getListOfRosterSuccess = (data: any): AnyAction => {
    return {
        type: ACTION_TYPES.GET_LIST_OF_ROSTER_SUCCESS,
        payload: data
    }
}

export const getListOfRosterFailure = (error: any): AnyAction => {
    return {
        type: ACTION_TYPES.GET_LIST_OF_ROSTER_FAILURE,
        payload: error
    }
}

export const resetGetListOfRoster = (): AnyAction => {
    return {
        type: ACTION_TYPES.RESET_GET_LIST_OF_ROSTER,
    }
}