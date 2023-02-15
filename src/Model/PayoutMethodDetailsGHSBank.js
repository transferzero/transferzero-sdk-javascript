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
 * The PayoutMethodDetailsGHSBank model module.
 * @module Model/PayoutMethodDetailsGHSBank
 * @version 1.25.0
 */
class PayoutMethodDetailsGHSBank {
    /**
     * Constructs a new <code>PayoutMethodDetailsGHSBank</code>.
     * &#x60;&#x60;&#x60;JSON \&quot;details\&quot;: {   \&quot;first_name\&quot;: \&quot;First\&quot;,   \&quot;last_name\&quot;: \&quot;Last\&quot;,   \&quot;bank_code\&quot;: \&quot;030100\&quot;,   \&quot;bank_account\&quot;: \&quot;123456789\&quot; } &#x60;&#x60;&#x60;  The current banks supported and their bank_codes values are:  - Access Bank: 280100 - Barclays Bank: 030100 - GCB Bank: 040100 - Ecobank: 130100 - First National Bank: 330100 - Heritage Bank: 370100 - Prudential Bank: 180100 - Stanbic Bank: 190100 - Standard Chartered Bank: 020100 - United Bank for Africa: 060100 - Zenith Bank: 120100
     * @alias module:Model/PayoutMethodDetailsGHSBank
     * @param firstName {String} 
     * @param lastName {String} 
     * @param bankCode {String} 
     * @param bankAccount {String} 
     */
    constructor(firstName, lastName, bankCode, bankAccount) { 
        
        PayoutMethodDetailsGHSBank.initialize(this, firstName, lastName, bankCode, bankAccount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, lastName, bankCode, bankAccount) { 
        obj['first_name'] = firstName;
        obj['last_name'] = lastName;
        obj['bank_code'] = bankCode;
        obj['bank_account'] = bankAccount;
    }

    /**
     * Constructs a <code>PayoutMethodDetailsGHSBank</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodDetailsGHSBank} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodDetailsGHSBank} The populated <code>PayoutMethodDetailsGHSBank</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodDetailsGHSBank();

            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('bank_code')) {
                obj['bank_code'] = ApiClient.convertToType(data['bank_code'], 'String');
            }
            if (data.hasOwnProperty('bank_account')) {
                obj['bank_account'] = ApiClient.convertToType(data['bank_account'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} first_name
 */
PayoutMethodDetailsGHSBank.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
PayoutMethodDetailsGHSBank.prototype['last_name'] = undefined;

/**
 * @member {String} bank_code
 */
PayoutMethodDetailsGHSBank.prototype['bank_code'] = undefined;

/**
 * @member {String} bank_account
 */
PayoutMethodDetailsGHSBank.prototype['bank_account'] = undefined;






export default PayoutMethodDetailsGHSBank;

