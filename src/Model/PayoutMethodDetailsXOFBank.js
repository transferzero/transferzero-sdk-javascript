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
 * The PayoutMethodDetailsXOFBank model module.
 * @module Model/PayoutMethodDetailsXOFBank
 * @version 1.3.0
 */
class PayoutMethodDetailsXOFBank {
    /**
     * Constructs a new <code>PayoutMethodDetailsXOFBank</code>.
     * &#x60;&#x60;&#x60;JSON \&quot;details\&quot;: {   \&quot;first_name\&quot;: \&quot;First\&quot;,   \&quot;last_name\&quot;: \&quot;Last\&quot;,   \&quot;bank_account\&quot;: \&quot;0987654321\&quot;,   \&quot;bank_name\&quot;: \&quot;BRM\&quot;,   \&quot;bank_country\&quot;: \&quot;SN\&quot; # ISO country code for Senegal } &#x60;&#x60;&#x60; *** Currently in Beta phase ***
     * @alias module:Model/PayoutMethodDetailsXOFBank
     * @param firstName {String} 
     * @param lastName {String} 
     * @param bankAccount {String} 
     * @param bankName {String} 
     * @param bankCountry {String} 
     */
    constructor(firstName, lastName, bankAccount, bankName, bankCountry) { 
        
        PayoutMethodDetailsXOFBank.initialize(this, firstName, lastName, bankAccount, bankName, bankCountry);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, lastName, bankAccount, bankName, bankCountry) { 
        obj['first_name'] = firstName;
        obj['last_name'] = lastName;
        obj['bank_account'] = bankAccount;
        obj['bank_name'] = bankName;
        obj['bank_country'] = bankCountry;
    }

    /**
     * Constructs a <code>PayoutMethodDetailsXOFBank</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodDetailsXOFBank} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodDetailsXOFBank} The populated <code>PayoutMethodDetailsXOFBank</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodDetailsXOFBank();

            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('bank_account')) {
                obj['bank_account'] = ApiClient.convertToType(data['bank_account'], 'String');
            }
            if (data.hasOwnProperty('bank_name')) {
                obj['bank_name'] = ApiClient.convertToType(data['bank_name'], 'String');
            }
            if (data.hasOwnProperty('bank_country')) {
                obj['bank_country'] = ApiClient.convertToType(data['bank_country'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} first_name
 */
PayoutMethodDetailsXOFBank.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
PayoutMethodDetailsXOFBank.prototype['last_name'] = undefined;

/**
 * @member {String} bank_account
 */
PayoutMethodDetailsXOFBank.prototype['bank_account'] = undefined;

/**
 * @member {String} bank_name
 */
PayoutMethodDetailsXOFBank.prototype['bank_name'] = undefined;

/**
 * @member {String} bank_country
 */
PayoutMethodDetailsXOFBank.prototype['bank_country'] = undefined;






export default PayoutMethodDetailsXOFBank;

