/**
 * BitPesa Private API
 * API specification used for internal BitPesa endpoints
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
* Enum class PayinMethodUxFlow.
* @enum {}
* @readonly
*/
export default class PayinMethodUxFlow {
    
        /**
         * value: "ussd_popup"
         * @const
         */
        "ussd_popup" = "ussd_popup";

    
        /**
         * value: "ussd_voucher"
         * @const
         */
        "ussd_voucher" = "ussd_voucher";

    
        /**
         * value: "ussd_menu_approval"
         * @const
         */
        "ussd_menu_approval" = "ussd_menu_approval";

    
        /**
         * value: "otp_verified_ussd_popup"
         * @const
         */
        "otp_verified_ussd_popup" = "otp_verified_ussd_popup";

    
        /**
         * value: "bank_transfer"
         * @const
         */
        "bank_transfer" = "bank_transfer";

    
        /**
         * value: "http_redirect"
         * @const
         */
        "http_redirect" = "http_redirect";

    
        /**
         * value: "blockchain"
         * @const
         */
        "blockchain" = "blockchain";

    
        /**
         * value: "unknown"
         * @const
         */
        "unknown" = "unknown";

    

    /**
    * Returns a <code>PayinMethodUxFlow</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:Model/PayinMethodUxFlow} The enum <code>PayinMethodUxFlow</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

