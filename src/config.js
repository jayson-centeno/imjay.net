const ENV = {
    dev: {
        API_URL: 'http://localhost:5000/api/',
        API_AUTH_PASSWORD: "Sw0rdf!sh",
        API_AUTH_USERNAME: "jaysword1@yahoo.com",
        CAPTCHA_ELEMENT_KEY: 'rkey',
        TOKEN_ELEMENT_ID: 't',
        TOKEN_KEY: 'imjay_jwtToken'
    },
    prod: {
        API_URL: 'https://imjay.net/api/',
        API_AUTH_PASSWORD: "Sw0rdf!sh",
        API_AUTH_USERNAME: "jaysword1@yahoo.com",
        CAPTCHA_ELEMENT_KEY: 'rkey',
        TOKEN_ELEMENT_ID: 't',
        TOKEN_KEY: 'imjay_jwtToken'
    },
}

function getEnvironmentVariables(env = '') {
    if (env === 'development') { return ENV.dev }
    if (env === 'production') { return ENV.prod }
    return ENV.dev
}

export default getEnvironmentVariables(process.env.NODE_ENV)
