import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponseSDKType, QueryValidatorCommissionRequest, QueryValidatorCommissionResponseSDKType, QueryValidatorSlashesRequest, QueryValidatorSlashesResponseSDKType, QueryDelegationRewardsRequest, QueryDelegationRewardsResponseSDKType, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponseSDKType, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponseSDKType, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponseSDKType, QueryCommunityPoolRequest, QueryCommunityPoolResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Params queries params of the distribution module. */


  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> => {
    const endpoint = `cosmos/distribution/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  };
  /* ValidatorOutstandingRewards queries rewards of a validator address. */

  validatorOutstandingRewards = async (params: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponseSDKType> => {
    const endpoint = `cosmos/distribution/v1beta1/validators/${params.validator_address}/outstanding_rewards`;
    return await this.req.get<QueryValidatorOutstandingRewardsResponseSDKType>(endpoint);
  };
  /* ValidatorCommission queries accumulated commission for a validator. */

  validatorCommission = async (params: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponseSDKType> => {
    const endpoint = `cosmos/distribution/v1beta1/validators/${params.validator_address}/commission`;
    return await this.req.get<QueryValidatorCommissionResponseSDKType>(endpoint);
  };
  /* ValidatorSlashes queries slash events of a validator. */

  validatorSlashes = async (params: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponseSDKType> => {
    const options: any = {
      params: {}
    };

    if (typeof params?.starting_height !== "undefined") {
      options.params.starting_height = params.starting_height;
    }

    if (typeof params?.ending_height !== "undefined") {
      options.params.ending_height = params.ending_height;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/distribution/v1beta1/validators/${params.validator_address}/slashes`;
    return await this.req.get<QueryValidatorSlashesResponseSDKType>(endpoint, options);
  };
  /* DelegationRewards queries the total rewards accrued by a delegation. */

  delegationRewards = async (params: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponseSDKType> => {
    const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegator_address}rewards/${params.validator_address}`;
    return await this.req.get<QueryDelegationRewardsResponseSDKType>(endpoint);
  };
  /* DelegationTotalRewards queries the total rewards accrued by a each
  validator. */

  delegationTotalRewards = async (params: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponseSDKType> => {
    const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegator_address}/rewards`;
    return await this.req.get<QueryDelegationTotalRewardsResponseSDKType>(endpoint);
  };
  /* DelegatorValidators queries the validators of a delegator. */

  delegatorValidators = async (params: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponseSDKType> => {
    const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegator_address}/validators`;
    return await this.req.get<QueryDelegatorValidatorsResponseSDKType>(endpoint);
  };
  /* DelegatorWithdrawAddress queries withdraw address of a delegator. */

  delegatorWithdrawAddress = async (params: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponseSDKType> => {
    const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegator_address}/withdraw_address`;
    return await this.req.get<QueryDelegatorWithdrawAddressResponseSDKType>(endpoint);
  };
  /* CommunityPool queries the community pool coins. */

  communityPool = async (_params: QueryCommunityPoolRequest = {}): Promise<QueryCommunityPoolResponseSDKType> => {
    const endpoint = `cosmos/distribution/v1beta1/community_pool`;
    return await this.req.get<QueryCommunityPoolResponseSDKType>(endpoint);
  };
}