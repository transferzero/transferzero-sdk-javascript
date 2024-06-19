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
import Recipient from './Recipient';

/**
 * The RecipientWebhookAllOf model module.
 * @module Model/RecipientWebhookAllOf
 * @version 1.36.0
 */
class RecipientWebhookAllOf {
    /**
     * Constructs a new <code>RecipientWebhookAllOf</code>.
     * @alias module:Model/RecipientWebhookAllOf
     */
    constructor() { 
        
        RecipientWebhookAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RecipientWebhookAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/RecipientWebhookAllOf} obj Optional instance to populate.
     * @return {module:Model/RecipientWebhookAllOf} The populated <code>RecipientWebhookAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RecipientWebhookAllOf();

            if (data.hasOwnProperty('object')) {
                obj['object'] = Recipient.constructFromObject(data['object']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Model/Recipient} object
 */
RecipientWebhookAllOf.prototype['object'] = undefined;






export default RecipientWebhookAllOf;

