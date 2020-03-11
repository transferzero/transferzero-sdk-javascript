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
import Document from './Document';

/**
 * The DocumentRequest model module.
 * @module Model/DocumentRequest
 * @version 1.6.0
 */
class DocumentRequest {
    /**
     * Constructs a new <code>DocumentRequest</code>.
     * @alias module:Model/DocumentRequest
     */
    constructor() { 
        
        DocumentRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DocumentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/DocumentRequest} obj Optional instance to populate.
     * @return {module:Model/DocumentRequest} The populated <code>DocumentRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocumentRequest();

            if (data.hasOwnProperty('document')) {
                obj['document'] = Document.constructFromObject(data['document']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Model/Document} document
 */
DocumentRequest.prototype['document'] = undefined;






export default DocumentRequest;

