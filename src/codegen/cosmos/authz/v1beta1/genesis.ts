import { GrantAuthorization, GrantAuthorizationSDKType } from "./authz";
/** GenesisState defines the authz module's genesis state. */

export interface GenesisState {
  authorization: GrantAuthorization[];
}
/** GenesisState defines the authz module's genesis state. */

export interface GenesisStateSDKType {
  authorization: GrantAuthorizationSDKType[];
}