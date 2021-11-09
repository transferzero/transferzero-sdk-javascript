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
import Transaction from './Transaction';
import Webhook from './Webhook';

/**
 * The TransactionWebhook model module.
 * @module Model/TransactionWebhook
 * @version 1.17.1
 */
class TransactionWebhook {
    /**
     * Constructs a new <code>TransactionWebhook</code>.
     * @alias module:Model/TransactionWebhook
     * @extends module:Model/Webhook
     * @implements module:Model/Webhook
     * @param webhook {} The ID of the webhook that was used to send out this callback
     * @param event {} The event that triggered this webhook
     * @param _object {} 
     */
    constructor(webhook, event, _object) { 
        Webhook.initialize(this, webhook, event, _object);
        TransactionWebhook.initialize(this, webhook, event, _object);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, webhook, event, _object) { 
    }

    /**
     * Constructs a <code>TransactionWebhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/TransactionWebhook} obj Optional instance to populate.
     * @return {module:Model/TransactionWebhook} The populated <code>TransactionWebhook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionWebhook();
            Webhook.constructFromObject(data, obj);
            Webhook.constructFromObject(data, obj);

            if (data.hasOwnProperty('object')) {
                obj['object'] = Transaction.constructFromObject(data['object']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Model/Transaction} object
 */
TransactionWebhook.prototype['object'] = undefined;


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




export default TransactionWebhook;

