import { ParamChange, ParamChangeSDKType } from "./params";
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequest {
  /** subspace defines the module to query the parameter for. */
  subspace: string;
  /** key defines the key of the parameter in the subspace. */

  key: string;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequestSDKType {
  /** subspace defines the module to query the parameter for. */
  subspace: string;
  /** key defines the key of the parameter in the subspace. */

  key: string;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  /** param defines the queried parameter. */
  param: ParamChange;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponseSDKType {
  /** param defines the queried parameter. */
  param: ParamChangeSDKType;
}
/**
 * QuerySubspacesRequest defines a request type for querying for all registered
 * subspaces and all keys for a subspace.
 */

export interface QuerySubspacesRequest {}
/**
 * QuerySubspacesRequest defines a request type for querying for all registered
 * subspaces and all keys for a subspace.
 */

export interface QuerySubspacesRequestSDKType {}
/**
 * QuerySubspacesResponse defines the response types for querying for all
 * registered subspaces and all keys for a subspace.
 */

export interface QuerySubspacesResponse {
  subspaces: Subspace[];
}
/**
 * QuerySubspacesResponse defines the response types for querying for all
 * registered subspaces and all keys for a subspace.
 */

export interface QuerySubspacesResponseSDKType {
  subspaces: SubspaceSDKType[];
}
/**
 * Subspace defines a parameter subspace name and all the keys that exist for
 * the subspace.
 */

export interface Subspace {
  subspace: string;
  keys: string[];
}
/**
 * Subspace defines a parameter subspace name and all the keys that exist for
 * the subspace.
 */

export interface SubspaceSDKType {
  subspace: string;
  keys: string[];
}