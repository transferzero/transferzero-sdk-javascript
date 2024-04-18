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
import PayoutMethod from './PayoutMethod';
import PayoutMethodWebhookAllOf from './PayoutMethodWebhookAllOf';
import Webhook from './Webhook';

/**
 * The PayoutMethodWebhook model module.
 * @module Model/PayoutMethodWebhook
 * @version 1.34.5
 */
class PayoutMethodWebhook {
    /**
     * Constructs a new <code>PayoutMethodWebhook</code>.
     * @alias module:Model/PayoutMethodWebhook
     * @implements module:Model/Webhook
     * @implements module:Model/PayoutMethodWebhookAllOf
     * @param webhook {String} The ID of the webhook that was used to send out this callback
     * @param event {String} The event that triggered this webhook
     * @param object {module:Model/PayoutMethod} 
     */
    constructor(webhook, event, object) { 
        Webhook.initialize(this, webhook, event, object);PayoutMethodWebhookAllOf.initialize(this);
        PayoutMethodWebhook.initialize(this, webhook, event, object);
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
     * Constructs a <code>PayoutMethodWebhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodWebhook} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodWebhook} The populated <code>PayoutMethodWebhook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodWebhook();
            Webhook.constructFromObject(data, obj);
            PayoutMethodWebhookAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('webhook')) {
                obj['webhook'] = ApiClient.convertToType(data['webhook'], 'String');
            }
            if (data.hasOwnProperty('event')) {
                obj['event'] = ApiClient.convertToType(data['event'], 'String');
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = PayoutMethod.constructFromObject(data['object']);
            }
        }
        return obj;
    }


}

/**
 * The ID of the webhook that was used to send out this callback
 * @member {String} webhook
 */
PayoutMethodWebhook.prototype['webhook'] = undefined;

/**
 * The event that triggered this webhook
 * @member {String} event
 */
PayoutMethodWebhook.prototype['event'] = undefined;

/**
 * @member {module:Model/PayoutMethod} object
 */
PayoutMethodWebhook.prototype['object'] = undefined;


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
// Implement PayoutMethodWebhookAllOf interface:
/**
 * @member {module:Model/PayoutMethod} object
 */
PayoutMethodWebhookAllOf.prototype['object'] = undefined;




export default PayoutMethodWebhook;

