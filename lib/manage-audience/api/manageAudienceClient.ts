/**
 * LINE Messaging API
 * This document describes LINE Messaging API.
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/* tslint:disable:no-unused-locals */
import { AddAudienceToAudienceGroupRequest } from '../model/addAudienceToAudienceGroupRequest';
import { AudienceGroupCreateRoute } from '../model/audienceGroupCreateRoute';
import { AudienceGroupStatus } from '../model/audienceGroupStatus';
import { CreateAudienceGroupRequest } from '../model/createAudienceGroupRequest';
import { CreateAudienceGroupResponse } from '../model/createAudienceGroupResponse';
import { CreateClickBasedAudienceGroupRequest } from '../model/createClickBasedAudienceGroupRequest';
import { CreateClickBasedAudienceGroupResponse } from '../model/createClickBasedAudienceGroupResponse';
import { CreateImpBasedAudienceGroupRequest } from '../model/createImpBasedAudienceGroupRequest';
import { CreateImpBasedAudienceGroupResponse } from '../model/createImpBasedAudienceGroupResponse';
import { ErrorResponse } from '../model/errorResponse';
import { GetAudienceDataResponse } from '../model/getAudienceDataResponse';
import { GetAudienceGroupAuthorityLevelResponse } from '../model/getAudienceGroupAuthorityLevelResponse';
import { GetAudienceGroupsResponse } from '../model/getAudienceGroupsResponse';
import { UpdateAudienceGroupAuthorityLevelRequest } from '../model/updateAudienceGroupAuthorityLevelRequest';
import { UpdateAudienceGroupDescriptionRequest } from '../model/updateAudienceGroupDescriptionRequest';
import * as Types from "../../types";
import {ensureJSON} from "../../utils";
import {Readable} from "stream";

import { RequestFile } from '../../http';
import HTTPClient from "../../http";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================


interface httpClientConfig {
    baseURL?: string;
    // TODO support defaultHeaders?
}


export class ManageAudienceClient {
    private httpClient: HTTPClient;

    constructor(config: httpClientConfig = {}) {
        if (!config.baseURL) {
            config.baseURL = 'https://api.line.me';
        }
        this.httpClient = new HTTPClient(config);
    }

