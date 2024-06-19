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
import PaginationMeta from './PaginationMeta';
import WebhookDefinition from './WebhookDefinition';

/**
 * The WebhookDefinitionListResponse model module.
 * @module Model/WebhookDefinitionListResponse
 * @version 1.36.0
 */
class WebhookDefinitionListResponse {
    /**
     * Constructs a new <code>WebhookDefinitionListResponse</code>.
     * @alias module:Model/WebhookDefinitionListResponse
     */
    constructor() { 
        
        WebhookDefinitionListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookDefinitionListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/WebhookDefinitionListResponse} obj Optional instance to populate.
     * @return {module:Model/WebhookDefinitionListResponse} The populated <code>WebhookDefinitionListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookDefinitionListResponse();

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], [WebhookDefinition]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = PaginationMeta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:Model/WebhookDefinition>} object
 */
WebhookDefinitionListResponse.prototype['object'] = undefined;

/**
 * @member {module:Model/PaginationMeta} meta
 */
WebhookDefinitionListResponse.prototype['meta'] = undefined;






export default WebhookDefinitionListResponse;

