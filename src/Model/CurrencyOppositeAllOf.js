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
 * The CurrencyOppositeAllOf model module.
 * @module Model/CurrencyOppositeAllOf
 * @version 1.4.0
 */
class CurrencyOppositeAllOf {
    /**
     * Constructs a new <code>CurrencyOppositeAllOf</code>.
     * @alias module:Model/CurrencyOppositeAllOf
     */
    constructor() { 
        
        CurrencyOppositeAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CurrencyOppositeAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/CurrencyOppositeAllOf} obj Optional instance to populate.
     * @return {module:Model/CurrencyOppositeAllOf} The populated <code>CurrencyOppositeAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CurrencyOppositeAllOf();

            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'Number');
            }
            if (data.hasOwnProperty('mtm_rate')) {
                obj['mtm_rate'] = ApiClient.convertToType(data['mtm_rate'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The rate of this particular currency with the base one
 * @member {Number} rate
 */
CurrencyOppositeAllOf.prototype['rate'] = undefined;

/**
 * Mark to market rate of this particular currency against the base one with the margin factored in
 * @member {Number} mtm_rate
 */
CurrencyOppositeAllOf.prototype['mtm_rate'] = undefined;






export default CurrencyOppositeAllOf;

