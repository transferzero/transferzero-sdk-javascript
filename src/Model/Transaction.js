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
import PayinMethod from './PayinMethod';
import Recipient from './Recipient';
import Sender from './Sender';
import TransactionState from './TransactionState';
import TransactionTraits from './TransactionTraits';
import ValidationErrorDescription from './ValidationErrorDescription';

/**
 * The Transaction model module.
 * @module Model/Transaction
 * @version 1.17.1
 */
class Transaction {
    /**
     * Constructs a new <code>Transaction</code>.
     * The template of transactions are the following: &#x60;&#x60;&#x60;JSON {   \&quot;input_currency\&quot;: // currency to pay in,   \&quot;sender\&quot;:{     // details of the sender   },   \&quot;recipients\&quot;:[     {         \&quot;requested_amount\&quot;: // the amount to pay out,         \&quot;requested_currency\&quot;: // the currency of the amount,         \&quot;payout_method\&quot;:{           \&quot;type\&quot;: // method of the payout,           \&quot;details\&quot;:{               // details of the recipient           }         }     }   ],   \&quot;metadata\&quot;: // optional metadata } &#x60;&#x60;&#x60;
     * @alias module:Model/Transaction
     * @param inputCurrency {String} The input currency describes what currency the transaction will be paid in (3-character alpha ISO 4217 currency format). For example if you wish to create an EUR to NGN transaction then input currency should be set to EUR.
     * @param sender {module:Model/Sender} 
     * @param recipients {Array.<module:Model/Recipient>} The details of where the payment should go. although transactions can support paying out multiple recipients, usually one is provided. 
     */
    constructor(inputCurrency, sender, recipients) { 
        
        Transaction.initialize(this, inputCurrency, sender, recipients);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, inputCurrency, sender, recipients) { 
        obj['input_currency'] = inputCurrency;
        obj['sender'] = sender;
        obj['recipients'] = recipients;
    }

    /**
     * Constructs a <code>Transaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/Transaction} obj Optional instance to populate.
     * @return {module:Model/Transaction} The populated <code>Transaction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Transaction();

            if (data.hasOwnProperty('input_currency')) {
                obj['input_currency'] = ApiClient.convertToType(data['input_currency'], 'String');
            }
            if (data.hasOwnProperty('payin_methods')) {
                obj['payin_methods'] = ApiClient.convertToType(data['payin_methods'], [PayinMethod]);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('sender')) {
                obj['sender'] = Sender.constructFromObject(data['sender']);
            }
            if (data.hasOwnProperty('recipients')) {
                obj['recipients'] = ApiClient.convertToType(data['recipients'], [Recipient]);
            }
            if (data.hasOwnProperty('traits')) {
                obj['traits'] = TransactionTraits.constructFromObject(data['traits']);
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = TransactionState.constructFromObject(data['state']);
            }
            if (data.hasOwnProperty('input_amount')) {
                obj['input_amount'] = ApiClient.convertToType(data['input_amount'], 'Number');
            }
            if (data.hasOwnProperty('payin_reference')) {
                obj['payin_reference'] = ApiClient.convertToType(data['payin_reference'], 'String');
            }
            if (data.hasOwnProperty('paid_amount')) {
                obj['paid_amount'] = ApiClient.convertToType(data['paid_amount'], 'Number');
            }
            if (data.hasOwnProperty('due_amount')) {
                obj['due_amount'] = ApiClient.convertToType(data['due_amount'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('expires_at')) {
                obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'Date');
            }
            if (data.hasOwnProperty('external_id')) {
                obj['external_id'] = ApiClient.convertToType(data['external_id'], 'String');
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
 * The input currency describes what currency the transaction will be paid in (3-character alpha ISO 4217 currency format). For example if you wish to create an EUR to NGN transaction then input currency should be set to EUR.
 * @member {String} input_currency
 */
Transaction.prototype['input_currency'] = undefined;

/**
 * Allows setting alternative collections, where funding the transaction is done through alternative means and not via account balance.  For more information please see [Collections from senders](https://docs.transferzero.com/docs/additional-features/#collections-from-senders) in the API documentation
 * @member {Array.<module:Model/PayinMethod>} payin_methods
 */
Transaction.prototype['payin_methods'] = undefined;

/**
 * Additional metadata to store on the transaction. If you widh to store your local transaction ID, you should add it here inside a `sendRef` field, and we will return this value back to you in the daily transaction reports.
 * @member {Object} metadata
 */
Transaction.prototype['metadata'] = undefined;

/**
 * @member {module:Model/Sender} sender
 */
Transaction.prototype['sender'] = undefined;

/**
 * The details of where the payment should go. although transactions can support paying out multiple recipients, usually one is provided. 
 * @member {Array.<module:Model/Recipient>} recipients
 */
Transaction.prototype['recipients'] = undefined;

/**
 * @member {module:Model/TransactionTraits} traits
 */
Transaction.prototype['traits'] = undefined;

/**
 * @member {module:Model/TransactionState} state
 */
Transaction.prototype['state'] = undefined;

/**
 * The amount that was requested in the input currency
 * @member {Number} input_amount
 */
Transaction.prototype['input_amount'] = undefined;

/**
 * The reference number that has to be provided in case the transaction is not funded through account balance
 * @member {String} payin_reference
 */
Transaction.prototype['payin_reference'] = undefined;

/**
 * The amount that was already paid in to the transaction
 * @member {Number} paid_amount
 */
Transaction.prototype['paid_amount'] = undefined;

/**
 * The amount needed to be paid in for the transaction to get funded
 * @member {Number} due_amount
 */
Transaction.prototype['due_amount'] = undefined;

/**
 * The time the transaction was created
 * @member {Date} created_at
 */
Transaction.prototype['created_at'] = undefined;

/**
 * The latest time when the transaction has to be funded, otherwise it will be cancelled
 * @member {Date} expires_at
 */
Transaction.prototype['expires_at'] = undefined;

/**
 * Optional ID that is supplied by partner linking it to the partner's own Transaction ID. Note: if present we will validate whether the sent ID is a duplicate in our system or not.
 * @member {String} external_id
 */
Transaction.prototype['external_id'] = undefined;

/**
 * @member {String} id
 */
Transaction.prototype['id'] = undefined;

/**
 * The fields that have some problems and don't pass validation
 * @member {Object.<String, Array.<module:Model/ValidationErrorDescription>>} errors
 */
Transaction.prototype['errors'] = undefined;






export default Transaction;

