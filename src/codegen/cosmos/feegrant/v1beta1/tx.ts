import { Any, AnySDKType } from "../../../google/protobuf/any";
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */

export interface MsgGrantAllowance {
  /** granter is the address of the user granting an allowance of their funds. */
  granter: string;
  /** grantee is the address of the user being granted an allowance of another user's funds. */

  grantee: string;
  /** allowance can be any of basic, periodic, allowed fee allowance. */

  allowance: Any;
}
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */

export interface MsgGrantAllowanceSDKType {
  /** granter is the address of the user granting an allowance of their funds. */
  granter: string;
  /** grantee is the address of the user being granted an allowance of another user's funds. */

  grantee: string;
  /** allowance can be any of basic, periodic, allowed fee allowance. */

  allowance: AnySDKType;
}
/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */

export interface MsgGrantAllowanceResponse {}
/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */

export interface MsgGrantAllowanceResponseSDKType {}
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */

export interface MsgRevokeAllowance {
  /** granter is the address of the user granting an allowance of their funds. */
  granter: string;
  /** grantee is the address of the user being granted an allowance of another user's funds. */

  grantee: string;
}
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */

export interface MsgRevokeAllowanceSDKType {
  /** granter is the address of the user granting an allowance of their funds. */
  granter: string;
  /** grantee is the address of the user being granted an allowance of another user's funds. */

  grantee: string;
}
/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */

export interface MsgRevokeAllowanceResponse {}
/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */

export interface MsgRevokeAllowanceResponseSDKType {}