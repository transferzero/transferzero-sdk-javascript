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
import CurrencyOpposite from './CurrencyOpposite';

/**
 * The CurrencyExchange model module.
 * @module Model/CurrencyExchange
 * @version 1.14.1
 */
class CurrencyExchange {
    /**
     * Constructs a new <code>CurrencyExchange</code>.
     * @alias module:Model/CurrencyExchange
     * @extends module:Model/Currency
     * @implements module:Model/Currency
     */
    constructor() { 
        Currency.initialize(this);
        CurrencyExchange.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CurrencyExchange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/CurrencyExchange} obj Optional instance to populate.
     * @return {module:Model/CurrencyExchange} The populated <code>CurrencyExchange</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CurrencyExchange();
            Currency.constructFromObject(data, obj);
            Currency.constructFromObject(data, obj);

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
CurrencyExchange.prototype['opposites'] = undefined;


// Implement Currency interface:
/**
 * The currency code in 3-character alpha ISO 4217 currency format
 * @member {String} code
 */
Currency.prototype['code'] = undefined;
/**
 * Name of currency
 * @member {String} name
 */
Currency.prototype['name'] = undefined;
/**
 * Symbol of currency
 * @member {String} symbol
 */
Currency.prototype['symbol'] = undefined;
/**
 * Number of decimal points
 * @member {Number} decimals
 */
Currency.prototype['decimals'] = undefined;
/**
 * Subunits in Unit (eg. there are 100 cents in 1 US Dollar)
 * @member {String} subunit_to_unit
 */
Currency.prototype['subunit_to_unit'] = undefined;
/**
 * Is this a primary currency?
 * @member {Boolean} primary
 */
Currency.prototype['primary'] = undefined;
/**
 * The minimum amount allowed in a transaction
 * @member {String} min
 */
Currency.prototype['min'] = undefined;
/**
 * The maximum amount allowed in a transaction
 * @member {String} max
 */
Currency.prototype['max'] = undefined;
/**
 * The equivalent of the currency to 1 USD
 * @member {String} usd_equivalent
 */
Currency.prototype['usd_equivalent'] = undefined;




export default CurrencyExchange;

