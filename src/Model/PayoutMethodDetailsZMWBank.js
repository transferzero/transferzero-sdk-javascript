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
 * The PayoutMethodDetailsZMWBank model module.
 * @module Model/PayoutMethodDetailsZMWBank
 * @version 1.26.0
 */
class PayoutMethodDetailsZMWBank {
    /**
     * Constructs a new <code>PayoutMethodDetailsZMWBank</code>.
     * &#x60;&#x60;&#x60;JSON \&quot;details\&quot;: {   \&quot;first_name\&quot;: \&quot;First\&quot;,   \&quot;last_name\&quot;: \&quot;Last\&quot;,   \&quot;bank_account\&quot;: \&quot;1234567890\&quot;,   \&quot;branch_code\&quot;: \&quot;ZM210003\&quot;, } &#x60;&#x60;&#x60; See [ZMW Bank](https://docs.transferzero.com/docs/payout-details/#zmwbank) documentation for the branch_code list
     * @alias module:Model/PayoutMethodDetailsZMWBank
     * @param firstName {String} 
     * @param lastName {String} 
     * @param bankAccount {String} 
     * @param branchCode {String} 
     */
    constructor(firstName, lastName, bankAccount, branchCode) { 
        
        PayoutMethodDetailsZMWBank.initialize(this, firstName, lastName, bankAccount, branchCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, lastName, bankAccount, branchCode) { 
        obj['first_name'] = firstName;
        obj['last_name'] = lastName;
        obj['bank_account'] = bankAccount;
        obj['branch_code'] = branchCode;
    }

    /**
     * Constructs a <code>PayoutMethodDetailsZMWBank</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodDetailsZMWBank} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodDetailsZMWBank} The populated <code>PayoutMethodDetailsZMWBank</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodDetailsZMWBank();

            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('bank_account')) {
                obj['bank_account'] = ApiClient.convertToType(data['bank_account'], 'String');
            }
            if (data.hasOwnProperty('branch_code')) {
                obj['branch_code'] = ApiClient.convertToType(data['branch_code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} first_name
 */
PayoutMethodDetailsZMWBank.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
PayoutMethodDetailsZMWBank.prototype['last_name'] = undefined;

/**
 * @member {String} bank_account
 */
PayoutMethodDetailsZMWBank.prototype['bank_account'] = undefined;

/**
 * @member {String} branch_code
 */
PayoutMethodDetailsZMWBank.prototype['branch_code'] = undefined;






export default PayoutMethodDetailsZMWBank;

