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
 * The StateReasonDetails model module.
 * @module Model/StateReasonDetails
 * @version 1.33.0
 */
class StateReasonDetails {
    /**
     * Constructs a new <code>StateReasonDetails</code>.
     * @alias module:Model/StateReasonDetails
     */
    constructor() { 
        
        StateReasonDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StateReasonDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/StateReasonDetails} obj Optional instance to populate.
     * @return {module:Model/StateReasonDetails} The populated <code>StateReasonDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StateReasonDetails();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('messages')) {
                obj['messages'] = ApiClient.convertToType(data['messages'], ['String']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Status code of transaction
 * @member {String} code
 */
StateReasonDetails.prototype['code'] = undefined;

/**
 * Main category of status code, it could be paid, unknown, pickupable, temporary_error, recipient_error, sender_error, sender_action_required
 * @member {String} category
 */
StateReasonDetails.prototype['category'] = undefined;

/**
 * Tiered messages
 * @member {Array.<String>} messages
 */
StateReasonDetails.prototype['messages'] = undefined;

/**
 * Public, human readable, detailed error message
 * @member {String} description
 */
StateReasonDetails.prototype['description'] = undefined;






export default StateReasonDetails;

