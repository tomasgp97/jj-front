type Settings = {
    testing: boolean,
    version: string,
    webApi: string,
    baseUrl: string,
    baseHost: string
}

const settings: Settings =
    process.env.NODE_ENV === 'production' ? require('./settings-prod.json') : require('./settings-dev.json');

export default settings
