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
import PayinMethod from './PayinMethod';

/**
 * The PayinMethodRequest model module.
 * @module Model/PayinMethodRequest
 * @version 1.24.0
 */
class PayinMethodRequest {
    /**
     * Constructs a new <code>PayinMethodRequest</code>.
     * @alias module:Model/PayinMethodRequest
     */
    constructor() { 
        
        PayinMethodRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PayinMethodRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayinMethodRequest} obj Optional instance to populate.
     * @return {module:Model/PayinMethodRequest} The populated <code>PayinMethodRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayinMethodRequest();

            if (data.hasOwnProperty('payin_method')) {
                obj['payin_method'] = PayinMethod.constructFromObject(data['payin_method']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Model/PayinMethod} payin_method
 */
PayinMethodRequest.prototype['payin_method'] = undefined;






export default PayinMethodRequest;

