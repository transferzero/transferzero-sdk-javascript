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
 * The AccountListResponse model module.
 * @module Model/AccountListResponse
 * @version 1.23.0
 */
class AccountListResponse {
    /**
     * Constructs a new <code>AccountListResponse</code>.
     * @alias module:Model/AccountListResponse
     */
    constructor() { 
        
        AccountListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccountListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/AccountListResponse} obj Optional instance to populate.
     * @return {module:Model/AccountListResponse} The populated <code>AccountListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountListResponse();

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], [Account]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = AccountMeta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:Model/Account>} object
 */
AccountListResponse.prototype['object'] = undefined;

/**
 * @member {module:Model/AccountMeta} meta
 */
AccountListResponse.prototype['meta'] = undefined;






export default AccountListResponse;

