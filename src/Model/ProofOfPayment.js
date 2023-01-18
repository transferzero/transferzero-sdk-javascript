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
 * The ProofOfPayment model module.
 * @module Model/ProofOfPayment
 * @version 1.23.5
 */
class ProofOfPayment {
    /**
     * Constructs a new <code>ProofOfPayment</code>.
     * @alias module:Model/ProofOfPayment
     */
    constructor() { 
        
        ProofOfPayment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProofOfPayment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/ProofOfPayment} obj Optional instance to populate.
     * @return {module:Model/ProofOfPayment} The populated <code>ProofOfPayment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProofOfPayment();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('file_name')) {
                obj['file_name'] = ApiClient.convertToType(data['file_name'], 'String');
            }
            if (data.hasOwnProperty('thumbnail')) {
                obj['thumbnail'] = ApiClient.convertToType(data['thumbnail'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * UUID of the uploaded document
 * @member {String} id
 */
ProofOfPayment.prototype['id'] = undefined;

/**
 * Name of the uploaded file
 * @member {String} file_name
 */
ProofOfPayment.prototype['file_name'] = undefined;

/**
 * URL to thumbnail image of the uploaded file
 * @member {String} thumbnail
 */
ProofOfPayment.prototype['thumbnail'] = undefined;

/**
 * URL to uploaded file
 * @member {String} url
 */
ProofOfPayment.prototype['url'] = undefined;






export default ProofOfPayment;

