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
import PayoutMethodCountryEnum from './PayoutMethodCountryEnum';

/**
 * The PayoutMethodDetailsUSDBank model module.
 * @module Model/PayoutMethodDetailsUSDBank
 * @version 1.18.2
 */
class PayoutMethodDetailsUSDBank {
    /**
     * Constructs a new <code>PayoutMethodDetailsUSDBank</code>.
     * &#x60;&#x60;&#x60;JSON   \&quot;details\&quot;: {     \&quot;first_name\&quot;: \&quot;Jane\&quot;,     \&quot;last_name\&quot;: \&quot;Doe\&quot;,     \&quot;phone_number\&quot;: \&quot;+2341234567\&quot;,     \&quot;bank_code\&quot;: \&quot;057\&quot;,     \&quot;bank_account\&quot;: \&quot;1234567890\&quot;,     \&quot;country\&quot;: \&quot;NG\&quot;   } &#x60;&#x60;&#x60; See [USD Bank](https://docs.transferzero.com/docs/payout-details/#usdbank) documentation for the bank_code and country lists
     * @alias module:Model/PayoutMethodDetailsUSDBank
     * @param firstName {String} 
     * @param lastName {String} 
     * @param phoneNumber {String} 
     * @param bankCode {String} 
     * @param bankAccount {String} 
     * @param country {module:Model/PayoutMethodCountryEnum} 
     */
    constructor(firstName, lastName, phoneNumber, bankCode, bankAccount, country) { 
        
        PayoutMethodDetailsUSDBank.initialize(this, firstName, lastName, phoneNumber, bankCode, bankAccount, country);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, lastName, phoneNumber, bankCode, bankAccount, country) { 
        obj['first_name'] = firstName;
        obj['last_name'] = lastName;
        obj['phone_number'] = phoneNumber;
        obj['bank_code'] = bankCode;
        obj['bank_account'] = bankAccount;
        obj['country'] = country;
    }

    /**
     * Constructs a <code>PayoutMethodDetailsUSDBank</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodDetailsUSDBank} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodDetailsUSDBank} The populated <code>PayoutMethodDetailsUSDBank</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodDetailsUSDBank();

            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('phone_number')) {
                obj['phone_number'] = ApiClient.convertToType(data['phone_number'], 'String');
            }
            if (data.hasOwnProperty('bank_code')) {
                obj['bank_code'] = ApiClient.convertToType(data['bank_code'], 'String');
            }
            if (data.hasOwnProperty('bank_account')) {
                obj['bank_account'] = ApiClient.convertToType(data['bank_account'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = PayoutMethodCountryEnum.constructFromObject(data['country']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} first_name
 */
PayoutMethodDetailsUSDBank.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
PayoutMethodDetailsUSDBank.prototype['last_name'] = undefined;

/**
 * @member {String} phone_number
 */
PayoutMethodDetailsUSDBank.prototype['phone_number'] = undefined;

/**
 * @member {String} bank_code
 */
PayoutMethodDetailsUSDBank.prototype['bank_code'] = undefined;

/**
 * @member {String} bank_account
 */
PayoutMethodDetailsUSDBank.prototype['bank_account'] = undefined;

/**
 * @member {module:Model/PayoutMethodCountryEnum} country
 */
PayoutMethodDetailsUSDBank.prototype['country'] = undefined;






export default PayoutMethodDetailsUSDBank;

