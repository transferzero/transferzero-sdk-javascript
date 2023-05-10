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
 * The PayoutMethodDetailsNZDBank model module.
 * @module Model/PayoutMethodDetailsNZDBank
 * @version 1.27.4
 */
class PayoutMethodDetailsNZDBank {
    /**
     * Constructs a new <code>PayoutMethodDetailsNZDBank</code>.
     * &#x60;&#x60;&#x60;JSON \&quot;details\&quot;: {   \&quot;first_name\&quot;: \&quot;First\&quot;,   \&quot;last_name\&quot;: \&quot;Last\&quot;,   \&quot;bank_account\&quot;: \&quot;1212341234567123\&quot;,   \&quot;bank_name\&quot;: \&quot;ASB Bank\&quot; } &#x60;&#x60;&#x60;  See [NZD Bank](https://docs.transferzero.com/docs/payout-details/#nzdbank) documentation for the bank_name list
     * @alias module:Model/PayoutMethodDetailsNZDBank
     * @param firstName {String} 
     * @param lastName {String} 
     * @param bankAccount {String} 
     * @param bankName {String} 
     */
    constructor(firstName, lastName, bankAccount, bankName) { 
        
        PayoutMethodDetailsNZDBank.initialize(this, firstName, lastName, bankAccount, bankName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, lastName, bankAccount, bankName) { 
        obj['first_name'] = firstName;
        obj['last_name'] = lastName;
        obj['bank_account'] = bankAccount;
        obj['bank_name'] = bankName;
    }

    /**
     * Constructs a <code>PayoutMethodDetailsNZDBank</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodDetailsNZDBank} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodDetailsNZDBank} The populated <code>PayoutMethodDetailsNZDBank</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodDetailsNZDBank();

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
        }
        return obj;
    }


}

/**
 * @member {String} first_name
 */
PayoutMethodDetailsNZDBank.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
PayoutMethodDetailsNZDBank.prototype['last_name'] = undefined;

/**
 * @member {String} bank_account
 */
PayoutMethodDetailsNZDBank.prototype['bank_account'] = undefined;

/**
 * @member {String} bank_name
 */
PayoutMethodDetailsNZDBank.prototype['bank_name'] = undefined;






export default PayoutMethodDetailsNZDBank;

