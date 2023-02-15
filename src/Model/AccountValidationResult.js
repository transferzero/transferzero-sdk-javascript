/**
 * BitPesa Private API
 * API specification used for internal BitPesa endpoints
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
 * The AccountValidationResult model module.
 * @module Model/AccountValidationResult
 * @version 1.25.0
 */
class AccountValidationResult {
    /**
     * Constructs a new <code>AccountValidationResult</code>.
     * Describes the account holder name on a successful match
     * @alias module:Model/AccountValidationResult
     */
    constructor() { 
        
        AccountValidationResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccountValidationResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/AccountValidationResult} obj Optional instance to populate.
     * @return {module:Model/AccountValidationResult} The populated <code>AccountValidationResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountValidationResult();

            if (data.hasOwnProperty('account_name')) {
                obj['account_name'] = ApiClient.convertToType(data['account_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} account_name
 */
AccountValidationResult.prototype['account_name'] = undefined;






export default AccountValidationResult;

