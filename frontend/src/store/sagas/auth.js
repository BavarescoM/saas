import { call, put } from 'redux-saga/effects';

import api from '../../sevices/api';

export function* signIn({ email, password }) {
    try {
        const reponse = yield call(api.post, 'sessions', {
            email, password
        })
        localStorage.setItem('@Omini:token', response.data.token);

    }catch(err) {

    }
}

