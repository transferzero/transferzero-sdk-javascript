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
import Debit from './Debit';
import PaginationMeta from './PaginationMeta';

/**
 * The DebitListResponse model module.
 * @module Model/DebitListResponse
 * @version 1.20.0
 */
class DebitListResponse {
    /**
     * Constructs a new <code>DebitListResponse</code>.
     * @alias module:Model/DebitListResponse
     */
    constructor() { 
        
        DebitListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DebitListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/DebitListResponse} obj Optional instance to populate.
     * @return {module:Model/DebitListResponse} The populated <code>DebitListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DebitListResponse();

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], [Debit]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = PaginationMeta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:Model/Debit>} object
 */
DebitListResponse.prototype['object'] = undefined;

/**
 * @member {module:Model/PaginationMeta} meta
 */
DebitListResponse.prototype['meta'] = undefined;






export default DebitListResponse;

