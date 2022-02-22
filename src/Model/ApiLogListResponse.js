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
import ApiLog from './ApiLog';
import PaginationMeta from './PaginationMeta';

/**
 * The ApiLogListResponse model module.
 * @module Model/ApiLogListResponse
 * @version 1.19.1
 */
class ApiLogListResponse {
    /**
     * Constructs a new <code>ApiLogListResponse</code>.
     * @alias module:Model/ApiLogListResponse
     */
    constructor() { 
        
        ApiLogListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiLogListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/ApiLogListResponse} obj Optional instance to populate.
     * @return {module:Model/ApiLogListResponse} The populated <code>ApiLogListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiLogListResponse();

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], [ApiLog]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = PaginationMeta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * Array of API log objects
 * @member {Array.<module:Model/ApiLog>} object
 */
ApiLogListResponse.prototype['object'] = undefined;

/**
 * @member {module:Model/PaginationMeta} meta
 */
ApiLogListResponse.prototype['meta'] = undefined;






export default ApiLogListResponse;

