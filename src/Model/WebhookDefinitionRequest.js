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
import WebhookDefinition from './WebhookDefinition';

/**
 * The WebhookDefinitionRequest model module.
 * @module Model/WebhookDefinitionRequest
 * @version 1.36.1
 */
class WebhookDefinitionRequest {
    /**
     * Constructs a new <code>WebhookDefinitionRequest</code>.
     * @alias module:Model/WebhookDefinitionRequest
     */
    constructor() { 
        
        WebhookDefinitionRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookDefinitionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/WebhookDefinitionRequest} obj Optional instance to populate.
     * @return {module:Model/WebhookDefinitionRequest} The populated <code>WebhookDefinitionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookDefinitionRequest();

            if (data.hasOwnProperty('webhook')) {
                obj['webhook'] = WebhookDefinition.constructFromObject(data['webhook']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Model/WebhookDefinition} webhook
 */
WebhookDefinitionRequest.prototype['webhook'] = undefined;






export default WebhookDefinitionRequest;

