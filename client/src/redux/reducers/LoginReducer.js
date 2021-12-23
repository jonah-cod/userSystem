import { LOGIN_SUCCESS, LOG_OUT } from '../types'

const initialState = {
    user: {}
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

        default:
            return state


    }
}