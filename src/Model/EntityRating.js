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
* Enum class EntityRating.
* @enum {}
* @readonly
*/
export default class EntityRating {
    
        /**
         * value: "extremely_high"
         * @const
         */
        "extremely_high" = "extremely_high";

    
        /**
         * value: "high_risk"
         * @const
         */
        "high_risk" = "high_risk";

    
        /**
         * value: "medium_risk"
         * @const
         */
        "medium_risk" = "medium_risk";

    
        /**
         * value: "low_risk"
         * @const
         */
        "low_risk" = "low_risk";

    

    /**
    * Returns a <code>EntityRating</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:Model/EntityRating} The enum <code>EntityRating</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
