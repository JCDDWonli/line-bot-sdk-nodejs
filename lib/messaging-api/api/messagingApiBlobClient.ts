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
import { GetMessageContentTranscodingResponse } from '../model/getMessageContentTranscodingResponse';
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


export class MessagingApiBlobClient {
    private httpClient: HTTPClient;

    constructor(config: httpClientConfig = {}) {
        if (!config.baseURL) {
            config.baseURL = 'https://api-data.line.me';
        }
        this.httpClient = new HTTPClient(config);
    }

    /**
     * Download image, video, and audio data sent from users.
     * @param messageId Message ID of video or audio
     */
    public async getMessageContent(messageId: string, ) : Promise<Readable> {
        
        let params = undefined;
            // isQueryParam=false isFormParam=false isQueryParam=false isPathParam=true isHeaderParam=false isBodyParam=false isModel=false
            

        return this.httpClient.getStream("/v2/bot/message/{messageId}/content".replace("{messageId}", String(messageId)));
    }
    /**
     * Get a preview image of the image or video
     * @param messageId Message ID of image or video
     */
    public async getMessageContentPreview(messageId: string, ) : Promise<Readable> {
        
        let params = undefined;
            // isQueryParam=false isFormParam=false isQueryParam=false isPathParam=true isHeaderParam=false isBodyParam=false isModel=false
            

        return this.httpClient.getStream("/v2/bot/message/{messageId}/content/preview".replace("{messageId}", String(messageId)));
    }
    /**
     * Verify the preparation status of a video or audio for getting
     * @param messageId Message ID of video or audio
     */
    public async getMessageContentTranscodingByMessageId(messageId: string, ) : Promise<GetMessageContentTranscodingResponse> {
        
        let params = undefined;
            // isQueryParam=false isFormParam=false isQueryParam=false isPathParam=true isHeaderParam=false isBodyParam=false isModel=false
            

        const res = this.httpClient.get<GetMessageContentTranscodingResponse>(
            "/v2/bot/message/{messageId}/content/transcoding".replace("{messageId}", String(messageId)),
            params,
        );
        return ensureJSON(res);
    }
    /**
     * Download rich menu image.
     * @param richMenuId ID of the rich menu with the image to be downloaded
     */
    public async getRichMenuImage(richMenuId: string, ) : Promise<Readable> {
        
        let params = undefined;
            // isQueryParam=false isFormParam=false isQueryParam=false isPathParam=true isHeaderParam=false isBodyParam=false isModel=false
            

        return this.httpClient.getStream("/v2/bot/richmenu/{richMenuId}/content".replace("{richMenuId}", String(richMenuId)));
    }
    /**
     * Upload rich menu image
     * @param richMenuId The ID of the rich menu to attach the image to
     * @param body 
     */
    public async setRichMenuImage(richMenuId: string, body?: RequestFile, ) : Promise<Types.MessageAPIResponseBase> {
        
        let params = undefined;
            // isQueryParam=false isFormParam=false isQueryParam=false isPathParam=true isHeaderParam=false isBodyParam=false isModel=false
            
            // isQueryParam=false isFormParam=false isQueryParam=false isPathParam=false isHeaderParam=false isBodyParam=true isModel=false
            params = body

        const res = this.httpClient.post(
            "/v2/bot/richmenu/{richMenuId}/content".replace("{richMenuId}", String(richMenuId)),
            params,
        );
        return ensureJSON(res);
    }
}
