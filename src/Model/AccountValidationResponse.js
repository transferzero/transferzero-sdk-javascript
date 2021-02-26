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
import AccountValidationError from './AccountValidationError';
import AccountValidationResult from './AccountValidationResult';

/**
 * The AccountValidationResponse model module.
 * @module Model/AccountValidationResponse
 * @version 1.12.2
 */
class AccountValidationResponse {
    /**
     * Constructs a new <code>AccountValidationResponse</code>.
     * @alias module:Model/AccountValidationResponse
     */
    constructor() { 
        
        AccountValidationResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccountValidationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/AccountValidationResponse} obj Optional instance to populate.
     * @return {module:Model/AccountValidationResponse} The populated <code>AccountValidationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountValidationResponse();

            if (data.hasOwnProperty('object')) {
                obj['object'] = AccountValidationResult.constructFromObject(data['object']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = AccountValidationError.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Model/AccountValidationResult} object
 */
AccountValidationResponse.prototype['object'] = undefined;

/**
 * @member {module:Model/AccountValidationError} meta
 */
AccountValidationResponse.prototype['meta'] = undefined;






export default AccountValidationResponse;

