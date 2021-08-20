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
 * The AccountMeta model module.
 * @module Model/AccountMeta
 * @version 1.16.0
 */
class AccountMeta {
    /**
     * Constructs a new <code>AccountMeta</code>.
     * @alias module:Model/AccountMeta
     */
    constructor() { 
        
        AccountMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccountMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/AccountMeta} obj Optional instance to populate.
     * @return {module:Model/AccountMeta} The populated <code>AccountMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountMeta();

            if (data.hasOwnProperty('negative_balance')) {
                obj['negative_balance'] = ApiClient.convertToType(data['negative_balance'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Indicates whether account balances are permitted to be debited below zero
 * @member {Boolean} negative_balance
 */
AccountMeta.prototype['negative_balance'] = undefined;






export default AccountMeta;

