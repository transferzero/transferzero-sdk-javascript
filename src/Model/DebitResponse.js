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
 * The DebitResponse model module.
 * @module Model/DebitResponse
 * @version 1.28.0
 */
class DebitResponse {
    /**
     * Constructs a new <code>DebitResponse</code>.
     * @alias module:Model/DebitResponse
     */
    constructor() { 
        
        DebitResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DebitResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/DebitResponse} obj Optional instance to populate.
     * @return {module:Model/DebitResponse} The populated <code>DebitResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DebitResponse();

            if (data.hasOwnProperty('object')) {
                obj['object'] = Debit.constructFromObject(data['object']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Model/Debit} object
 */
DebitResponse.prototype['object'] = undefined;






export default DebitResponse;

