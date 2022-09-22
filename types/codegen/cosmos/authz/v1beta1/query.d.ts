import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Grant, GrantSDKType, GrantAuthorization, GrantAuthorizationSDKType } from "./authz";
/** QueryGrantsRequest is the request type for the Query/Grants RPC method. */
export interface QueryGrantsRequest {
    granter?: string;
    grantee?: string;
    /** Optional, msg_type_url, when set, will query only grants matching given msg type. */
    msgTypeUrl?: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest;
}
/** QueryGrantsRequest is the request type for the Query/Grants RPC method. */
export interface QueryGrantsRequestSDKType {
    granter?: string;
    grantee?: string;
    /** Optional, msg_type_url, when set, will query only grants matching given msg type. */
    msg_type_url?: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequestSDKType;
}
/** QueryGrantsResponse is the response type for the Query/Authorizations RPC method. */
export interface QueryGrantsResponse {
    /** authorizations is a list of grants granted for grantee by granter. */
    grants: Grant[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse;
}
/** QueryGrantsResponse is the response type for the Query/Authorizations RPC method. */
export interface QueryGrantsResponseSDKType {
    /** authorizations is a list of grants granted for grantee by granter. */
    grants: GrantSDKType[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponseSDKType;
}
/** QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsRequest {
    granter: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest;
}
/** QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsRequestSDKType {
    granter: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequestSDKType;
}
/** QueryGranterGrantsResponse is the response type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsResponse {
    /** grants is a list of grants granted by the granter. */
    grants: GrantAuthorization[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse;
}
/** QueryGranterGrantsResponse is the response type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsResponseSDKType {
    /** grants is a list of grants granted by the granter. */
    grants: GrantAuthorizationSDKType[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponseSDKType;
}
/** QueryGranteeGrantsRequest is the request type for the Query/IssuedGrants RPC method. */
export interface QueryGranteeGrantsRequest {
    grantee: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest;
}
/** QueryGranteeGrantsRequest is the request type for the Query/IssuedGrants RPC method. */
export interface QueryGranteeGrantsRequestSDKType {
    grantee: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequestSDKType;
}
/** QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants RPC method. */
export interface QueryGranteeGrantsResponse {
    /** grants is a list of grants granted to the grantee. */
    grants: GrantAuthorization[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse;
}
/** QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants RPC method. */
export interface QueryGranteeGrantsResponseSDKType {
    /** grants is a list of grants granted to the grantee. */
    grants: GrantAuthorizationSDKType[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponseSDKType;
}
