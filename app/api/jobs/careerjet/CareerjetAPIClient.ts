import * as url from "url";
import axios from "axios";
import { Constants } from "./Constants";

interface SearchParams {
  [key: string]: string | number | undefined;
  affid?: string;
  user_ip: string;
  user_agent: string;
  url: string;
  keywords?: string;
  location?: string;
  sort?: string;
  start_num?: number;
  pagesize?: number;
  page?: number;
  contracttype?: string;
  contractperiod?: string;
}

class CareerjetAPIClient {
  private locale_code: string;

  /**
   * Create a Careerjet API client.
   * @param locale_code - POSIX locale that determines which Careerjet site to use.
   * @throws Error if the provided locale_code is not supported.
   */
  constructor(locale_code = "en_GB") {
    if (!locale_code) {
      this.locale_code = "en_GB";
    } else if (locale_code in Constants.LOCALES) {
      this.locale_code = locale_code;
    } else {
      throw new Error(`Locale ${locale_code} not supported`);
    }
  }

  /**
   * Perform a job search using Careerjet API.
   * @param search_params - Dictionary that contains search parameters.
   * @returns Promise containing search results.
   * @throws Error if there are issues with the request or response.
   */
  async search(search_params: SearchParams) {
    for (const field in search_params) {
      if (!Constants.ALLOWED_FIELDS.includes(field)) {
        throw new Error(`Unknown param key '${field}'`);
      }
    }

    for (const field of Constants.MANDATORY_FIELDS) {
      if (!(field in search_params) || !search_params[field]) {
        throw new Error(`Mandatory param key '${field}' missing`);
      }
    }

    if (!search_params.locale_code) {
      search_params.locale_code = this.locale_code;
    }

    if (!Constants.LOCALES.hasOwnProperty(search_params.locale_code)) {
      throw new Error(`Locale ${search_params.locale_code} not supported`);
    }

    const referer_uri = url.parse(search_params.url);
    if (referer_uri.protocol !== "http:" && referer_uri.protocol !== "https:") {
      throw new Error(`Invalid param url '${search_params.url}'`);
    }

    const packageVersion = "3.0.1";
    const pythonVersion = "3";
    const user_agent = `careerjet-api-client-v${packageVersion}-python-v${pythonVersion}`;

    try {
      const response = await axios.get(`${Constants.API_URL}/search`, {
        headers: {
          "user-agent": user_agent,
          referer: referer_uri.href,
        },
        params: search_params,
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default CareerjetAPIClient;
