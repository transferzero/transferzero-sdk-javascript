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
import PayinMethodState from './PayinMethodState';
import PayinMethodUxFlow from './PayinMethodUxFlow';
import StateReasonDetails from './StateReasonDetails';
import ValidationErrorDescription from './ValidationErrorDescription';

/**
 * The PayinMethod model module.
 * @module Model/PayinMethod
 * @version 1.23.3
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
            if (data.hasOwnProperty('ux_flow')) {
                obj['ux_flow'] = PayinMethodUxFlow.constructFromObject(data['ux_flow']);
            }
            if (data.hasOwnProperty('in_details')) {
                obj['in_details'] = PayinMethodDetails.constructFromObject(data['in_details']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = PayinMethodState.constructFromObject(data['state']);
            }
            if (data.hasOwnProperty('state_reason_details')) {
                obj['state_reason_details'] = StateReasonDetails.constructFromObject(data['state_reason_details']);
            }
            if (data.hasOwnProperty('out_details')) {
                obj['out_details'] = ApiClient.convertToType(data['out_details'], Object);
            }
            if (data.hasOwnProperty('instructions')) {
                obj['instructions'] = ApiClient.convertToType(data['instructions'], Object);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], {'String': [ValidationErrorDescription]});
            }
        }
        return obj;
    }


}

/**
 * Describes how the payment should be requested from the sender.  Possible values: - `GHS::Mobile`: GHS mobile collections - `UGX::Mobile`: UGX mobile collections - `XOF::Mobile`: XOF mobile collections - `EUR::Bank`: EUR IBAN collections - `GBP::Bank`: GBP IBAN collections 
 * @member {String} type
 */
PayinMethod.prototype['type'] = undefined;

/**
 * @member {module:Model/PayinMethodUxFlow} ux_flow
 */
PayinMethod.prototype['ux_flow'] = undefined;

/**
 * @member {module:Model/PayinMethodDetails} in_details
 */
PayinMethod.prototype['in_details'] = undefined;

/**
 * @member {String} id
 */
PayinMethod.prototype['id'] = undefined;

/**
 * @member {module:Model/PayinMethodState} state
 */
PayinMethod.prototype['state'] = undefined;

/**
 * @member {module:Model/StateReasonDetails} state_reason_details
 */
PayinMethod.prototype['state_reason_details'] = undefined;

/**
 * This will contain the description on where to pay the funds. Please see the [Collections Details](https://docs.transferzero.com/docs/collection-details) in the API documentation on what to expect here.
 * @member {Object} out_details
 */
PayinMethod.prototype['out_details'] = undefined;

/**
 * This will contain the instructions on how to pay the funds. Please see the [Collections Details](https://docs.transferzero.com/docs/collection-details) in the API documentation on what to expect here.
 * @member {Object} instructions
 */
PayinMethod.prototype['instructions'] = undefined;

/**
 * The fields that have some problems and don't pass validation
 * @member {Object.<String, Array.<module:Model/ValidationErrorDescription>>} errors
 */
PayinMethod.prototype['errors'] = undefined;






export default PayinMethod;

