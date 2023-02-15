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
import BankAccountDetails from './BankAccountDetails';
import PaginationMeta from './PaginationMeta';

/**
 * The BankAccountDetailsResponse model module.
 * @module Model/BankAccountDetailsResponse
 * @version 1.25.0
 */
class BankAccountDetailsResponse {
    /**
     * Constructs a new <code>BankAccountDetailsResponse</code>.
     * @alias module:Model/BankAccountDetailsResponse
     */
    constructor() { 
        
        BankAccountDetailsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BankAccountDetailsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/BankAccountDetailsResponse} obj Optional instance to populate.
     * @return {module:Model/BankAccountDetailsResponse} The populated <code>BankAccountDetailsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BankAccountDetailsResponse();

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], [BankAccountDetails]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = PaginationMeta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:Model/BankAccountDetails>} object
 */
BankAccountDetailsResponse.prototype['object'] = undefined;

/**
 * @member {module:Model/PaginationMeta} meta
 */
BankAccountDetailsResponse.prototype['meta'] = undefined;






export default BankAccountDetailsResponse;
