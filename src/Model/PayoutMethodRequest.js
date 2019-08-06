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
import PayoutMethod from './PayoutMethod';

/**
 * The PayoutMethodRequest model module.
 * @module Model/PayoutMethodRequest
 * @version 1.2.0
 */
class PayoutMethodRequest {
    /**
     * Constructs a new <code>PayoutMethodRequest</code>.
     * @alias module:Model/PayoutMethodRequest
     */
    constructor() { 
        
        PayoutMethodRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PayoutMethodRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodRequest} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodRequest} The populated <code>PayoutMethodRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodRequest();

            if (data.hasOwnProperty('payout_method')) {
                obj['payout_method'] = PayoutMethod.constructFromObject(data['payout_method']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Model/PayoutMethod} payout_method
 */
PayoutMethodRequest.prototype['payout_method'] = undefined;






export default PayoutMethodRequest;
