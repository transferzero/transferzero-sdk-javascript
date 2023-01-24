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
import FieldDescription from './FieldDescription';

/**
 * The PaymentMethod model module.
 * @module Model/PaymentMethod
 * @version 1.23.7
 */
class PaymentMethod {
    /**
     * Constructs a new <code>PaymentMethod</code>.
     * Describes an available payment provider
     * @alias module:Model/PaymentMethod
     */
    constructor() { 
        
        PaymentMethod.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaymentMethod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PaymentMethod} obj Optional instance to populate.
     * @return {module:Model/PaymentMethod} The populated <code>PaymentMethod</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentMethod();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('provider')) {
                obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
            }
            if (data.hasOwnProperty('otc_permitted')) {
                obj['otc_permitted'] = ApiClient.convertToType(data['otc_permitted'], 'Boolean');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], ['String']);
            }
            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
            }
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], {'String': FieldDescription});
            }
        }
        return obj;
    }


}

/**
 * Details currency and type of payment.
 * @member {String} type
 */
PaymentMethod.prototype['type'] = undefined;

/**
 * Identifies the payment provider.
 * @member {String} provider
 */
PaymentMethod.prototype['provider'] = undefined;

/**
 * Are over the counter transactions permitted?
 * @member {Boolean} otc_permitted
 */
PaymentMethod.prototype['otc_permitted'] = undefined;

/**
 * Fields required to make the payment depending on type.
 * @member {Array.<String>} details
 */
PaymentMethod.prototype['details'] = undefined;

/**
 * Boolean revealing whether this is the default payout method. Only present on payout methods
 * @member {Boolean} default
 */
PaymentMethod.prototype['default'] = undefined;

/**
 * The fields needed for payments with this payment method with details on validation requirements
 * @member {Object.<String, module:Model/FieldDescription>} fields
 */
PaymentMethod.prototype['fields'] = undefined;






export default PaymentMethod;

