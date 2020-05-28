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
 * The AccountValidationError model module.
 * @module Model/AccountValidationError
 * @version 1.7.0
 */
class AccountValidationError {
    /**
     * Constructs a new <code>AccountValidationError</code>.
     * Describes the error message on an unsuccessful match
     * @alias module:Model/AccountValidationError
     */
    constructor() { 
        
        AccountValidationError.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccountValidationError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/AccountValidationError} obj Optional instance to populate.
     * @return {module:Model/AccountValidationError} The populated <code>AccountValidationError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountValidationError();

            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} error
 */
AccountValidationError.prototype['error'] = undefined;






export default AccountValidationError;

