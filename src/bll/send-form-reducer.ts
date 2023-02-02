import {Dispatch} from "redux";
import emailjs from '@emailjs/browser';

export const initialState = {
    isLoading: 'idle' as LoadingType
}

export const sendFormReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-IS-LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default: {
            return state
        }
    }
}

//actions
const setIsLoadingAC = (isLoading: LoadingType) => ({type: 'SET-IS-LOADING', isLoading} as const)

//thunks
export const sendEmailFormTC = (data: dataSendEmailType) => (dispatch: Dispatch) => {
    dispatch(setIsLoadingAC('loading'))
    emailjs.send('service_07q6cw8', 'template_2uupu0c', data, 'Ocw43LZqLVyrOSP7J')
        .then((result) => {
            if (result.status === 200) {
                dispatch(setIsLoadingAC('success'))
            } else {
                dispatch(setIsLoadingAC('fail'))
            }
        }, (error) => {
            dispatch(setIsLoadingAC('fail'))
        });
}

//types
export type LoadingType = 'idle' | 'loading' | 'success' | 'fail'
type InitialStateType = typeof initialState
type ActionsType = ReturnType<typeof setIsLoadingAC>

export type dataSendEmailType = {
    name: string
    email: string
    message: string
}