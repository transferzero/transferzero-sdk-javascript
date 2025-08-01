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
 * The PayoutMethodDetailsBWPBank model module.
 * @module Model/PayoutMethodDetailsBWPBank
 * @version 1.37.1
 */
class PayoutMethodDetailsBWPBank {
    /**
     * Constructs a new <code>PayoutMethodDetailsBWPBank</code>.
     * &#x60;&#x60;&#x60;JSON \&quot;details\&quot;: {   \&quot;first_name\&quot;: \&quot;First\&quot;,   \&quot;last_name\&quot;: \&quot;Last\&quot;,   \&quot;bank_name\&quot;: \&quot;Banc ABC\&quot;,   \&quot;bank_account\&quot;: \&quot;12345678912345678\&quot;,   \&quot;branch_code\&quot;: \&quot;550067\&quot;, } &#x60;&#x60;&#x60; See [BWP Bank](https://docs.transferzero.com/docs/payout-details/#bwpbank) documentation for the bank_name &amp; branch_code list
     * @alias module:Model/PayoutMethodDetailsBWPBank
     * @param firstName {String} 
     * @param lastName {String} 
     * @param bankName {String} 
     * @param bankAccount {String} 
     * @param branchCode {String} 
     */
    constructor(firstName, lastName, bankName, bankAccount, branchCode) { 
        
        PayoutMethodDetailsBWPBank.initialize(this, firstName, lastName, bankName, bankAccount, branchCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, lastName, bankName, bankAccount, branchCode) { 
        obj['first_name'] = firstName;
        obj['last_name'] = lastName;
        obj['bank_name'] = bankName;
        obj['bank_account'] = bankAccount;
        obj['branch_code'] = branchCode;
    }

    /**
     * Constructs a <code>PayoutMethodDetailsBWPBank</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodDetailsBWPBank} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodDetailsBWPBank} The populated <code>PayoutMethodDetailsBWPBank</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodDetailsBWPBank();

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
            if (data.hasOwnProperty('branch_code')) {
                obj['branch_code'] = ApiClient.convertToType(data['branch_code'], 'String');
            }
            if (data.hasOwnProperty('birth_date')) {
                obj['birth_date'] = ApiClient.convertToType(data['birth_date'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} first_name
 */
PayoutMethodDetailsBWPBank.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
PayoutMethodDetailsBWPBank.prototype['last_name'] = undefined;

/**
 * @member {String} bank_name
 */
PayoutMethodDetailsBWPBank.prototype['bank_name'] = undefined;

/**
 * @member {String} bank_account
 */
PayoutMethodDetailsBWPBank.prototype['bank_account'] = undefined;

/**
 * @member {String} branch_code
 */
PayoutMethodDetailsBWPBank.prototype['branch_code'] = undefined;

/**
 * Date of birth of recipient
 * @member {Date} birth_date
 */
PayoutMethodDetailsBWPBank.prototype['birth_date'] = undefined;






export default PayoutMethodDetailsBWPBank;

