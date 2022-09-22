import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Params, ParamsSDKType, Metadata, MetadataSDKType } from "./bank";
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */

export interface QueryBalanceRequest {
  /** address is the address to query balances for. */
  address: string;
  /** denom is the coin denom to query balances for. */

  denom: string;
}
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */

export interface QueryBalanceRequestSDKType {
  /** address is the address to query balances for. */
  address: string;
  /** denom is the coin denom to query balances for. */

  denom: string;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */

export interface QueryBalanceResponse {
  /** balance is the balance of the coin. */
  balance: Coin;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */

export interface QueryBalanceResponseSDKType {
  /** balance is the balance of the coin. */
  balance: CoinSDKType;
}
/** QueryBalanceRequest is the request type for the Query/AllBalances RPC method. */

export interface QueryAllBalancesRequest {
  /** address is the address to query balances for. */
  address: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequest;
}
/** QueryBalanceRequest is the request type for the Query/AllBalances RPC method. */

export interface QueryAllBalancesRequestSDKType {
  /** address is the address to query balances for. */
  address: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequestSDKType;
}
/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 */

export interface QueryAllBalancesResponse {
  /** balances is the balances of all the coins. */
  balances: Coin[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 */

export interface QueryAllBalancesResponseSDKType {
  /** balances is the balances of all the coins. */
  balances: CoinSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}
/**
 * QuerySpendableBalancesRequest defines the gRPC request structure for querying
 * an account's spendable balances.
 */

export interface QuerySpendableBalancesRequest {
  /** address is the address to query spendable balances for. */
  address: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequest;
}
/**
 * QuerySpendableBalancesRequest defines the gRPC request structure for querying
 * an account's spendable balances.
 */

export interface QuerySpendableBalancesRequestSDKType {
  /** address is the address to query spendable balances for. */
  address: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequestSDKType;
}
/**
 * QuerySpendableBalancesResponse defines the gRPC response structure for querying
 * an account's spendable balances.
 */

export interface QuerySpendableBalancesResponse {
  /** balances is the spendable balances of all the coins. */
  balances: Coin[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/**
 * QuerySpendableBalancesResponse defines the gRPC response structure for querying
 * an account's spendable balances.
 */

export interface QuerySpendableBalancesResponseSDKType {
  /** balances is the spendable balances of all the coins. */
  balances: CoinSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}
/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */

export interface QueryTotalSupplyRequest {
  /**
   * pagination defines an optional pagination for the request.
   * 
   * Since: cosmos-sdk 0.43
   */
  pagination?: PageRequest;
}
/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */

export interface QueryTotalSupplyRequestSDKType {
  /**
   * pagination defines an optional pagination for the request.
   * 
   * Since: cosmos-sdk 0.43
   */
  pagination?: PageRequestSDKType;
}
/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */

export interface QueryTotalSupplyResponse {
  /** supply is the supply of the coins */
  supply: Coin[];
  /**
   * pagination defines the pagination in the response.
   * 
   * Since: cosmos-sdk 0.43
   */

  pagination?: PageResponse;
}
/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */

export interface QueryTotalSupplyResponseSDKType {
  /** supply is the supply of the coins */
  supply: CoinSDKType[];
  /**
   * pagination defines the pagination in the response.
   * 
   * Since: cosmos-sdk 0.43
   */

  pagination?: PageResponseSDKType;
}
/** QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method. */

export interface QuerySupplyOfRequest {
  /** denom is the coin denom to query balances for. */
  denom?: string;
}
/** QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method. */

export interface QuerySupplyOfRequestSDKType {
  /** denom is the coin denom to query balances for. */
  denom?: string;
}
/** QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method. */

export interface QuerySupplyOfResponse {
  /** amount is the supply of the coin. */
  amount: Coin;
}
/** QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method. */

export interface QuerySupplyOfResponseSDKType {
  /** amount is the supply of the coin. */
  amount: CoinSDKType;
}
/** QueryParamsRequest defines the request type for querying x/bank parameters. */

export interface QueryParamsRequest {}
/** QueryParamsRequest defines the request type for querying x/bank parameters. */

export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse defines the response type for querying x/bank parameters. */

export interface QueryParamsResponse {
  params: Params;
}
/** QueryParamsResponse defines the response type for querying x/bank parameters. */

export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryDenomsMetadataRequest is the request type for the Query/DenomsMetadata RPC method. */

export interface QueryDenomsMetadataRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/** QueryDenomsMetadataRequest is the request type for the Query/DenomsMetadata RPC method. */

export interface QueryDenomsMetadataRequestSDKType {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestSDKType;
}
/**
 * QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
 * method.
 */

export interface QueryDenomsMetadataResponse {
  /** metadata provides the client information for all the registered tokens. */
  metadatas: Metadata[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/**
 * QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
 * method.
 */

export interface QueryDenomsMetadataResponseSDKType {
  /** metadata provides the client information for all the registered tokens. */
  metadatas: MetadataSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}
/** QueryDenomMetadataRequest is the request type for the Query/DenomMetadata RPC method. */

export interface QueryDenomMetadataRequest {
  /** denom is the coin denom to query the metadata for. */
  denom: string;
}
/** QueryDenomMetadataRequest is the request type for the Query/DenomMetadata RPC method. */

export interface QueryDenomMetadataRequestSDKType {
  /** denom is the coin denom to query the metadata for. */
  denom: string;
}
/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
 * method.
 */

export interface QueryDenomMetadataResponse {
  /** metadata describes and provides all the client information for the requested token. */
  metadata: Metadata;
}
/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
 * method.
 */

export interface QueryDenomMetadataResponseSDKType {
  /** metadata describes and provides all the client information for the requested token. */
  metadata: MetadataSDKType;
}
/**
 * QueryDenomOwnersRequest defines the request type for the DenomOwners RPC query,
 * which queries for a paginated set of all account holders of a particular
 * denomination.
 */

export interface QueryDenomOwnersRequest {
  /** denom defines the coin denomination to query all account holders for. */
  denom: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequest;
}
/**
 * QueryDenomOwnersRequest defines the request type for the DenomOwners RPC query,
 * which queries for a paginated set of all account holders of a particular
 * denomination.
 */

export interface QueryDenomOwnersRequestSDKType {
  /** denom defines the coin denomination to query all account holders for. */
  denom: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequestSDKType;
}
/**
 * DenomOwner defines structure representing an account that owns or holds a
 * particular denominated token. It contains the account address and account
 * balance of the denominated token.
 */

export interface DenomOwner {
  /** address defines the address that owns a particular denomination. */
  address: string;
  /** balance is the balance of the denominated coin for an account. */

  balance: Coin;
}
/**
 * DenomOwner defines structure representing an account that owns or holds a
 * particular denominated token. It contains the account address and account
 * balance of the denominated token.
 */

export interface DenomOwnerSDKType {
  /** address defines the address that owns a particular denomination. */
  address: string;
  /** balance is the balance of the denominated coin for an account. */

  balance: CoinSDKType;
}
/** QueryDenomOwnersResponse defines the RPC response of a DenomOwners RPC query. */

export interface QueryDenomOwnersResponse {
  denomOwners: DenomOwner[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/** QueryDenomOwnersResponse defines the RPC response of a DenomOwners RPC query. */

export interface QueryDenomOwnersResponseSDKType {
  denom_owners: DenomOwnerSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}