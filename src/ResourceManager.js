const RESOURCES_URL = 'https://s3-us-west-2.amazonaws.com/blue-protocol-sdk/resources.json';
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
        let resources = sessionStorage.getItem(SESSION_STORAGE_KEY);
        if (resources === null && this.fetchedResources === false) {
            const resourceResponse = await fetch(RESOURCES_URL);
            resources = await resourceResponse.json();
            sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(resources));
            this.fetchedResources = true;
        } else if (resources === null && this.fetchedResources !== false) {
            throw new Error('Unable to fetch resources');
        } else {
            resources = JSON.parse(resources);
        }
        this.resources = resources;
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
        if (this.resources.endpoints.hasOwnProperty(key) !== true) {
            throw new Error('Unknown resource requested');
        }

        return this.resources.endpoints[key];
    }
}

export let objResourceManager = new ResourceManager();
