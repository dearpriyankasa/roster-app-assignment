/*
    File Name: Get list of Roster Saga
    @author Priyanka Subhash Ambawane
    dearpriyankasa@gmail.com
*/

import { call, put, takeEvery } from 'redux-saga/effects';
import * as ACTION_TYPES from "./getListOfRoster.actionTypes";
import * as Actions from './getListofRoster.actions';
import axios from "axios";

const getRequest = () => {
    return axios.get('https://get.rosterbuster.com/wp-content/uploads/dummy-response.json');
}

function* getListOFRoster() {
    try {
        const response: any = yield call(getRequest);
        yield put(Actions.getListOfRosterSuccess(response.data));
    } catch (e) {
        yield put(Actions.getListOfRosterFailure(e));
    }
}

export function* watcherSaga() {
    yield takeEvery(ACTION_TYPES.GET_LIST_OF_ROSTER, getListOFRoster);
}