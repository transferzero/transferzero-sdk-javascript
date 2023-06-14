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

/**
 * The PayinMethodDetailsBTC model module.
 * @module Model/PayinMethodDetailsBTC
 * @version 1.27.6
 */
class PayinMethodDetailsBTC {
    /**
     * Constructs a new <code>PayinMethodDetailsBTC</code>.
     * &#x60;&#x60;&#x60;JSON   \&quot;details\&quot;: {     \&quot;refund_address\&quot;: \&quot;n4VQ5YdHf7hLQ2gWQYYrcxoE5B7nWuDFNF\&quot;   } &#x60;&#x60;&#x60;
     * @alias module:Model/PayinMethodDetailsBTC
     */
    constructor() { 
        
        PayinMethodDetailsBTC.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PayinMethodDetailsBTC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayinMethodDetailsBTC} obj Optional instance to populate.
     * @return {module:Model/PayinMethodDetailsBTC} The populated <code>PayinMethodDetailsBTC</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayinMethodDetailsBTC();

            if (data.hasOwnProperty('refund_address')) {
                obj['refund_address'] = ApiClient.convertToType(data['refund_address'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Please make sure the refund_address is a valid BTC address belonging to the sender, as that is going to be used in case the transaction has to be refunded.
 * @member {String} refund_address
 */
PayinMethodDetailsBTC.prototype['refund_address'] = undefined;






export default PayinMethodDetailsBTC;

