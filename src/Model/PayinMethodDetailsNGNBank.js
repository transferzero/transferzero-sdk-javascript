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
 * The PayinMethodDetailsNGNBank model module.
 * @module Model/PayinMethodDetailsNGNBank
 * @version 1.31.0
 */
class PayinMethodDetailsNGNBank {
    /**
     * Constructs a new <code>PayinMethodDetailsNGNBank</code>.
     * &#x60;&#x60;&#x60;JSON   \&quot;details\&quot;: {     \&quot;redirect_url\&quot;: \&quot;http://redirect.back.to\&quot;   } &#x60;&#x60;&#x60;
     * @alias module:Model/PayinMethodDetailsNGNBank
     */
    constructor() { 
        
        PayinMethodDetailsNGNBank.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PayinMethodDetailsNGNBank</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayinMethodDetailsNGNBank} obj Optional instance to populate.
     * @return {module:Model/PayinMethodDetailsNGNBank} The populated <code>PayinMethodDetailsNGNBank</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayinMethodDetailsNGNBank();

            if (data.hasOwnProperty('payment_method')) {
                obj['payment_method'] = ApiClient.convertToType(data['payment_method'], 'String');
            }
            if (data.hasOwnProperty('redirect_url')) {
                obj['redirect_url'] = ApiClient.convertToType(data['redirect_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The payment method which the sender will use to make the payments. Options are `bank`, `card` or you can leave empty to support both.
 * @member {String} payment_method
 */
PayinMethodDetailsNGNBank.prototype['payment_method'] = undefined;

/**
 * This is where the sender should be redirected back when the payment has been finished
 * @member {String} redirect_url
 */
PayinMethodDetailsNGNBank.prototype['redirect_url'] = undefined;






export default PayinMethodDetailsNGNBank;

