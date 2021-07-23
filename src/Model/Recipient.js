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
import PayoutMethod from './PayoutMethod';
import RecipientState from './RecipientState';
import RecipientStateReasonDetails from './RecipientStateReasonDetails';
import TransactionState from './TransactionState';
import ValidationErrorDescription from './ValidationErrorDescription';

/**
 * The Recipient model module.
 * @module Model/Recipient
 * @version 1.15.0
 */
class Recipient {
    /**
     * Constructs a new <code>Recipient</code>.
     * The recipient describes the amount, the currency and the destination where the money should be sent.
     * @alias module:Model/Recipient
     * @param requestedAmount {Number} the amount that should be paid to the recipient. This can be in any currency, usually either the input or the output currency. If the value here is not the output currency we will calculate how much the recipient is going to get using the exchange rates active when the transaction was created.
     * @param requestedCurrency {String} the currency of the amount in 3-character alpha ISO 4217 currency format
     * @param payoutMethod {module:Model/PayoutMethod} 
     */
    constructor(requestedAmount, requestedCurrency, payoutMethod) { 
        
        Recipient.initialize(this, requestedAmount, requestedCurrency, payoutMethod);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, requestedAmount, requestedCurrency, payoutMethod) { 
        obj['requested_amount'] = requestedAmount;
        obj['requested_currency'] = requestedCurrency;
        obj['payout_method'] = payoutMethod;
    }

