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
 * The OpenCorporatesSupportedCountries model module.
 * @module Model/OpenCorporatesSupportedCountries
 * @version 1.25.0
 */
class OpenCorporatesSupportedCountries {
    /**
     * Constructs a new <code>OpenCorporatesSupportedCountries</code>.
     * @alias module:Model/OpenCorporatesSupportedCountries
     */
    constructor() { 
        
        OpenCorporatesSupportedCountries.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OpenCorporatesSupportedCountries</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/OpenCorporatesSupportedCountries} obj Optional instance to populate.
     * @return {module:Model/OpenCorporatesSupportedCountries} The populated <code>OpenCorporatesSupportedCountries</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OpenCorporatesSupportedCountries();

            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The Supported Country ISO2 code  Supported countries are:   - AL   - AW   - AU   - BS   - BH   - BD   - BB   - BY   - BE   - BZ   - BM   - BO   - BR   - BG   - KH   - CA   - HR   - CW   - CY   - CZ   - DK   - DO   - FI   - FR   - GF   - DE   - GI   - GR   - GL   - GP   - GG   - HK   - IS   - IN   - IE   - IM   - IL   - JM   - JP   - JE   - LV   - LI   - LU   - MY   - MT   - MQ   - MU   - YT   - MX   - MD   - ME   - NL   - NZ   - NO   - PK   - PA   - PL   - PR   - RO   - RW   - RE   - BL   - MF   - PM   - SG   - SK   - SI   - ZA   - ES   - SE   - CH   - TJ   - TZ   - TH   - TO   - TN   - UG   - AE   - GB   - US   - VU   - VN 
 * @member {String} country
 */
OpenCorporatesSupportedCountries.prototype['country'] = undefined;






export default OpenCorporatesSupportedCountries;
