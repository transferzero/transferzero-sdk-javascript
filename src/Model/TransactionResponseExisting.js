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
import Sender from './Sender';
import Transaction from './Transaction';

/**
 * The TransactionResponseExisting model module.
 * @module Model/TransactionResponseExisting
 * @version 1.19.3
 */
class TransactionResponseExisting {
    /**
     * Constructs a new <code>TransactionResponseExisting</code>.
     * @alias module:Model/TransactionResponseExisting
     */
    constructor() { 
        
        TransactionResponseExisting.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionResponseExisting</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/TransactionResponseExisting} obj Optional instance to populate.
     * @return {module:Model/TransactionResponseExisting} The populated <code>TransactionResponseExisting</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionResponseExisting();

            if (data.hasOwnProperty('sender')) {
                obj['sender'] = Sender.constructFromObject(data['sender']);
            }
            if (data.hasOwnProperty('transaction')) {
                obj['transaction'] = Transaction.constructFromObject(data['transaction']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Model/Sender} sender
 */
TransactionResponseExisting.prototype['sender'] = undefined;

/**
 * @member {module:Model/Transaction} transaction
 */
TransactionResponseExisting.prototype['transaction'] = undefined;






export default TransactionResponseExisting;

