const blueSdkMessageEndpoint = 'https://scan.blueprotocol.com/v2/message';
/**
 * Private method used to get current UTC date in Ymd format.
 *
 * @return {string}
 */
const getUtcDate = function() {
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1;
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    return year + month + day;
};
// ---------------------------------------------------------------------------->
/**
 * The BlueProtocolSdk class. Provides methods for interacting with the Blue
 * Protocol Sdk.
 */
class BlueProtocolSdk {
    /**
     * Constructor for the BlueProtocolSdk class.
     * @param {string} apiKey - Your BlueProtocol SDK api key
     * @param {string} address - Your ethereum public address
     * @param {string} network - (optional) defaults mainnet [rinkeby, ropsten]
     *
     * @example
     * const blueSdk = new BlueProtocolSdk(
     *  YOUR_API_KEY,
     *  YOUR_PUBLIC_ADDRESS
     * );
     */
    constructor(apiKey, address, network = 'mainnet') {
        this.apiKey = apiKey;
        this.address = address;
        this.network = network;
    }
    // ------------------------------------------------------------------------>
    /**
     * Sends the given message and signature to the Blue Protocol SDK API and
     * returns the response.
     *
     * @param {Object} message
     *
     * @param {String} signedMessage
     *
     * @return {mixed} Depends on message parameter
     */
    async sendRequest(message, signedMessage) {
        const response = await fetch(blueSdkMessageEndpoint, {
            headers: {
                'Authorization': signedMessage,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(message)
        });

        return await response.json();
    }
    // ------------------------------------------------------------------------>
    /**
     * The result of a call to the scanLists method.
     * @typedef {Object} ListResult
     * @property {string} result - The result ['blocked', 'neutral', 'whitelisted']
     * @property {Array.<ListResultEntry>} entries - The entries related to the
     * given address.
     */
    /**
     * An entry within the ListResult entries property.
     * @typedef {Object} ListResultEntry
     * @property {number} id
     * @property {string} name
     * @property {string} category
     * @property {string} subcategory
     * @property {string} description
     * @property {string} status - ['online', 'offline']
     * @property {string[]} addresses - addresses involved to entry
     */
    /**
     * Returns the message used to request list scanning.
     * Scans against a number of of community and Blue-maintained black and
     * whitelists which identify known attackers, and verified recipients of
     * funds and returns the results.
     *
     * @param {string} address - The address you wish to check. Can be a public
     *                           address of an account or a contract.
     * @example
     * let message = blueSdk.requestScanLists('0x83D217450eB96F6247ff49d148409d4fEAf0405F');
     *
     * // Signing is not provided by this package. The message is intended to be
     * // signed by the wallet implementing this SDK.
     * // below line is placeholder..
     * let signedMessage = sign(message, privateKey);
     *
     * blueSdk.sendRequest(message, signedMessage)
     * .then(result => {
     *     console.log(result)
     * })
     * .catch(err => {
     *     console.error(err)
     * })
     * @return {Promise.<ListResult>}
     */
    requestScanLists(address) {
        return {
            'action': 'scanLists',
            'arguments': {
                'address': address
            },
            'context': {
                'apiKey': this.apiKey,
                'network': this.network,
                'address': this.address,
                'dateYmd': getUtcDate()
            }
        };
    }
    // ------------------------------------------------------------------------>
    /**
     * The result of a call to the analyzeContract method.
     * @typedef {Object} AnalysisResult
     * @property {number} scan_status - [in_progress, complete]
     * @property {Array.<AnalysisResultEntry>} entries - The scan results
     */
    /**
     * An entry within the AnalysisResult entries property.
     * @typedef {Object} AnalysisResultEntry
     * @property {string} title
     * @property {string} description
     * @property {string} function - function hash
     * @property {string} type - ['Informational', 'Warning']
     * @property {string} debug - Additional information related to entry
     */
    /**
     * Returns the message used to request contract analysis.
     *
     * @param {string} address - The address of the contract you wish to analyze
     *
     * @example
     * let message = blueSdk.requestAnalyzeContract('0x83D217450eB96F6247ff49d148409d4fEAf0405F');
     *
     * // Signing is not provided by this package. The message is intended to be
     * // signed by the wallet implementing this SDK.
     * // below line is placeholder..
     * let signedMessage = sign(message, privateKey);
     *
     * blueSdk.sendRequest(message, signedMessage)
     * .then(result => {
     *     console.log(result)
     * })
     * .catch(err => {
     *     console.error(err)
     * })
     * @return {Promise.<AnalysisResult>}
     */
    requestAnalyzeContract(address) {
        return {
            'action': 'analyzeContract',
            'arguments': {
                'address': address
            },
            'context': {
                'apiKey': this.apiKey,
                'network': this.network,
                'address': this.address,
                'dateYmd': getUtcDate()
            }
        };
    }
}

module.exports = BlueProtocolSdk;
