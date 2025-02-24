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
 * The WebhookDefinitionResponse model module.
 * @module Model/WebhookDefinitionResponse
 * @version 1.36.6
 */
class WebhookDefinitionResponse {
    /**
     * Constructs a new <code>WebhookDefinitionResponse</code>.
     * @alias module:Model/WebhookDefinitionResponse
     */
    constructor() { 
        
        WebhookDefinitionResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookDefinitionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/WebhookDefinitionResponse} obj Optional instance to populate.
     * @return {module:Model/WebhookDefinitionResponse} The populated <code>WebhookDefinitionResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookDefinitionResponse();

            if (data.hasOwnProperty('object')) {
                obj['object'] = WebhookDefinition.constructFromObject(data['object']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Model/WebhookDefinition} object
 */
WebhookDefinitionResponse.prototype['object'] = undefined;






export default WebhookDefinitionResponse;

