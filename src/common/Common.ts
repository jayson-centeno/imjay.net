export interface ITitleProps {
    Title: string
}

export const ACTIONS = {
    ADD_HEADER_MESSAGE: 'ADD_HEADER_MESSAGE',
    CLEAR_HEADER_MESSAGE: 'CLEAR_HEADER_MESSAGE',
    SUBMIT_CONTACT: 'SUBMIT_CONTACT',
    RECEIVED_CONTACT: 'RECEIVED_CONTACT'
}

export const MESSAGING = {

    TYPES: {
        SUCCESS: 'success',
        ERROR: 'error'
    },

    MESSAGE: {
        CONTACT_US_SUCCESS_MESSAGE: 'Thank you! I have received your message and will ge in touch shortly.',
        CONTACT_US_ERROR_MESSAGE: 'I am sorry, but something went wrong please try again.',
    },

}