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
import PaginationMeta from './PaginationMeta';
import Sender from './Sender';

/**
 * The SenderListResponse model module.
 * @module Model/SenderListResponse
 * @version 1.31.0
 */
class SenderListResponse {
    /**
     * Constructs a new <code>SenderListResponse</code>.
     * @alias module:Model/SenderListResponse
     */
    constructor() { 
        
        SenderListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SenderListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/SenderListResponse} obj Optional instance to populate.
     * @return {module:Model/SenderListResponse} The populated <code>SenderListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SenderListResponse();

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], [Sender]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = PaginationMeta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:Model/Sender>} object
 */
SenderListResponse.prototype['object'] = undefined;

/**
 * @member {module:Model/PaginationMeta} meta
 */
SenderListResponse.prototype['meta'] = undefined;






export default SenderListResponse;

