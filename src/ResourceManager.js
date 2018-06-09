'use strict';

const RESOURCES_URL = 'https://s3-us-west-2.amazonaws.com/blue-protocol-sdk/config/resources.json';
const SESSION_STORAGE_KEY = 'blue-sdk-resources';

/**
 * The ResourceManager class, provides methods for retrieving remote resources.
 */
class ResourceManager {
    /**
     * Constructor.
     */
    constructor() {
        this.resources = null;
        this.fetchedResources = false;
    }
    /**
     * Attempts to retrieve resources from sessionStorage then remote host.
     */
    async _setResources() {
        let resourcesJson = sessionStorage.getItem(SESSION_STORAGE_KEY);
        if (resourcesJson === null && this.fetchedResources === false) {
            resourcesJson = await fetch(RESOURCES_URL);
            sessionStorage.setItem(resourcesJson);
            this.fetchedResources = true;
        } else if (resourcesJson === null && this.fetchedResources !== false) {
            throw new Error('Unable to fetch resources');
        }
        this.resources = JSON.parse(resourcesJson);
    }
    /**
     * Retrieves the remote path to the requested resource.
     * @param {string} key
     * @return {string} the Url
     */
    async getResource(key) {
        if (this.resources == null) {
            await this._setResources();
        }

        if (this.resources.hasOwnProperty(key) !== true) {
            throw new Error('Unknown resource requested');
        }

        return this.resources[key];
    }
}

export default new ResourceManager();