    /**
     * Constructs a <code>Recipient</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/Recipient} obj Optional instance to populate.
     * @return {module:Model/Recipient} The populated <code>Recipient</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Recipient();

            if (data.hasOwnProperty('requested_amount')) {
                obj['requested_amount'] = ApiClient.convertToType(data['requested_amount'], 'Number');
            }
            if (data.hasOwnProperty('requested_currency')) {
                obj['requested_currency'] = ApiClient.convertToType(data['requested_currency'], 'String');
            }
            if (data.hasOwnProperty('payout_method')) {
                obj['payout_method'] = PayoutMethod.constructFromObject(data['payout_method']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('editable')) {
                obj['editable'] = ApiClient.convertToType(data['editable'], 'Boolean');
            }
            if (data.hasOwnProperty('retriable')) {
                obj['retriable'] = ApiClient.convertToType(data['retriable'], 'Boolean');
            }
            if (data.hasOwnProperty('input_usd_amount')) {
                obj['input_usd_amount'] = ApiClient.convertToType(data['input_usd_amount'], 'Number');
            }
            if (data.hasOwnProperty('may_cancel')) {
                obj['may_cancel'] = ApiClient.convertToType(data['may_cancel'], 'Boolean');
            }
            if (data.hasOwnProperty('state_reason')) {
                obj['state_reason'] = ApiClient.convertToType(data['state_reason'], 'String');
            }
            if (data.hasOwnProperty('state_reason_details')) {
                obj['state_reason_details'] = RecipientStateReasonDetails.constructFromObject(data['state_reason_details']);
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = RecipientState.constructFromObject(data['state']);
            }
            if (data.hasOwnProperty('transaction_id')) {
                obj['transaction_id'] = ApiClient.convertToType(data['transaction_id'], 'String');
            }
            if (data.hasOwnProperty('transaction_external_id')) {
                obj['transaction_external_id'] = ApiClient.convertToType(data['transaction_external_id'], 'String');
            }
            if (data.hasOwnProperty('transaction_state')) {
                obj['transaction_state'] = TransactionState.constructFromObject(data['transaction_state']);
            }
            if (data.hasOwnProperty('exchange_rate')) {
                obj['exchange_rate'] = ApiClient.convertToType(data['exchange_rate'], 'Number');
            }
            if (data.hasOwnProperty('fee_fractional')) {
                obj['fee_fractional'] = ApiClient.convertToType(data['fee_fractional'], 'Number');
            }
            if (data.hasOwnProperty('input_amount')) {
                obj['input_amount'] = ApiClient.convertToType(data['input_amount'], 'Number');
            }
            if (data.hasOwnProperty('input_currency')) {
                obj['input_currency'] = ApiClient.convertToType(data['input_currency'], 'String');
            }
            if (data.hasOwnProperty('output_amount')) {
                obj['output_amount'] = ApiClient.convertToType(data['output_amount'], 'Number');
            }
            if (data.hasOwnProperty('output_currency')) {
                obj['output_currency'] = ApiClient.convertToType(data['output_currency'], 'String');
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
 * the amount that should be paid to the recipient. This can be in any currency, usually either the input or the output currency. If the value here is not the output currency we will calculate how much the recipient is going to get using the exchange rates active when the transaction was created.
 * @member {Number} requested_amount
 */
Recipient.prototype['requested_amount'] = undefined;

/**
 * the currency of the amount in 3-character alpha ISO 4217 currency format
 * @member {String} requested_currency
 */
Recipient.prototype['requested_currency'] = undefined;

/**
 * @member {module:Model/PayoutMethod} payout_method
 */
Recipient.prototype['payout_method'] = undefined;

/**
 * Additional metadata that can be added to a recipient. These values will be returned on request
 * @member {Object} metadata
 */
Recipient.prototype['metadata'] = undefined;

/**
 * Date and time that the recipient was created.
 * @member {Date} created_at
 */
Recipient.prototype['created_at'] = undefined;

/**
 * Shows whether the recipient can be edited using the PATCH /v1/recipients/{id} endpoint or not
 * @member {Boolean} editable
 */
Recipient.prototype['editable'] = undefined;

/**
 * Shows whether the transaction made to the recipient can be retried or not
 * @member {Boolean} retriable
 */
Recipient.prototype['retriable'] = undefined;

/**
 * Shows how much this payment is worth in USD
 * @member {Number} input_usd_amount
 */
Recipient.prototype['input_usd_amount'] = undefined;

/**
 * If true it shows that the payment can be cancelled immediately using the DELETE /v1/recipients/{id} endpoint. If false you can still try to cancel it, however it will only gets cancelled once we have confirmation from our partner that the payment has failed.
 * @member {Boolean} may_cancel
 */
Recipient.prototype['may_cancel'] = undefined;

/**
 * In case the payment is unsuccessful it holds the error message associated with the last unsuccessful payout.
 * @member {String} state_reason
 */
Recipient.prototype['state_reason'] = undefined;

/**
 * @member {module:Model/RecipientStateReasonDetails} state_reason_details
 */
Recipient.prototype['state_reason_details'] = undefined;

/**
 * @member {module:Model/RecipientState} state
 */
Recipient.prototype['state'] = undefined;

/**
 * The ID of the transaction that is related to this recipient
 * @member {String} transaction_id
 */
Recipient.prototype['transaction_id'] = undefined;

/**
 * Optional ID that is supplied by partner linking it to the partner's own Transaction ID.
 * @member {String} transaction_external_id
 */
Recipient.prototype['transaction_external_id'] = undefined;

/**
 * @member {module:Model/TransactionState} transaction_state
 */
Recipient.prototype['transaction_state'] = undefined;

/**
 * The exchange rate used in this payment
 * @member {Number} exchange_rate
 */
Recipient.prototype['exchange_rate'] = undefined;

/**
 * The fee for this payment in fractional units (for example cents for USD transactions)
 * @member {Number} fee_fractional
 */
Recipient.prototype['fee_fractional'] = undefined;

/**
 * The amount that had to be paid in for this payment to proceed
 * @member {Number} input_amount
 */
Recipient.prototype['input_amount'] = undefined;

/**
 * The currency this payment was paid in
 * @member {String} input_currency
 */
Recipient.prototype['input_currency'] = undefined;

/**
 * The amount that will be paid to the recipient
 * @member {Number} output_amount
 */
Recipient.prototype['output_amount'] = undefined;

/**
 * The currency the payment will be delivered in
 * @member {String} output_currency
 */
Recipient.prototype['output_currency'] = undefined;

/**
 * @member {String} id
 */
Recipient.prototype['id'] = undefined;

/**
 * The fields that have some problems and don't pass validation
 * @member {Object.<String, Array.<module:Model/ValidationErrorDescription>>} errors
 */
Recipient.prototype['errors'] = undefined;






export default Recipient;

