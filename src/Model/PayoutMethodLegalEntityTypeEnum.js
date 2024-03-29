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
/**
* Enum class PayoutMethodLegalEntityTypeEnum.
* @enum {}
* @readonly
*/
export default class PayoutMethodLegalEntityTypeEnum {
    
        /**
         * value: "person"
         * @const
         */
        "person" = "person";

    
        /**
         * value: "sole_proprietorship"
         * @const
         */
        "sole_proprietorship" = "sole_proprietorship";

    
        /**
         * value: "privately_owned_company"
         * @const
         */
        "privately_owned_company" = "privately_owned_company";

    
        /**
         * value: "publicly_owned_company"
         * @const
         */
        "publicly_owned_company" = "publicly_owned_company";

    
        /**
         * value: "government_owned_entity"
         * @const
         */
        "government_owned_entity" = "government_owned_entity";

    
        /**
         * value: "partnership"
         * @const
         */
        "partnership" = "partnership";

    
        /**
         * value: "go"
         * @const
         */
        "go" = "go";

    
        /**
         * value: "financial_institution"
         * @const
         */
        "financial_institution" = "financial_institution";

    

    /**
    * Returns a <code>PayoutMethodLegalEntityTypeEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:Model/PayoutMethodLegalEntityTypeEnum} The enum <code>PayoutMethodLegalEntityTypeEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

