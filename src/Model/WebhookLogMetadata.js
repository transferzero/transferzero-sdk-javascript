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
import WebhookDefinition from './WebhookDefinition';
import WebhookLogMetadataRequest from './WebhookLogMetadataRequest';
import WebhookLogMetadataResponse from './WebhookLogMetadataResponse';

/**
 * The WebhookLogMetadata model module.
 * @module Model/WebhookLogMetadata
 * @version 1.16.0
 */
class WebhookLogMetadata {
    /**
     * Constructs a new <code>WebhookLogMetadata</code>.
     * @alias module:Model/WebhookLogMetadata
     */
    constructor() { 
        
        WebhookLogMetadata.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookLogMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/WebhookLogMetadata} obj Optional instance to populate.
     * @return {module:Model/WebhookLogMetadata} The populated <code>WebhookLogMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookLogMetadata();

            if (data.hasOwnProperty('params')) {
                obj['params'] = WebhookDefinition.constructFromObject(data['params']);
            }
            if (data.hasOwnProperty('event')) {
                obj['event'] = ApiClient.convertToType(data['event'], 'String');
            }
            if (data.hasOwnProperty('instance_id')) {
                obj['instance_id'] = ApiClient.convertToType(data['instance_id'], 'String');
            }
            if (data.hasOwnProperty('instance_type')) {
                obj['instance_type'] = ApiClient.convertToType(data['instance_type'], 'String');
            }
            if (data.hasOwnProperty('attempt_id')) {
                obj['attempt_id'] = ApiClient.convertToType(data['attempt_id'], 'String');
            }
            if (data.hasOwnProperty('tries')) {
                obj['tries'] = ApiClient.convertToType(data['tries'], 'Number');
            }
            if (data.hasOwnProperty('request')) {
                obj['request'] = WebhookLogMetadataRequest.constructFromObject(data['request']);
            }
            if (data.hasOwnProperty('response')) {
                obj['response'] = WebhookLogMetadataResponse.constructFromObject(data['response']);
            }
            if (data.hasOwnProperty('app_id')) {
                obj['app_id'] = ApiClient.convertToType(data['app_id'], 'String');
            }
            if (data.hasOwnProperty('api_key_id')) {
                obj['api_key_id'] = ApiClient.convertToType(data['api_key_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:Model/WebhookDefinition} params
 */
WebhookLogMetadata.prototype['params'] = undefined;

/**
 * Specific event that triggered the webhook
 * @member {String} event
 */
WebhookLogMetadata.prototype['event'] = undefined;

/**
 * Instance ID of the webhook event
 * @member {String} instance_id
 */
WebhookLogMetadata.prototype['instance_id'] = undefined;

/**
 * Type of instance event
 * @member {String} instance_type
 */
WebhookLogMetadata.prototype['instance_type'] = undefined;

/**
 * Attempt ID
 * @member {String} attempt_id
 */
WebhookLogMetadata.prototype['attempt_id'] = undefined;

/**
 * Number of tries at the point webhook was triggered
 * @member {Number} tries
 */
WebhookLogMetadata.prototype['tries'] = undefined;

/**
 * @member {module:Model/WebhookLogMetadataRequest} request
 */
WebhookLogMetadata.prototype['request'] = undefined;

/**
 * @member {module:Model/WebhookLogMetadataResponse} response
 */
WebhookLogMetadata.prototype['response'] = undefined;

/**
 * ID of app on which webhook event was triggered
 * @member {String} app_id
 */
WebhookLogMetadata.prototype['app_id'] = undefined;

/**
 * ID of API key in use at point of webhook event
 * @member {String} api_key_id
 */
WebhookLogMetadata.prototype['api_key_id'] = undefined;






export default WebhookLogMetadata;

