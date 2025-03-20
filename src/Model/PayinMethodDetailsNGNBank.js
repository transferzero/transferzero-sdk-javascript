/**
 * TransferZero API
 * Reference documentation for the TransferZero API V1
 *
 * The version of the OpenAPI document: 1.0
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
 * @version 1.36.7
 */
class PayinMethodDetailsNGNBank {
    /**
     * Constructs a new <code>PayinMethodDetailsNGNBank</code>.
     * &#x60;&#x60;&#x60;JSON   \&quot;details\&quot;: {     \&quot;phone_number\&quot;: \&quot;+2347087661211\&quot;   } &#x60;&#x60;&#x60;
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

            if (data.hasOwnProperty('phone_number')) {
                obj['phone_number'] = ApiClient.convertToType(data['phone_number'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Sender's phone number
 * @member {String} phone_number
 */
PayinMethodDetailsNGNBank.prototype['phone_number'] = undefined;






export default PayinMethodDetailsNGNBank;

