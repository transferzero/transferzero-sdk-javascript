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
import StateReasonDetails from './StateReasonDetails';

/**
 * The RecipientStateReasonDetails model module.
 * @module Model/RecipientStateReasonDetails
 * @version 1.30.3
 */
class RecipientStateReasonDetails {
    /**
     * Constructs a new <code>RecipientStateReasonDetails</code>.
     * @alias module:Model/RecipientStateReasonDetails
     * @implements module:Model/StateReasonDetails
     */
    constructor() { 
        StateReasonDetails.initialize(this);
        RecipientStateReasonDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RecipientStateReasonDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/RecipientStateReasonDetails} obj Optional instance to populate.
     * @return {module:Model/RecipientStateReasonDetails} The populated <code>RecipientStateReasonDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RecipientStateReasonDetails();
            StateReasonDetails.constructFromObject(data, obj);

        }
        return obj;
    }


}


// Implement StateReasonDetails interface:
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




export default RecipientStateReasonDetails;

