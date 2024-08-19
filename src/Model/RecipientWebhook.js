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
import RecipientWebhookAllOf from './RecipientWebhookAllOf';
import Webhook from './Webhook';

/**
 * The RecipientWebhook model module.
 * @module Model/RecipientWebhook
 * @version 1.36.3
 */
class RecipientWebhook {
    /**
     * Constructs a new <code>RecipientWebhook</code>.
     * @alias module:Model/RecipientWebhook
     * @implements module:Model/Webhook
     * @implements module:Model/RecipientWebhookAllOf
     * @param webhook {String} The ID of the webhook that was used to send out this callback
     * @param event {String} The event that triggered this webhook
     * @param object {module:Model/Recipient} 
     */
    constructor(webhook, event, object) { 
        Webhook.initialize(this, webhook, event, object);RecipientWebhookAllOf.initialize(this);
        RecipientWebhook.initialize(this, webhook, event, object);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, webhook, event, object) { 
        obj['webhook'] = webhook;
        obj['event'] = event;
        obj['object'] = object;
    }

    /**
     * Constructs a <code>RecipientWebhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/RecipientWebhook} obj Optional instance to populate.
     * @return {module:Model/RecipientWebhook} The populated <code>RecipientWebhook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RecipientWebhook();
            Webhook.constructFromObject(data, obj);
            RecipientWebhookAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('webhook')) {
                obj['webhook'] = ApiClient.convertToType(data['webhook'], 'String');
            }
            if (data.hasOwnProperty('event')) {
                obj['event'] = ApiClient.convertToType(data['event'], 'String');
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = Recipient.constructFromObject(data['object']);
            }
        }
        return obj;
    }


}

/**
 * The ID of the webhook that was used to send out this callback
 * @member {String} webhook
 */
RecipientWebhook.prototype['webhook'] = undefined;

/**
 * The event that triggered this webhook
 * @member {String} event
 */
RecipientWebhook.prototype['event'] = undefined;

/**
 * @member {module:Model/Recipient} object
 */
RecipientWebhook.prototype['object'] = undefined;


// Implement Webhook interface:
/**
 * The ID of the webhook that was used to send out this callback
 * @member {String} webhook
 */
Webhook.prototype['webhook'] = undefined;
/**
 * The event that triggered this webhook
 * @member {String} event
 */
Webhook.prototype['event'] = undefined;
/**
 * The returned object
 * @member {Object} object
 */
Webhook.prototype['object'] = undefined;
// Implement RecipientWebhookAllOf interface:
/**
 * @member {module:Model/Recipient} object
 */
RecipientWebhookAllOf.prototype['object'] = undefined;




export default RecipientWebhook;

