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
import Transaction from './Transaction';

/**
 * The TransactionRequest model module.
 * @module Model/TransactionRequest
 * @version 1.37.1
 */
class TransactionRequest {
    /**
     * Constructs a new <code>TransactionRequest</code>.
     * @alias module:Model/TransactionRequest
     */
    constructor() { 
        
        TransactionRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/TransactionRequest} obj Optional instance to populate.
     * @return {module:Model/TransactionRequest} The populated <code>TransactionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionRequest();

            if (data.hasOwnProperty('transaction')) {
                obj['transaction'] = Transaction.constructFromObject(data['transaction']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Model/Transaction} transaction
 */
TransactionRequest.prototype['transaction'] = undefined;






export default TransactionRequest;

