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
import PayinMethodDetails from './PayinMethodDetails';

/**
 * The PayinMethod model module.
 * @module Model/PayinMethod
 * @version 1.2.0
 */
class PayinMethod {
    /**
     * Constructs a new <code>PayinMethod</code>.
     * This describes the specific details on how the funds should be collected from the sender.
     * @alias module:Model/PayinMethod
     */
    constructor() { 
        
        PayinMethod.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PayinMethod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayinMethod} obj Optional instance to populate.
     * @return {module:Model/PayinMethod} The populated <code>PayinMethod</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayinMethod();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('in_details')) {
                obj['in_details'] = PayinMethodDetails.constructFromObject(data['in_details']);
            }
            if (data.hasOwnProperty('out_details')) {
                obj['out_details'] = ApiClient.convertToType(data['out_details'], Object);
            }
            if (data.hasOwnProperty('instructions')) {
                obj['instructions'] = ApiClient.convertToType(data['instructions'], Object);
            }
            if (data.hasOwnProperty('provider')) {
                obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Describes how the payment should be requested from the user.  Possible values: - `NGN::Bank`: NGN card collection requests - `GHS::Mobile`: GHS mobile collections - `TZS::Mobile`: TZS mobile collections - `UGX::Mobile`: UGX mobile collections 
 * @member {String} type
 */
PayinMethod.prototype['type'] = undefined;

/**
 * @member {module:Model/PayinMethodDetails} in_details
 */
PayinMethod.prototype['in_details'] = undefined;

/**
 * This will contain the description on where to pay the funds. Please see the [Collections from Senders](https://github.com/transferzero/api-documentation/blob/master/additional-features.md#collections-from-senders) in the API documentation on what to expect here.
 * @member {Object} out_details
 */
PayinMethod.prototype['out_details'] = undefined;

/**
 * This will contain the instructions on how to pay the funds. Please see the [Collections from Senders](https://github.com/transferzero/api-documentation/blob/master/additional-features.md#collections-from-senders) in the API documentation on what to expect here.
 * @member {Object} instructions
 */
PayinMethod.prototype['instructions'] = undefined;

/**
 * Describes which provider to use for collection. Please see the [Collections from Senders](https://github.com/transferzero/api-documentation/blob/master/additional-features.md#collections-from-senders) in the API documentation on the valid values
 * @member {String} provider
 */
PayinMethod.prototype['provider'] = undefined;






export default PayinMethod;

