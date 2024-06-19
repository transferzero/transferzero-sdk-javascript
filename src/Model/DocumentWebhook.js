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
import Document from './Document';
import DocumentWebhookAllOf from './DocumentWebhookAllOf';
import Webhook from './Webhook';

/**
 * The DocumentWebhook model module.
 * @module Model/DocumentWebhook
 * @version 1.36.0
 */
class DocumentWebhook {
    /**
     * Constructs a new <code>DocumentWebhook</code>.
     * @alias module:Model/DocumentWebhook
     * @implements module:Model/Webhook
     * @implements module:Model/DocumentWebhookAllOf
     * @param webhook {String} The ID of the webhook that was used to send out this callback
     * @param event {String} The event that triggered this webhook
     * @param object {module:Model/Document} 
     */
    constructor(webhook, event, object) { 
        Webhook.initialize(this, webhook, event, object);DocumentWebhookAllOf.initialize(this);
        DocumentWebhook.initialize(this, webhook, event, object);
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
     * Constructs a <code>DocumentWebhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/DocumentWebhook} obj Optional instance to populate.
     * @return {module:Model/DocumentWebhook} The populated <code>DocumentWebhook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocumentWebhook();
            Webhook.constructFromObject(data, obj);
            DocumentWebhookAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('webhook')) {
                obj['webhook'] = ApiClient.convertToType(data['webhook'], 'String');
            }
            if (data.hasOwnProperty('event')) {
                obj['event'] = ApiClient.convertToType(data['event'], 'String');
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = Document.constructFromObject(data['object']);
            }
        }
        return obj;
    }


}

/**
 * The ID of the webhook that was used to send out this callback
 * @member {String} webhook
 */
DocumentWebhook.prototype['webhook'] = undefined;

/**
 * The event that triggered this webhook
 * @member {String} event
 */
DocumentWebhook.prototype['event'] = undefined;

/**
 * @member {module:Model/Document} object
 */
DocumentWebhook.prototype['object'] = undefined;


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
// Implement DocumentWebhookAllOf interface:
/**
 * @member {module:Model/Document} object
 */
DocumentWebhookAllOf.prototype['object'] = undefined;




export default DocumentWebhook;

