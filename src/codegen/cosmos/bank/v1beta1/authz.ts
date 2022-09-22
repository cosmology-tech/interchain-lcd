import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
/**
 * SendAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account.
 * 
 * Since: cosmos-sdk 0.43
 */

export interface SendAuthorization {
  spendLimit: Coin[];
}
/**
 * SendAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account.
 * 
 * Since: cosmos-sdk 0.43
 */

export interface SendAuthorizationSDKType {
  spend_limit: CoinSDKType[];
}