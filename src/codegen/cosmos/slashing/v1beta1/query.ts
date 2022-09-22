import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Params, ParamsSDKType, ValidatorSigningInfo, ValidatorSigningInfoSDKType } from "./slashing";
/** QueryParamsRequest is the request type for the Query/Params RPC method */

export interface QueryParamsRequest {}
/** QueryParamsRequest is the request type for the Query/Params RPC method */

export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method */

export interface QueryParamsResponse {
  params: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method */

export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QuerySigningInfoRequest is the request type for the Query/SigningInfo RPC
 * method
 */

export interface QuerySigningInfoRequest {
  /** cons_address is the address to query signing info of */
  consAddress: string;
}
/**
 * QuerySigningInfoRequest is the request type for the Query/SigningInfo RPC
 * method
 */

export interface QuerySigningInfoRequestSDKType {
  /** cons_address is the address to query signing info of */
  cons_address: string;
}
/**
 * QuerySigningInfoResponse is the response type for the Query/SigningInfo RPC
 * method
 */

export interface QuerySigningInfoResponse {
  /** val_signing_info is the signing info of requested val cons address */
  valSigningInfo: ValidatorSigningInfo;
}
/**
 * QuerySigningInfoResponse is the response type for the Query/SigningInfo RPC
 * method
 */

export interface QuerySigningInfoResponseSDKType {
  /** val_signing_info is the signing info of requested val cons address */
  val_signing_info: ValidatorSigningInfoSDKType;
}
/**
 * QuerySigningInfosRequest is the request type for the Query/SigningInfos RPC
 * method
 */

export interface QuerySigningInfosRequest {
  pagination?: PageRequest;
}
/**
 * QuerySigningInfosRequest is the request type for the Query/SigningInfos RPC
 * method
 */

export interface QuerySigningInfosRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QuerySigningInfosResponse is the response type for the Query/SigningInfos RPC
 * method
 */

export interface QuerySigningInfosResponse {
  /** info is the signing info of all validators */
  info: ValidatorSigningInfo[];
  pagination?: PageResponse;
}
/**
 * QuerySigningInfosResponse is the response type for the Query/SigningInfos RPC
 * method
 */

export interface QuerySigningInfosResponseSDKType {
  /** info is the signing info of all validators */
  info: ValidatorSigningInfoSDKType[];
  pagination?: PageResponseSDKType;
}