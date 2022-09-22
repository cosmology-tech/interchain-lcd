import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryProposalRequest, QueryProposalResponseSDKType, QueryProposalsRequest, QueryProposalsResponseSDKType, QueryVoteRequest, QueryVoteResponseSDKType, QueryVotesRequest, QueryVotesResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryDepositRequest, QueryDepositResponseSDKType, QueryDepositsRequest, QueryDepositsResponseSDKType, QueryTallyResultRequest, QueryTallyResultResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Proposal queries proposal details based on ProposalID. */


  proposal = async (params: QueryProposalRequest): Promise<QueryProposalResponseSDKType> => {
    const endpoint = `cosmos/gov/v1beta1/proposals/${params.proposal_id}`;
    return await this.req.get<QueryProposalResponseSDKType>(endpoint);
  };
  /* Proposals queries all proposals based on given status. */

  proposals = async (params: QueryProposalsRequest): Promise<QueryProposalsResponseSDKType> => {
    const options: any = {
      params: {}
    };

    if (typeof params?.proposal_status !== "undefined") {
      options.params.proposal_status = params.proposal_status;
    }

    if (typeof params?.voter !== "undefined") {
      options.params.voter = params.voter;
    }

    if (typeof params?.depositor !== "undefined") {
      options.params.depositor = params.depositor;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/gov/v1beta1/proposals`;
    return await this.req.get<QueryProposalsResponseSDKType>(endpoint, options);
  };
  /* Vote queries voted information based on proposalID, voterAddr. */

  vote = async (params: QueryVoteRequest): Promise<QueryVoteResponseSDKType> => {
    const endpoint = `cosmos/gov/v1beta1/proposals/${params.proposal_id}votes/${params.voter}`;
    return await this.req.get<QueryVoteResponseSDKType>(endpoint);
  };
  /* Votes queries votes of a given proposal. */

  votes = async (params: QueryVotesRequest): Promise<QueryVotesResponseSDKType> => {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/gov/v1beta1/proposals/${params.proposal_id}/votes`;
    return await this.req.get<QueryVotesResponseSDKType>(endpoint, options);
  };
  /* Params queries all parameters of the gov module. */

  params = async (params: QueryParamsRequest): Promise<QueryParamsResponseSDKType> => {
    const endpoint = `cosmos/gov/v1beta1/params/${params.params_type}`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  };
  /* Deposit queries single deposit information based proposalID, depositAddr. */

  deposit = async (params: QueryDepositRequest): Promise<QueryDepositResponseSDKType> => {
    const endpoint = `cosmos/gov/v1beta1/proposals/${params.proposal_id}deposits/${params.depositor}`;
    return await this.req.get<QueryDepositResponseSDKType>(endpoint);
  };
  /* Deposits queries all deposits of a single proposal. */

  deposits = async (params: QueryDepositsRequest): Promise<QueryDepositsResponseSDKType> => {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/gov/v1beta1/proposals/${params.proposal_id}/deposits`;
    return await this.req.get<QueryDepositsResponseSDKType>(endpoint, options);
  };
  /* TallyResult queries the tally of a proposal vote. */

  tallyResult = async (params: QueryTallyResultRequest): Promise<QueryTallyResultResponseSDKType> => {
    const endpoint = `cosmos/gov/v1beta1/proposals/${params.proposal_id}/tally`;
    return await this.req.get<QueryTallyResultResponseSDKType>(endpoint);
  };
}