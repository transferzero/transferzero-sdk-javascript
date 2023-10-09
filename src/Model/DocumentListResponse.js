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
import PaginationMeta from './PaginationMeta';

/**
 * The DocumentListResponse model module.
 * @module Model/DocumentListResponse
 * @version 1.30.1
 */
class DocumentListResponse {
    /**
     * Constructs a new <code>DocumentListResponse</code>.
     * @alias module:Model/DocumentListResponse
     */
    constructor() { 
        
        DocumentListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DocumentListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/DocumentListResponse} obj Optional instance to populate.
     * @return {module:Model/DocumentListResponse} The populated <code>DocumentListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocumentListResponse();

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], [Document]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = PaginationMeta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:Model/Document>} object
 */
DocumentListResponse.prototype['object'] = undefined;

/**
 * @member {module:Model/PaginationMeta} meta
 */
DocumentListResponse.prototype['meta'] = undefined;






export default DocumentListResponse;

