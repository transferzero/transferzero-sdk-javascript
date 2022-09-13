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
import ProofOfPayment from './ProofOfPayment';

/**
 * The ProofOfPaymentListResponse model module.
 * @module Model/ProofOfPaymentListResponse
 * @version 1.22.1
 */
class ProofOfPaymentListResponse {
    /**
     * Constructs a new <code>ProofOfPaymentListResponse</code>.
     * @alias module:Model/ProofOfPaymentListResponse
     */
    constructor() { 
        
        ProofOfPaymentListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProofOfPaymentListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/ProofOfPaymentListResponse} obj Optional instance to populate.
     * @return {module:Model/ProofOfPaymentListResponse} The populated <code>ProofOfPaymentListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProofOfPaymentListResponse();

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], [ProofOfPayment]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:Model/ProofOfPayment>} object
 */
ProofOfPaymentListResponse.prototype['object'] = undefined;






export default ProofOfPaymentListResponse;

