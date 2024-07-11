/**
 * TransferZero API
 * Reference documentation for the TransferZero API V1
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Currency model module.
 * @module Model/Currency
 * @version 1.36.1
 */
class Currency {
    /**
     * Constructs a new <code>Currency</code>.
     * @alias module:Model/Currency
     */
    constructor() { 
        
        Currency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Currency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/Currency} obj Optional instance to populate.
     * @return {module:Model/Currency} The populated <code>Currency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Currency();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('decimals')) {
                obj['decimals'] = ApiClient.convertToType(data['decimals'], 'Number');
            }
            if (data.hasOwnProperty('subunit_to_unit')) {
                obj['subunit_to_unit'] = ApiClient.convertToType(data['subunit_to_unit'], 'String');
            }
            if (data.hasOwnProperty('primary')) {
                obj['primary'] = ApiClient.convertToType(data['primary'], 'Boolean');
            }
            if (data.hasOwnProperty('min')) {
                obj['min'] = ApiClient.convertToType(data['min'], 'String');
            }
            if (data.hasOwnProperty('max')) {
                obj['max'] = ApiClient.convertToType(data['max'], 'String');
            }
            if (data.hasOwnProperty('usd_equivalent')) {
                obj['usd_equivalent'] = ApiClient.convertToType(data['usd_equivalent'], 'String');
            }
        }
        return obj;
    }


}

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






export default Currency;

