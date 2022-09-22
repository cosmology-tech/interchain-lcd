import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryGroupInfoRequest, QueryGroupInfoResponseSDKType, QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponseSDKType, QueryGroupMembersRequest, QueryGroupMembersResponseSDKType, QueryGroupsByAdminRequest, QueryGroupsByAdminResponseSDKType, QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponseSDKType, QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponseSDKType, QueryProposalRequest, QueryProposalResponseSDKType, QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponseSDKType, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponseSDKType, QueryVotesByProposalRequest, QueryVotesByProposalResponseSDKType, QueryVotesByVoterRequest, QueryVotesByVoterResponseSDKType, QueryGroupsByMemberRequest, QueryGroupsByMemberResponseSDKType, QueryTallyResultRequest, QueryTallyResultResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* GroupInfo queries group info based on group id. */


  groupInfo = async (params: QueryGroupInfoRequest): Promise<QueryGroupInfoResponseSDKType> => {
    const endpoint = `cosmos/group/v1/group_info/${params.group_id}`;
    return await this.req.get<QueryGroupInfoResponseSDKType>(endpoint);
  };
  /* GroupPolicyInfo queries group policy info based on account address of group policy. */

  groupPolicyInfo = async (params: QueryGroupPolicyInfoRequest): Promise<QueryGroupPolicyInfoResponseSDKType> => {
    const endpoint = `cosmos/group/v1/group_policy_info/${params.address}`;
    return await this.req.get<QueryGroupPolicyInfoResponseSDKType>(endpoint);
  };
  /* GroupMembers queries members of a group */

  groupMembers = async (params: QueryGroupMembersRequest): Promise<QueryGroupMembersResponseSDKType> => {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/group/v1/group_members/${params.group_id}`;
    return await this.req.get<QueryGroupMembersResponseSDKType>(endpoint, options);
  };
  /* GroupsByAdmin queries groups by admin address. */

  groupsByAdmin = async (params: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponseSDKType> => {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/group/v1/groups_by_admin/${params.admin}`;
    return await this.req.get<QueryGroupsByAdminResponseSDKType>(endpoint, options);
  };
  /* GroupPoliciesByGroup queries group policies by group id. */

  groupPoliciesByGroup = async (params: QueryGroupPoliciesByGroupRequest): Promise<QueryGroupPoliciesByGroupResponseSDKType> => {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/group/v1/group_policies_by_group/${params.group_id}`;
    return await this.req.get<QueryGroupPoliciesByGroupResponseSDKType>(endpoint, options);
  };
  /* GroupsByAdmin queries group policies by admin address. */

  groupPoliciesByAdmin = async (params: QueryGroupPoliciesByAdminRequest): Promise<QueryGroupPoliciesByAdminResponseSDKType> => {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/group/v1/group_policies_by_admin/${params.admin}`;
    return await this.req.get<QueryGroupPoliciesByAdminResponseSDKType>(endpoint, options);
  };
  /* Proposal queries a proposal based on proposal id. */

  proposal = async (params: QueryProposalRequest): Promise<QueryProposalResponseSDKType> => {
    const endpoint = `cosmos/group/v1/proposal/${params.proposal_id}`;
    return await this.req.get<QueryProposalResponseSDKType>(endpoint);
  };
  /* ProposalsByGroupPolicy queries proposals based on account address of group policy. */

  proposalsByGroupPolicy = async (params: QueryProposalsByGroupPolicyRequest): Promise<QueryProposalsByGroupPolicyResponseSDKType> => {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/group/v1/proposals_by_group_policy/${params.address}`;
    return await this.req.get<QueryProposalsByGroupPolicyResponseSDKType>(endpoint, options);
  };
  /* VoteByProposalVoter queries a vote by proposal id and voter. */

  voteByProposalVoter = async (params: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponseSDKType> => {
    const endpoint = `cosmos/group/v1/vote_by_proposal_voter/${params.proposal_id}/${params.voter}`;
    return await this.req.get<QueryVoteByProposalVoterResponseSDKType>(endpoint);
  };
  /* VotesByProposal queries a vote by proposal. */

  votesByProposal = async (params: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponseSDKType> => {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/group/v1/votes_by_proposal/${params.proposal_id}`;
    return await this.req.get<QueryVotesByProposalResponseSDKType>(endpoint, options);
  };
  /* VotesByVoter queries a vote by voter. */

  votesByVoter = async (params: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponseSDKType> => {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/group/v1/votes_by_voter/${params.voter}`;
    return await this.req.get<QueryVotesByVoterResponseSDKType>(endpoint, options);
  };
  /* GroupsByMember queries groups by member address. */

  groupsByMember = async (params: QueryGroupsByMemberRequest): Promise<QueryGroupsByMemberResponseSDKType> => {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/group/v1/groups_by_member/${params.address}`;
    return await this.req.get<QueryGroupsByMemberResponseSDKType>(endpoint, options);
  };
  /* TallyResult queries the tally of a proposal votes. */

  tallyResult = async (params: QueryTallyResultRequest): Promise<QueryTallyResultResponseSDKType> => {
    const endpoint = `cosmos/group/v1/proposals/${params.proposal_id}/tally`;
    return await this.req.get<QueryTallyResultResponseSDKType>(endpoint);
  };
}