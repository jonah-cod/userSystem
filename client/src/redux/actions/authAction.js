import { LOGIN_SUCCESS, LOG_OUT, PROJECTSUCCESS, REFRESH } from '../types'

export const loginSuccess = (data) => {
    return ({
        type: LOGIN_SUCCESS,
        payload: data
    })
}

export const logout = () => {
    return ({
        type: LOG_OUT
    })
}

export const updateuser = () => {
    return ({
        type: REFRESH
    })
}
export const projectdata = (data) => {
    return ({
        type: PROJECTSUCCESS,
        payload: data
    })
}