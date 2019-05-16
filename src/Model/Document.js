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
import ValidationErrorDescription from './ValidationErrorDescription';

/**
 * The Document model module.
 * @module Model/Document
 * @version 1.1.0
 */
class Document {
    /**
     * Constructs a new <code>Document</code>.
     * @alias module:Model/Document
     * @param upload {String} Base64 encoded data uri of an image/pdf file or a fully qualified url
     * @param uploadFileName {String} Name of the upload
     */
    constructor(upload, uploadFileName) { 
        
        Document.initialize(this, upload, uploadFileName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, upload, uploadFileName) { 
        obj['upload'] = upload;
        obj['upload_file_name'] = uploadFileName;
    }

    /**
     * Constructs a <code>Document</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/Document} obj Optional instance to populate.
     * @return {module:Model/Document} The populated <code>Document</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Document();

            if (data.hasOwnProperty('upload')) {
                obj['upload'] = ApiClient.convertToType(data['upload'], 'String');
            }
            if (data.hasOwnProperty('upload_file_name')) {
                obj['upload_file_name'] = ApiClient.convertToType(data['upload_file_name'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('upload_content_type')) {
                obj['upload_content_type'] = ApiClient.convertToType(data['upload_content_type'], 'String');
            }
            if (data.hasOwnProperty('upload_file_size')) {
                obj['upload_file_size'] = ApiClient.convertToType(data['upload_file_size'], 'Number');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('side')) {
                obj['side'] = ApiClient.convertToType(data['side'], 'String');
            }
            if (data.hasOwnProperty('issuing_country')) {
                obj['issuing_country'] = ApiClient.convertToType(data['issuing_country'], 'String');
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
 * Base64 encoded data uri of an image/pdf file or a fully qualified url
 * @member {String} upload
 */
Document.prototype['upload'] = undefined;

/**
 * Name of the upload
 * @member {String} upload_file_name
 */
Document.prototype['upload_file_name'] = undefined;

/**
 * Metadata of document
 * @member {Object} metadata
 */
Document.prototype['metadata'] = undefined;

/**
 * @member {String} upload_content_type
 */
Document.prototype['upload_content_type'] = undefined;

/**
 * @member {Number} upload_file_size
 */
Document.prototype['upload_file_size'] = undefined;

/**
 * uncategorised
 * @member {String} category
 */
Document.prototype['category'] = undefined;

/**
 * The side of the KYC ID. One of 'front' or 'back'
 * @member {module:Model/Document.SideEnum} side
 */
Document.prototype['side'] = undefined;

/**
 * Issuing country of ID in 2-character alpha ISO 3166-2 country format
 * @member {String} issuing_country
 */
Document.prototype['issuing_country'] = undefined;

/**
 * @member {String} id
 */
Document.prototype['id'] = undefined;

/**
 * The fields that have some problems and don't pass validation
 * @member {Object.<String, Array.<module:Model/ValidationErrorDescription>>} errors
 */
Document.prototype['errors'] = undefined;





/**
 * Allowed values for the <code>side</code> property.
 * @enum {String}
 * @readonly
 */
Document['SideEnum'] = {

    /**
     * value: "front"
     * @const
     */
    "front": "front",

    /**
     * value: "back"
     * @const
     */
    "back": "back"
};



export default Document;

