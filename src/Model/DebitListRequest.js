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

/**
 * The DebitListRequest model module.
 * @module Model/DebitListRequest
 * @version 1.19.4
 */
class DebitListRequest {
    /**
     * Constructs a new <code>DebitListRequest</code>.
     * @alias module:Model/DebitListRequest
     */
    constructor() { 
        
        DebitListRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DebitListRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/DebitListRequest} obj Optional instance to populate.
     * @return {module:Model/DebitListRequest} The populated <code>DebitListRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DebitListRequest();

            if (data.hasOwnProperty('debit')) {
                obj['debit'] = ApiClient.convertToType(data['debit'], [Debit]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:Model/Debit>} debit
 */
DebitListRequest.prototype['debit'] = undefined;






export default DebitListRequest;

