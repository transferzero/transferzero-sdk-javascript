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

/**
 * The DocumentWebhookAllOf model module.
 * @module Model/DocumentWebhookAllOf
 * @version 1.36.7
 */
class DocumentWebhookAllOf {
    /**
     * Constructs a new <code>DocumentWebhookAllOf</code>.
     * @alias module:Model/DocumentWebhookAllOf
     */
    constructor() { 
        
        DocumentWebhookAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DocumentWebhookAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/DocumentWebhookAllOf} obj Optional instance to populate.
     * @return {module:Model/DocumentWebhookAllOf} The populated <code>DocumentWebhookAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocumentWebhookAllOf();

            if (data.hasOwnProperty('object')) {
                obj['object'] = Document.constructFromObject(data['object']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Model/Document} object
 */
DocumentWebhookAllOf.prototype['object'] = undefined;






export default DocumentWebhookAllOf;

