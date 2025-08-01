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
import ValidationErrorDescription from './ValidationErrorDescription';

/**
 * The WebhookDefinition model module.
 * @module Model/WebhookDefinition
 * @version 1.37.1
 */
class WebhookDefinition {
    /**
     * Constructs a new <code>WebhookDefinition</code>.
     * Object that holds where to send webhooks, and what events should it be triggered with
     * @alias module:Model/WebhookDefinition
     * @param url {String} The URL to receive the webhook
     * @param events {Array.<String>} A list of events to subscribe to
     */
    constructor(url, events) { 
        
        WebhookDefinition.initialize(this, url, events);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, url, events) { 
        obj['url'] = url;
        obj['events'] = events;
    }

    /**
     * Constructs a <code>WebhookDefinition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/WebhookDefinition} obj Optional instance to populate.
     * @return {module:Model/WebhookDefinition} The populated <code>WebhookDefinition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookDefinition();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], {'String': [ValidationErrorDescription]});
            }
        }
        return obj;
    }


}

/**
 * The URL to receive the webhook
 * @member {String} url
 */
WebhookDefinition.prototype['url'] = undefined;

/**
 * A list of events to subscribe to
 * @member {Array.<String>} events
 */
WebhookDefinition.prototype['events'] = undefined;

/**
 * @member {Object} metadata
 */
WebhookDefinition.prototype['metadata'] = undefined;

/**
 * The ID of the webhook
 * @member {String} id
 */
WebhookDefinition.prototype['id'] = undefined;

/**
 * The fields that have some problems and don't pass validation
 * @member {Object.<String, Array.<module:Model/ValidationErrorDescription>>} errors
 */
WebhookDefinition.prototype['errors'] = undefined;






export default WebhookDefinition;

