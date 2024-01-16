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
 * The Webhook model module.
 * @module Model/Webhook
 * @version 1.33.2
 */
class Webhook {
    /**
     * Constructs a new <code>Webhook</code>.
     * Whenever objects in the TransferZero API change state, we can optionally send the changed details to a pre-registered webhook address. Webhooks can be created either using the [developer portal](https://developers.transferzero.com), or using the [TransferZero API](#operations-tag-Webhooks).  Whenever possible we prefer using webhooks to listen on events (for example when a transaction has been paid out) instead of polling the status, and we expect implementations fully utilising webhooks.  Webhooks will always generate a &#x60;POST&#x60; request to the specified endpoint, and will also include the same authentication headers as described in the [authentication documentation](https://docs.transferzero.com/docs/authentication), so their validity can be verified on the receiver end.
     * @alias module:Model/Webhook
     * @param webhook {String} The ID of the webhook that was used to send out this callback
     * @param event {String} The event that triggered this webhook
     * @param _object {Object} The returned object
     */
    constructor(webhook, event, _object) { 
        
        Webhook.initialize(this, webhook, event, _object);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, webhook, event, _object) { 
        obj['webhook'] = webhook;
        obj['event'] = event;
        obj['object'] = _object;
    }

    /**
     * Constructs a <code>Webhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/Webhook} obj Optional instance to populate.
     * @return {module:Model/Webhook} The populated <code>Webhook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Webhook();

            if (data.hasOwnProperty('webhook')) {
                obj['webhook'] = ApiClient.convertToType(data['webhook'], 'String');
            }
            if (data.hasOwnProperty('event')) {
                obj['event'] = ApiClient.convertToType(data['event'], 'String');
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], Object);
            }
        }
        return obj;
    }


}

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






export default Webhook;

