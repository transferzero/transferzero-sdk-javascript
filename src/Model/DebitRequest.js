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
import Debit from './Debit';

/**
 * The DebitRequest model module.
 * @module Model/DebitRequest
 * @version 1.27.0
 */
class DebitRequest {
    /**
     * Constructs a new <code>DebitRequest</code>.
     * @alias module:Model/DebitRequest
     */
    constructor() { 
        
        DebitRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DebitRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/DebitRequest} obj Optional instance to populate.
     * @return {module:Model/DebitRequest} The populated <code>DebitRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DebitRequest();

            if (data.hasOwnProperty('debit')) {
                obj['debit'] = Debit.constructFromObject(data['debit']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Model/Debit} debit
 */
DebitRequest.prototype['debit'] = undefined;






export default DebitRequest;

