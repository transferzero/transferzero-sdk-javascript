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
import PaymentMethod from './PaymentMethod';

/**
 * The PaymentMethodOppositeAllOf model module.
 * @module Model/PaymentMethodOppositeAllOf
 * @version 1.27.0
 */
class PaymentMethodOppositeAllOf {
    /**
     * Constructs a new <code>PaymentMethodOppositeAllOf</code>.
     * @alias module:Model/PaymentMethodOppositeAllOf
     */
    constructor() { 
        
        PaymentMethodOppositeAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaymentMethodOppositeAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PaymentMethodOppositeAllOf} obj Optional instance to populate.
     * @return {module:Model/PaymentMethodOppositeAllOf} The populated <code>PaymentMethodOppositeAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentMethodOppositeAllOf();

            if (data.hasOwnProperty('opposites')) {
                obj['opposites'] = ApiClient.convertToType(data['opposites'], [PaymentMethod]);
            }
        }
        return obj;
    }


}

/**
 * List of all providers that can be used in conjunction with the main provider
 * @member {Array.<module:Model/PaymentMethod>} opposites
 */
PaymentMethodOppositeAllOf.prototype['opposites'] = undefined;






export default PaymentMethodOppositeAllOf;
