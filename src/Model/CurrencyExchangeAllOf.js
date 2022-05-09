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
import CurrencyOpposite from './CurrencyOpposite';

/**
 * The CurrencyExchangeAllOf model module.
 * @module Model/CurrencyExchangeAllOf
 * @version 1.19.2
 */
class CurrencyExchangeAllOf {
    /**
     * Constructs a new <code>CurrencyExchangeAllOf</code>.
     * @alias module:Model/CurrencyExchangeAllOf
     */
    constructor() { 
        
        CurrencyExchangeAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CurrencyExchangeAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/CurrencyExchangeAllOf} obj Optional instance to populate.
     * @return {module:Model/CurrencyExchangeAllOf} The populated <code>CurrencyExchangeAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CurrencyExchangeAllOf();

            if (data.hasOwnProperty('opposites')) {
                obj['opposites'] = ApiClient.convertToType(data['opposites'], [CurrencyOpposite]);
            }
        }
        return obj;
    }


}

/**
 * Lists the currencies where you can exchange from this one
 * @member {Array.<module:Model/CurrencyOpposite>} opposites
 */
CurrencyExchangeAllOf.prototype['opposites'] = undefined;






export default CurrencyExchangeAllOf;

