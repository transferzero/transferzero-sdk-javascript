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
 * The Account model module.
 * @module Model/Account
 * @version 1.16.1
 */
class Account {
    /**
     * Constructs a new <code>Account</code>.
     * @alias module:Model/Account
     */
    constructor() { 
        
        Account.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Account</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/Account} obj Optional instance to populate.
     * @return {module:Model/Account} The populated <code>Account</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Account();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The account balance for the given currency
 * @member {Number} amount
 */
Account.prototype['amount'] = undefined;

/**
 * The currency of this balance
 * @member {String} currency
 */
Account.prototype['currency'] = undefined;






export default Account;

