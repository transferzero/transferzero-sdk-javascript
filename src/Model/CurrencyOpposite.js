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
 * The CurrencyOpposite model module.
 * @module Model/CurrencyOpposite
 * @version 1.16.0
 */
class CurrencyOpposite {
    /**
     * Constructs a new <code>CurrencyOpposite</code>.
     * @alias module:Model/CurrencyOpposite
     * @extends module:Model/Currency
     * @implements module:Model/Currency
     */
    constructor() { 
        Currency.initialize(this);
        CurrencyOpposite.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CurrencyOpposite</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/CurrencyOpposite} obj Optional instance to populate.
     * @return {module:Model/CurrencyOpposite} The populated <code>CurrencyOpposite</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CurrencyOpposite();
            Currency.constructFromObject(data, obj);
            Currency.constructFromObject(data, obj);

            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'Number');
            }
            if (data.hasOwnProperty('mtm_rate')) {
                obj['mtm_rate'] = ApiClient.convertToType(data['mtm_rate'], 'Number');
            }
            if (data.hasOwnProperty('margin')) {
                obj['margin'] = ApiClient.convertToType(data['margin'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The rate of this particular currency with the base one
 * @member {Number} rate
 */
CurrencyOpposite.prototype['rate'] = undefined;

/**
 * Mark to market rate of this particular currency against the base one with the margin factored in
 * @member {Number} mtm_rate
 */
CurrencyOpposite.prototype['mtm_rate'] = undefined;

/**
 * The margin set for transactions of this particular currency with the base one
 * @member {String} margin
 */
CurrencyOpposite.prototype['margin'] = undefined;


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




export default CurrencyOpposite;

