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
import CurrencyExchange from './CurrencyExchange';

/**
 * The CurrencyExchangeListResponse model module.
 * @module Model/CurrencyExchangeListResponse
 * @version 1.19.0
 */
class CurrencyExchangeListResponse {
    /**
     * Constructs a new <code>CurrencyExchangeListResponse</code>.
     * List of possible currency exchange pairs
     * @alias module:Model/CurrencyExchangeListResponse
     */
    constructor() { 
        
        CurrencyExchangeListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CurrencyExchangeListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/CurrencyExchangeListResponse} obj Optional instance to populate.
     * @return {module:Model/CurrencyExchangeListResponse} The populated <code>CurrencyExchangeListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CurrencyExchangeListResponse();

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], [CurrencyExchange]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:Model/CurrencyExchange>} object
 */
CurrencyExchangeListResponse.prototype['object'] = undefined;






export default CurrencyExchangeListResponse;

