/**
 * TransferZero API
 * Reference documentation for the TransferZero API V1
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Pagination model module.
 * @module Model/Pagination
 * @version 1.9.0
 */
class Pagination {
    /**
     * Constructs a new <code>Pagination</code>.
     * @alias module:Model/Pagination
     */
    constructor() { 
        
        Pagination.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Pagination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/Pagination} obj Optional instance to populate.
     * @return {module:Model/Pagination} The populated <code>Pagination</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Pagination();

            if (data.hasOwnProperty('current_page')) {
                obj['current_page'] = ApiClient.convertToType(data['current_page'], 'Number');
            }
            if (data.hasOwnProperty('next_page')) {
                obj['next_page'] = ApiClient.convertToType(data['next_page'], 'Number');
            }
            if (data.hasOwnProperty('prev_page')) {
                obj['prev_page'] = ApiClient.convertToType(data['prev_page'], 'Number');
            }
            if (data.hasOwnProperty('total_pages')) {
                obj['total_pages'] = ApiClient.convertToType(data['total_pages'], 'Number');
            }
            if (data.hasOwnProperty('total_count')) {
                obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The number of the current page
 * @member {Number} current_page
 */
Pagination.prototype['current_page'] = undefined;

/**
 * The number of the next page. If no next page exists, this will be `null`
 * @member {Number} next_page
 */
Pagination.prototype['next_page'] = undefined;

/**
 * The number of the previous page. If no previous page exists, this will be `null`
 * @member {Number} prev_page
 */
Pagination.prototype['prev_page'] = undefined;

/**
 * The number of pages in the result set
 * @member {Number} total_pages
 */
Pagination.prototype['total_pages'] = undefined;

/**
 * The total number of results in the set
 * @member {Number} total_count
 */
Pagination.prototype['total_count'] = undefined;






export default Pagination;

