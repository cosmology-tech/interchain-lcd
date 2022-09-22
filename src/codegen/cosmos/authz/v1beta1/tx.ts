import { Grant, GrantSDKType } from "./authz";
import { Any, AnySDKType } from "../../../google/protobuf/any";
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */

export interface MsgGrant {
  granter: string;
  grantee: string;
  grant: Grant;
}
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */

export interface MsgGrantSDKType {
  granter: string;
  grantee: string;
  grant: GrantSDKType;
}
/** MsgExecResponse defines the Msg/MsgExecResponse response type. */

export interface MsgExecResponse {
  results: Uint8Array[];
}
/** MsgExecResponse defines the Msg/MsgExecResponse response type. */

export interface MsgExecResponseSDKType {
  results: Uint8Array[];
}
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 */

export interface MsgExec {
  grantee: string;
  /**
   * Authorization Msg requests to execute. Each msg must implement Authorization interface
   * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
   * triple and validate it.
   */

  msgs: Any[];
}
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 */

export interface MsgExecSDKType {
  grantee: string;
  /**
   * Authorization Msg requests to execute. Each msg must implement Authorization interface
   * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
   * triple and validate it.
   */

  msgs: AnySDKType[];
}
/** MsgGrantResponse defines the Msg/MsgGrant response type. */

export interface MsgGrantResponse {}
/** MsgGrantResponse defines the Msg/MsgGrant response type. */

export interface MsgGrantResponseSDKType {}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 */

export interface MsgRevoke {
  granter: string;
  grantee: string;
  msg_type_url: string;
}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 */

export interface MsgRevokeSDKType {
  granter: string;
  grantee: string;
  msg_type_url: string;
}
/** MsgRevokeResponse defines the Msg/MsgRevokeResponse response type. */

export interface MsgRevokeResponse {}
/** MsgRevokeResponse defines the Msg/MsgRevokeResponse response type. */

export interface MsgRevokeResponseSDKType {}