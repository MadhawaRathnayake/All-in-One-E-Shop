// apiHelper.js
// Place this file in: src/helpers/apiHelper.js or src/utils/apiHelper.js

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://localhost:7014/api';

/**
 * Generic API request handler
 * @param {string} endpoint - API endpoint (e.g., 'Product/SaveProduct')
 * @param {string} method - HTTP method (GET, POST, PUT, DELETE)
 * @param {object} data - Request body (for POST, PUT)
 * @param {object} headers - Additional headers
 * @returns {Promise} - Response data or error
 */
const apiRequest = async (endpoint, method = 'GET', data = null, headers = {}) => {
    const url = `${BASE_URL}/${endpoint}`;
    
    const config = {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
    };

    // Add body for POST, PUT, PATCH requests
    if (data && ['POST', 'PUT', 'PATCH'].includes(method)) {
        config.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, config);
        
        // Parse JSON response
        const result = await response.json();

        // Check if request was successful
        if (!response.ok) {
            throw {
                status: response.status,
                statusText: response.statusText,
                data: result
            };
        }

        return result;
    } catch (error) {
        // Handle network errors or parsing errors
        if (error.status) {
            // HTTP error with response
            throw error;
        } else {
            // Network error or other issue
            throw {
                status: 0,
                statusText: 'Network Error',
                message: error.message || 'Failed to connect to server'
            };
        }
    }
};

/**
 * GET request
 * @param {string} endpoint - API endpoint
 * @param {object} headers - Additional headers
 * @returns {Promise} - Response data
 */
export const get = (endpoint, headers = {}) => {
    return apiRequest(endpoint, 'GET', null, headers);
};

/**
 * POST request
 * @param {string} endpoint - API endpoint
 * @param {object} data - Request body
 * @param {object} headers - Additional headers
 * @returns {Promise} - Response data
 */
export const post = (endpoint, data, headers = {}) => {
    return apiRequest(endpoint, 'POST', data, headers);
};

/**
 * PUT request
 * @param {string} endpoint - API endpoint
 * @param {object} data - Request body
 * @param {object} headers - Additional headers
 * @returns {Promise} - Response data
 */
export const put = (endpoint, data, headers = {}) => {
    return apiRequest(endpoint, 'PUT', data, headers);
};

/**
 * DELETE request
 * @param {string} endpoint - API endpoint
 * @param {object} headers - Additional headers
 * @returns {Promise} - Response data
 */
export const del = (endpoint, headers = {}) => {
    return apiRequest(endpoint, 'DELETE', null, headers);
};

/**
 * PATCH request
 * @param {string} endpoint - API endpoint
 * @param {object} data - Request body
 * @param {object} headers - Additional headers
 * @returns {Promise} - Response data
 */
export const patch = (endpoint, data, headers = {}) => {
    return apiRequest(endpoint, 'PATCH', data, headers);
};

// Export all methods as default object
export default {
    get,
    post,
    put,
    delete: del, // 'delete' is a reserved keyword
    patch
};