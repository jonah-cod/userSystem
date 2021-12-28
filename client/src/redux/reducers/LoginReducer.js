import { LOGIN_SUCCESS, LOG_OUT, PROJECTSUCCESS } from '../types'

const initialState = {
    user: {},
    projects: {}
}

export const userReducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case LOGIN_SUCCESS:
            return ({
                ...state,
                user: payload
            })


        case LOG_OUT:
            return (() => {

                    return {
                        ...state,
                        user: {}
                    }
                }

            )

        case PROJECTSUCCESS:
            return ({
                ...state,
                projects: payload
            })

        default:
            return state


    }
}