    /**
     * Activate audience
     * @param audienceGroupId The audience ID.
     */
    public async activateAudienceGroup(audienceGroupId: number, ) : Promise<Types.MessageAPIResponseBase> {
        
        let params = undefined;
            // isQueryParam=false isFormParam=false isQueryParam=false isPathParam=true isHeaderParam=false isBodyParam=false isModel=false
            

        const res = this.httpClient.put(
            "/v2/bot/audienceGroup/{audienceGroupId}/activate".replace("{audienceGroupId}", String(audienceGroupId)),
            params,
        );
        return ensureJSON(res);
    }
    /**
     * Add user IDs or Identifiers for Advertisers (IFAs) to an audience for uploading user IDs (by JSON)
     * @param addAudienceToAudienceGroupRequest 
     */
    public async addAudienceToAudienceGroup(addAudienceToAudienceGroupRequest: AddAudienceToAudienceGroupRequest, ) : Promise<Types.MessageAPIResponseBase> {
        
        let params = undefined;
            // isQueryParam=false isFormParam=false isQueryParam=false isPathParam=false isHeaderParam=false isBodyParam=true isModel=true
            params = addAudienceToAudienceGroupRequest

        const res = this.httpClient.put(
            "/v2/bot/audienceGroup/upload",
            params,
        );
        return ensureJSON(res);
    }
    /**
     * Create audience for uploading user IDs (by JSON)
     * @param createAudienceGroupRequest 
     */
    public async createAudienceGroup(createAudienceGroupRequest: CreateAudienceGroupRequest, ) : Promise<CreateAudienceGroupResponse> {
        
        let params = undefined;
            // isQueryParam=false isFormParam=false isQueryParam=false isPathParam=false isHeaderParam=false isBodyParam=true isModel=true
            params = createAudienceGroupRequest

        const res = this.httpClient.post<CreateAudienceGroupResponse>(
            "/v2/bot/audienceGroup/upload",
            params,
        );
        return ensureJSON(res);
    }
    /**
     * Create audience for click-based retargeting
     * @param createClickBasedAudienceGroupRequest 
     */
    public async createClickBasedAudienceGroup(createClickBasedAudienceGroupRequest: CreateClickBasedAudienceGroupRequest, ) : Promise<CreateClickBasedAudienceGroupResponse> {
        
        let params = undefined;
            // isQueryParam=false isFormParam=false isQueryParam=false isPathParam=false isHeaderParam=false isBodyParam=true isModel=true
            params = createClickBasedAudienceGroupRequest

        const res = this.httpClient.post<CreateClickBasedAudienceGroupResponse>(
            "/v2/bot/audienceGroup/click",
            params,
        );
        return ensureJSON(res);
    }
    /**
     * Create audience for impression-based retargeting
     * @param createImpBasedAudienceGroupRequest 
     */
    public async createImpBasedAudienceGroup(createImpBasedAudienceGroupRequest: CreateImpBasedAudienceGroupRequest, ) : Promise<CreateImpBasedAudienceGroupResponse> {
        
        let params = undefined;
            // isQueryParam=false isFormParam=false isQueryParam=false isPathParam=false isHeaderParam=false isBodyParam=true isModel=true
            params = createImpBasedAudienceGroupRequest

        const res = this.httpClient.post<CreateImpBasedAudienceGroupResponse>(
            "/v2/bot/audienceGroup/imp",
            params,
        );
        return ensureJSON(res);
    }
    /**
     * Delete audience
     * @param audienceGroupId The audience ID.
     */
    public async deleteAudienceGroup(audienceGroupId: number, ) : Promise<Types.MessageAPIResponseBase> {
        
        let params = undefined;
            // isQueryParam=false isFormParam=false isQueryParam=false isPathParam=true isHeaderParam=false isBodyParam=false isModel=false
            

        const res = this.httpClient.delete(
            "/v2/bot/audienceGroup/{audienceGroupId}".replace("{audienceGroupId}", String(audienceGroupId)),
            params,
        );
        return ensureJSON(res);
    }
    /**
     * Gets audience data.
     * @param audienceGroupId The audience ID.
     */
    public async getAudienceData(audienceGroupId: number, ) : Promise<GetAudienceDataResponse> {
        
        let params = undefined;
            // isQueryParam=false isFormParam=false isQueryParam=false isPathParam=true isHeaderParam=false isBodyParam=false isModel=false
            

        const res = this.httpClient.get<GetAudienceDataResponse>(
            "/v2/bot/audienceGroup/{audienceGroupId}".replace("{audienceGroupId}", String(audienceGroupId)),
            params,
        );
        return ensureJSON(res);
    }
    /**
     * Get the authority level of the audience
     */
    public async getAudienceGroupAuthorityLevel() : Promise<GetAudienceGroupAuthorityLevelResponse> {
        
        let params = undefined;

        const res = this.httpClient.get<GetAudienceGroupAuthorityLevelResponse>(
            "/v2/bot/audienceGroup/authorityLevel",
            params,
        );
        return ensureJSON(res);
    }
    /**
     * Gets data for more than one audience.
     * @param page The page to return when getting (paginated) results. Must be 1 or higher.
     * @param description The name of the audience(s) to return. You can search for partial matches. This is case-insensitive, meaning AUDIENCE and audience are considered identical. If omitted, the name of the audience(s) will not be used as a search criterion. 
     * @param status The status of the audience(s) to return. If omitted, the status of the audience(s) will not be used as a search criterion. 
     * @param size The number of audiences per page. Default: 20 Max: 40 
     * @param includesExternalPublicGroups true (default): Get public audiences created in all channels linked to the same bot. false: Get audiences created in the same channel. 
     * @param createRoute How the audience was created. If omitted, all audiences are included.  &#x60;OA_MANAGER&#x60;: Return only audiences created with LINE Official Account Manager (opens new window). &#x60;MESSAGING_API&#x60;: Return only audiences created with Messaging API. 
     */
    public async getAudienceGroups(page: number, description?: string, status?: AudienceGroupStatus, size?: number, includesExternalPublicGroups?: boolean, createRoute?: AudienceGroupCreateRoute, ) : Promise<GetAudienceGroupsResponse> {
        
        let params = undefined;
            // isQueryParam=true isFormParam=false isQueryParam=true isPathParam=false isHeaderParam=false isBodyParam=false isModel=false
            
                if (!params) {
                    params = {};
                }
                params["page"] = page;
            // isQueryParam=true isFormParam=false isQueryParam=true isPathParam=false isHeaderParam=false isBodyParam=false isModel=false
            
                if (!params) {
                    params = {};
                }
                params["description"] = description;
            // isQueryParam=true isFormParam=false isQueryParam=true isPathParam=false isHeaderParam=false isBodyParam=false isModel=false
            
                if (!params) {
                    params = {};
                }
                params["status"] = status;
            // isQueryParam=true isFormParam=false isQueryParam=true isPathParam=false isHeaderParam=false isBodyParam=false isModel=false
            
                if (!params) {
                    params = {};
                }
                params["size"] = size;
            // isQueryParam=true isFormParam=false isQueryParam=true isPathParam=false isHeaderParam=false isBodyParam=false isModel=false
            
                if (!params) {
                    params = {};
                }
                params["includesExternalPublicGroups"] = includesExternalPublicGroups;
            // isQueryParam=true isFormParam=false isQueryParam=true isPathParam=false isHeaderParam=false isBodyParam=false isModel=false
            
                if (!params) {
                    params = {};
                }
                params["createRoute"] = createRoute;

        const res = this.httpClient.get<GetAudienceGroupsResponse>(
            "/v2/bot/audienceGroup/list",
            params,
        );
        return ensureJSON(res);
    }
    /**
     * Change the authority level of the audience
     * @param updateAudienceGroupAuthorityLevelRequest 
     */
    public async updateAudienceGroupAuthorityLevel(updateAudienceGroupAuthorityLevelRequest: UpdateAudienceGroupAuthorityLevelRequest, ) : Promise<Types.MessageAPIResponseBase> {
        
        let params = undefined;
            // isQueryParam=false isFormParam=false isQueryParam=false isPathParam=false isHeaderParam=false isBodyParam=true isModel=true
            params = updateAudienceGroupAuthorityLevelRequest

        const res = this.httpClient.put(
            "/v2/bot/audienceGroup/authorityLevel",
            params,
        );
        return ensureJSON(res);
    }
    /**
     * Renames an existing audience.
     * @param audienceGroupId The audience ID.
     * @param updateAudienceGroupDescriptionRequest 
     */
    public async updateAudienceGroupDescription(audienceGroupId: number, updateAudienceGroupDescriptionRequest: UpdateAudienceGroupDescriptionRequest, ) : Promise<Types.MessageAPIResponseBase> {
        
        let params = undefined;
            // isQueryParam=false isFormParam=false isQueryParam=false isPathParam=true isHeaderParam=false isBodyParam=false isModel=false
            
            // isQueryParam=false isFormParam=false isQueryParam=false isPathParam=false isHeaderParam=false isBodyParam=true isModel=true
            params = updateAudienceGroupDescriptionRequest

        const res = this.httpClient.put(
            "/v2/bot/audienceGroup/{audienceGroupId}/updateDescription".replace("{audienceGroupId}", String(audienceGroupId)),
            params,
        );
        return ensureJSON(res);
    }
}
