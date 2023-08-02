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
import Currency from './Currency';

/**
 * The CurrencyListResponse model module.
 * @module Model/CurrencyListResponse
 * @version 1.29.0
 */
class CurrencyListResponse {
    /**
     * Constructs a new <code>CurrencyListResponse</code>.
     * List of possible currencies
     * @alias module:Model/CurrencyListResponse
     */
    constructor() { 
        
        CurrencyListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CurrencyListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/CurrencyListResponse} obj Optional instance to populate.
     * @return {module:Model/CurrencyListResponse} The populated <code>CurrencyListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CurrencyListResponse();

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], [Currency]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:Model/Currency>} object
 */
CurrencyListResponse.prototype['object'] = undefined;






export default CurrencyListResponse;

