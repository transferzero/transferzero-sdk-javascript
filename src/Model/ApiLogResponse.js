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

/**
 * The ApiLogResponse model module.
 * @module Model/ApiLogResponse
 * @version 1.14.0
 */
class ApiLogResponse {
    /**
     * Constructs a new <code>ApiLogResponse</code>.
     * @alias module:Model/ApiLogResponse
     */
    constructor() { 
        
        ApiLogResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiLogResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/ApiLogResponse} obj Optional instance to populate.
     * @return {module:Model/ApiLogResponse} The populated <code>ApiLogResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiLogResponse();

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiLog.constructFromObject(data['object']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Model/ApiLog} object
 */
ApiLogResponse.prototype['object'] = undefined;






export default ApiLogResponse;

