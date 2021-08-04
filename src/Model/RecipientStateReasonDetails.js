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
 * The RecipientStateReasonDetails model module.
 * @module Model/RecipientStateReasonDetails
 * @version 1.15.1
 */
class RecipientStateReasonDetails {
    /**
     * Constructs a new <code>RecipientStateReasonDetails</code>.
     * @alias module:Model/RecipientStateReasonDetails
     */
    constructor() { 
        
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
 * Status code of failed transaction
 * @member {String} code
 */
RecipientStateReasonDetails.prototype['code'] = undefined;

/**
 * Main category of error, it could be paid, unknown, pickupable, temporary_error, recipient_error, sender_error
 * @member {String} category
 */
RecipientStateReasonDetails.prototype['category'] = undefined;

/**
 * Tiered messages
 * @member {Array.<String>} messages
 */
RecipientStateReasonDetails.prototype['messages'] = undefined;

/**
 * Public, human readable, detailed error message
 * @member {String} description
 */
RecipientStateReasonDetails.prototype['description'] = undefined;






export default RecipientStateReasonDetails;

