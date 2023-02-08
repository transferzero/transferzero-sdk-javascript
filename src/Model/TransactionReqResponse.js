/**
 * BitPesa Private API
 * API specification used for internal BitPesa endpoints
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
import TransactionReq from './TransactionReq';

/**
 * The TransactionReqResponse model module.
 * @module Model/TransactionReqResponse
 * @version 1.24.0
 */
class TransactionReqResponse {
    /**
     * Constructs a new <code>TransactionReqResponse</code>.
     * @alias module:Model/TransactionReqResponse
     */
    constructor() { 
        
        TransactionReqResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionReqResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/TransactionReqResponse} obj Optional instance to populate.
     * @return {module:Model/TransactionReqResponse} The populated <code>TransactionReqResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionReqResponse();

            if (data.hasOwnProperty('object')) {
                obj['object'] = TransactionReq.constructFromObject(data['object']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Model/TransactionReq} object
 */
TransactionReqResponse.prototype['object'] = undefined;






export default TransactionReqResponse;

