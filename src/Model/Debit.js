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
import ValidationErrorDescription from './ValidationErrorDescription';

/**
 * The Debit model module.
 * @module Model/Debit
 * @version 1.27.9
 */
class Debit {
    /**
     * Constructs a new <code>Debit</code>.
     * Debits are used to fund transactions from your internal TransferZero balance.
     * @alias module:Model/Debit
     * @param toType {String} Describes what the debit is funding
     * @param toId {String} The ID of the resource the debit is funding
     */
    constructor(toType, toId) { 
        
        Debit.initialize(this, toType, toId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, toType, toId) { 
        obj['to_type'] = toType;
        obj['to_id'] = toId;
    }

    /**
     * Constructs a <code>Debit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/Debit} obj Optional instance to populate.
     * @return {module:Model/Debit} The populated <code>Debit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Debit();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('to_type')) {
                obj['to_type'] = ApiClient.convertToType(data['to_type'], 'String');
            }
            if (data.hasOwnProperty('to_id')) {
                obj['to_id'] = ApiClient.convertToType(data['to_id'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('usd_amount')) {
                obj['usd_amount'] = ApiClient.convertToType(data['usd_amount'], 'Number');
            }
            if (data.hasOwnProperty('running_balance')) {
                obj['running_balance'] = ApiClient.convertToType(data['running_balance'], 'Number');
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], {'String': [ValidationErrorDescription]});
            }
        }
        return obj;
    }


}

/**
 * The amount to be debited from your account.  The \"amount\" parameter is optional - - if included, it must equal the amount required to fund the transaction. - if omitted, it will default to the amount required to fund the transaction. 
 * @member {Number} amount
 */
Debit.prototype['amount'] = undefined;

/**
 * The currency of the amount in 3-character alpha ISO 4217 currency format.  The \"currency\" parameter is optional - if omitted, it will default to the payin currency of the transaction. - it can be added in as an additional check to ensure that the expected currency is used. (an error will be given back if it does not match up with the payin currency of the transaction) 
 * @member {String} currency
 */
Debit.prototype['currency'] = undefined;

/**
 * Describes what the debit is funding
 * @member {String} to_type
 */
Debit.prototype['to_type'] = undefined;

/**
 * The ID of the resource the debit is funding
 * @member {String} to_id
 */
Debit.prototype['to_id'] = undefined;

/**
 * Metadata of account debit
 * @member {Object} metadata
 */
Debit.prototype['metadata'] = undefined;

/**
 * @member {String} id
 */
Debit.prototype['id'] = undefined;

/**
 * Date and time that the debit was created
 * @member {Date} created_at
 */
Debit.prototype['created_at'] = undefined;

/**
 * The amount to be debited from your account converted to USD 
 * @member {Number} usd_amount
 */
Debit.prototype['usd_amount'] = undefined;

/**
 * The total amount remaining in your account after the debit call 
 * @member {Number} running_balance
 */
Debit.prototype['running_balance'] = undefined;

/**
 * The fields that have some problems and don't pass validation
 * @member {Object.<String, Array.<module:Model/ValidationErrorDescription>>} errors
 */
Debit.prototype['errors'] = undefined;






export default Debit;

