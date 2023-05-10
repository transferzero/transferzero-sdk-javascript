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
import PaymentMethodOpposite from './PaymentMethodOpposite';

/**
 * The PaymentMethodListResponse model module.
 * @module Model/PaymentMethodListResponse
 * @version 1.27.4
 */
class PaymentMethodListResponse {
    /**
     * Constructs a new <code>PaymentMethodListResponse</code>.
     * @alias module:Model/PaymentMethodListResponse
     */
    constructor() { 
        
        PaymentMethodListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaymentMethodListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PaymentMethodListResponse} obj Optional instance to populate.
     * @return {module:Model/PaymentMethodListResponse} The populated <code>PaymentMethodListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentMethodListResponse();

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], [PaymentMethodOpposite]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:Model/PaymentMethodOpposite>} object
 */
PaymentMethodListResponse.prototype['object'] = undefined;






export default PaymentMethodListResponse;

