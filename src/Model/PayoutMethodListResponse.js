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
import PayoutMethod from './PayoutMethod';

/**
 * The PayoutMethodListResponse model module.
 * @module Model/PayoutMethodListResponse
 * @version 1.26.1
 */
class PayoutMethodListResponse {
    /**
     * Constructs a new <code>PayoutMethodListResponse</code>.
     * @alias module:Model/PayoutMethodListResponse
     */
    constructor() { 
        
        PayoutMethodListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PayoutMethodListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodListResponse} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodListResponse} The populated <code>PayoutMethodListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodListResponse();

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], [PayoutMethod]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = PaginationMeta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:Model/PayoutMethod>} object
 */
PayoutMethodListResponse.prototype['object'] = undefined;

/**
 * @member {module:Model/PaginationMeta} meta
 */
PayoutMethodListResponse.prototype['meta'] = undefined;






export default PayoutMethodListResponse;

