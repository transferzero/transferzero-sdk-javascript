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
import Account from './Account';
import AccountMeta from './AccountMeta';

/**
 * The AccountResponse model module.
 * @module Model/AccountResponse
 * @version 1.10.0
 */
class AccountResponse {
    /**
     * Constructs a new <code>AccountResponse</code>.
     * @alias module:Model/AccountResponse
     */
    constructor() { 
        
        AccountResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccountResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/AccountResponse} obj Optional instance to populate.
     * @return {module:Model/AccountResponse} The populated <code>AccountResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountResponse();

            if (data.hasOwnProperty('object')) {
                obj['object'] = Account.constructFromObject(data['object']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = AccountMeta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Model/Account} object
 */
AccountResponse.prototype['object'] = undefined;

/**
 * @member {module:Model/AccountMeta} meta
 */
AccountResponse.prototype['meta'] = undefined;






export default AccountResponse;

