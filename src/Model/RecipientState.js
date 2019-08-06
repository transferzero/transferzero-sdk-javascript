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
* Enum class RecipientState.
* @enum {}
* @readonly
*/
export default class RecipientState {
    
        /**
         * value: "initial"
         * @const
         */
        "initial" = "initial";

    
        /**
         * value: "pending"
         * @const
         */
        "pending" = "pending";

    
        /**
         * value: "success"
         * @const
         */
        "success" = "success";

    
        /**
         * value: "error"
         * @const
         */
        "error" = "error";

    
        /**
         * value: "refunded"
         * @const
         */
        "refunded" = "refunded";

    
        /**
         * value: "manual"
         * @const
         */
        "manual" = "manual";

    
        /**
         * value: "stuck"
         * @const
         */
        "stuck" = "stuck";

    
        /**
         * value: "overpaid"
         * @const
         */
        "overpaid" = "overpaid";

    
        /**
         * value: "canceled"
         * @const
         */
        "canceled" = "canceled";

    
        /**
         * value: "exception"
         * @const
         */
        "exception" = "exception";

    

    /**
    * Returns a <code>RecipientState</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:Model/RecipientState} The enum <code>RecipientState</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
