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
 * The PayoutMethodDetailsCADBank model module.
 * @module Model/PayoutMethodDetailsCADBank
 * @version 1.36.4
 */
class PayoutMethodDetailsCADBank {
    /**
     * Constructs a new <code>PayoutMethodDetailsCADBank</code>.
     * &#x60;&#x60;&#x60;JSON \&quot;details\&quot;: {   \&quot;first_name\&quot;: \&quot;First\&quot;,   \&quot;last_name\&quot;: \&quot;Last\&quot;,   \&quot;bank_account\&quot;: \&quot;123456789\&quot;,   \&quot;bank_code\&quot;: \&quot;003\&quot;,   \&quot;branch_code\&quot;: \&quot;12345\&quot; } &#x60;&#x60;&#x60; See [CAD Bank](https://docs.transferzero.com/docs/payout-details/#cadbank) documentation for the bank_code list
     * @alias module:Model/PayoutMethodDetailsCADBank
     * @param firstName {String} 
     * @param lastName {String} 
     * @param bankAccount {String} 
     * @param bankCode {String} 
     * @param branchCode {String} 
     */
    constructor(firstName, lastName, bankAccount, bankCode, branchCode) { 
        
        PayoutMethodDetailsCADBank.initialize(this, firstName, lastName, bankAccount, bankCode, branchCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, lastName, bankAccount, bankCode, branchCode) { 
        obj['first_name'] = firstName;
        obj['last_name'] = lastName;
        obj['bank_account'] = bankAccount;
        obj['bank_code'] = bankCode;
        obj['branch_code'] = branchCode;
    }

    /**
     * Constructs a <code>PayoutMethodDetailsCADBank</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodDetailsCADBank} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodDetailsCADBank} The populated <code>PayoutMethodDetailsCADBank</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodDetailsCADBank();

            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('bank_account')) {
                obj['bank_account'] = ApiClient.convertToType(data['bank_account'], 'String');
            }
            if (data.hasOwnProperty('bank_code')) {
                obj['bank_code'] = ApiClient.convertToType(data['bank_code'], 'String');
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
PayoutMethodDetailsCADBank.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
PayoutMethodDetailsCADBank.prototype['last_name'] = undefined;

/**
 * @member {String} bank_account
 */
PayoutMethodDetailsCADBank.prototype['bank_account'] = undefined;

/**
 * @member {String} bank_code
 */
PayoutMethodDetailsCADBank.prototype['bank_code'] = undefined;

/**
 * @member {String} branch_code
 */
PayoutMethodDetailsCADBank.prototype['branch_code'] = undefined;

/**
 * Date of birth of recipient
 * @member {Date} birth_date
 */
PayoutMethodDetailsCADBank.prototype['birth_date'] = undefined;






export default PayoutMethodDetailsCADBank;

