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
import DebitListRequest from './DebitListRequest';
import DebitRequest from './DebitRequest';

/**
 * The DebitRequestWrapper model module.
 * @module Model/DebitRequestWrapper
 * @version 1.23.0
 */
class DebitRequestWrapper {
    /**
     * Constructs a new <code>DebitRequestWrapper</code>.
     * @alias module:Model/DebitRequestWrapper
     * @implements module:Model/DebitRequest
     * @implements module:Model/DebitListRequest
     */
    constructor() { 
        DebitRequest.initialize(this);DebitListRequest.initialize(this);
        DebitRequestWrapper.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DebitRequestWrapper</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/DebitRequestWrapper} obj Optional instance to populate.
     * @return {module:Model/DebitRequestWrapper} The populated <code>DebitRequestWrapper</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DebitRequestWrapper();
            DebitRequest.constructFromObject(data, obj);
            DebitListRequest.constructFromObject(data, obj);

        }
        return obj;
    }


}


// Implement DebitRequest interface:
/**
 * @member {module:Model/Debit} debit
 */
DebitRequest.prototype['debit'] = undefined;
// Implement DebitListRequest interface:
/**
 * @member {Array.<module:Model/Debit>} debit
 */
DebitListRequest.prototype['debit'] = undefined;




export default DebitRequestWrapper;

