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
 * The TransactionTraits model module.
 * @module Model/TransactionTraits
 * @version 1.25.0
 */
class TransactionTraits {
    /**
     * Constructs a new <code>TransactionTraits</code>.
     * Additional features that are enabled on the transaction. For more details please see [Additional features](https://docs.transferzero.com/docs/additional-features/) in our API documentation
     * @alias module:Model/TransactionTraits
     */
    constructor() { 
        
        TransactionTraits.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionTraits</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/TransactionTraits} obj Optional instance to populate.
     * @return {module:Model/TransactionTraits} The populated <code>TransactionTraits</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionTraits();

            if (data.hasOwnProperty('auto_refund')) {
                obj['auto_refund'] = ApiClient.convertToType(data['auto_refund'], 'Boolean');
            }
            if (data.hasOwnProperty('account_validation')) {
                obj['account_validation'] = ApiClient.convertToType(data['account_validation'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Enables or disables the auto refund functionality. Please see [Auto cancellation and refund of transactions](https://docs.transferzero.com/docs/additional-features/#auto-cancellation-and-refund-of-transactions) for more details
 * @member {Boolean} auto_refund
 */
TransactionTraits.prototype['auto_refund'] = undefined;

/**
 * Enabled or disables the name validation functionality. Please see [Name validation in transactions](https://docs.transferzero.com/docs/additional-features/#name-validation-in-transactions) for more details
 * @member {Boolean} account_validation
 */
TransactionTraits.prototype['account_validation'] = undefined;






export default TransactionTraits;

