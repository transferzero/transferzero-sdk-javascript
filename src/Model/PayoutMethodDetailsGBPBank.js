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
 * The PayoutMethodDetailsGBPBank model module.
 * @module Model/PayoutMethodDetailsGBPBank
 * @version 1.23.7
 */
class PayoutMethodDetailsGBPBank {
    /**
     * Constructs a new <code>PayoutMethodDetailsGBPBank</code>.
     * &#x60;&#x60;&#x60;JSON \&quot;details\&quot;: {   \&quot;first_name\&quot;: \&quot;First\&quot;,   \&quot;last_name\&quot;: \&quot;Last\&quot;,   \&quot;bank_name\&quot;: \&quot;Deutsche Bank\&quot;,   \&quot;bank_account\&quot;: \&quot;12345678\&quot;, // Required if IBAN is not present   \&quot;sort_code\&quot;: \&quot;123456\&quot;, // Required if bank_account is present   \&quot;iban\&quot;: \&quot;DE89370400440532013000\&quot;, // Required if no bank_account &amp; sort_code   \&quot;bic\&quot;: \&quot;DEUTDEBBXXX\&quot; // Optional } &#x60;&#x60;&#x60;
     * @alias module:Model/PayoutMethodDetailsGBPBank
     * @param firstName {String} 
     * @param lastName {String} 
     */
    constructor(firstName, lastName) { 
        
        PayoutMethodDetailsGBPBank.initialize(this, firstName, lastName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, lastName) { 
        obj['first_name'] = firstName;
        obj['last_name'] = lastName;
    }

    /**
     * Constructs a <code>PayoutMethodDetailsGBPBank</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodDetailsGBPBank} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodDetailsGBPBank} The populated <code>PayoutMethodDetailsGBPBank</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodDetailsGBPBank();

            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('bank_name')) {
                obj['bank_name'] = ApiClient.convertToType(data['bank_name'], 'String');
            }
            if (data.hasOwnProperty('bank_account')) {
                obj['bank_account'] = ApiClient.convertToType(data['bank_account'], 'String');
            }
            if (data.hasOwnProperty('sort_code')) {
                obj['sort_code'] = ApiClient.convertToType(data['sort_code'], 'String');
            }
            if (data.hasOwnProperty('iban')) {
                obj['iban'] = ApiClient.convertToType(data['iban'], 'String');
            }
            if (data.hasOwnProperty('bic')) {
                obj['bic'] = ApiClient.convertToType(data['bic'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} first_name
 */
PayoutMethodDetailsGBPBank.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
PayoutMethodDetailsGBPBank.prototype['last_name'] = undefined;

/**
 * @member {String} bank_name
 */
PayoutMethodDetailsGBPBank.prototype['bank_name'] = undefined;

/**
 * @member {String} bank_account
 */
PayoutMethodDetailsGBPBank.prototype['bank_account'] = undefined;

/**
 * @member {String} sort_code
 */
PayoutMethodDetailsGBPBank.prototype['sort_code'] = undefined;

/**
 * @member {String} iban
 */
PayoutMethodDetailsGBPBank.prototype['iban'] = undefined;

/**
 * @member {String} bic
 */
PayoutMethodDetailsGBPBank.prototype['bic'] = undefined;






export default PayoutMethodDetailsGBPBank;

