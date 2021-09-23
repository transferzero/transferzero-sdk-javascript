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
import Transaction from './Transaction';
import TransactionResponseMeta from './TransactionResponseMeta';

/**
 * The TransactionResponse model module.
 * @module Model/TransactionResponse
 * @version 1.16.1
 */
class TransactionResponse {
    /**
     * Constructs a new <code>TransactionResponse</code>.
     * @alias module:Model/TransactionResponse
     */
    constructor() { 
        
        TransactionResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/TransactionResponse} obj Optional instance to populate.
     * @return {module:Model/TransactionResponse} The populated <code>TransactionResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionResponse();

            if (data.hasOwnProperty('object')) {
                obj['object'] = Transaction.constructFromObject(data['object']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = TransactionResponseMeta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Model/Transaction} object
 */
TransactionResponse.prototype['object'] = undefined;

/**
 * @member {module:Model/TransactionResponseMeta} meta
 */
TransactionResponse.prototype['meta'] = undefined;






export default TransactionResponse;

