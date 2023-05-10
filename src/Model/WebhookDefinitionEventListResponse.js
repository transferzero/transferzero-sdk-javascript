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
 * The WebhookDefinitionEventListResponse model module.
 * @module Model/WebhookDefinitionEventListResponse
 * @version 1.27.4
 */
class WebhookDefinitionEventListResponse {
    /**
     * Constructs a new <code>WebhookDefinitionEventListResponse</code>.
     * @alias module:Model/WebhookDefinitionEventListResponse
     */
    constructor() { 
        
        WebhookDefinitionEventListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookDefinitionEventListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/WebhookDefinitionEventListResponse} obj Optional instance to populate.
     * @return {module:Model/WebhookDefinitionEventListResponse} The populated <code>WebhookDefinitionEventListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookDefinitionEventListResponse();

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} object
 */
WebhookDefinitionEventListResponse.prototype['object'] = undefined;






export default WebhookDefinitionEventListResponse;

