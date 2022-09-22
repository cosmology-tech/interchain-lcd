import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { GroupInfo, GroupInfoSDKType, GroupPolicyInfo, GroupPolicyInfoSDKType, GroupMember, GroupMemberSDKType, Proposal, ProposalSDKType, Vote, VoteSDKType, TallyResult, TallyResultSDKType } from "./types";
/** QueryGroupInfoRequest is the Query/GroupInfo request type. */

export interface QueryGroupInfoRequest {
  /** group_id is the unique ID of the group. */
  group_id: Long;
}
/** QueryGroupInfoRequest is the Query/GroupInfo request type. */

export interface QueryGroupInfoRequestSDKType {
  /** group_id is the unique ID of the group. */
  group_id: Long;
}
/** QueryGroupInfoResponse is the Query/GroupInfo response type. */

export interface QueryGroupInfoResponse {
  /** info is the GroupInfo for the group. */
  info: GroupInfo;
}
/** QueryGroupInfoResponse is the Query/GroupInfo response type. */

export interface QueryGroupInfoResponseSDKType {
  /** info is the GroupInfo for the group. */
  info: GroupInfoSDKType;
}
/** QueryGroupPolicyInfoRequest is the Query/GroupPolicyInfo request type. */

export interface QueryGroupPolicyInfoRequest {
  /** address is the account address of the group policy. */
  address: string;
}
/** QueryGroupPolicyInfoRequest is the Query/GroupPolicyInfo request type. */

export interface QueryGroupPolicyInfoRequestSDKType {
  /** address is the account address of the group policy. */
  address: string;
}
/** QueryGroupPolicyInfoResponse is the Query/GroupPolicyInfo response type. */

export interface QueryGroupPolicyInfoResponse {
  /** info is the GroupPolicyInfo for the group policy. */
  info: GroupPolicyInfo;
}
/** QueryGroupPolicyInfoResponse is the Query/GroupPolicyInfo response type. */

export interface QueryGroupPolicyInfoResponseSDKType {
  /** info is the GroupPolicyInfo for the group policy. */
  info: GroupPolicyInfoSDKType;
}
/** QueryGroupMembersRequest is the Query/GroupMembers request type. */

export interface QueryGroupMembersRequest {
  /** group_id is the unique ID of the group. */
  group_id: Long;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequest;
}
/** QueryGroupMembersRequest is the Query/GroupMembers request type. */

export interface QueryGroupMembersRequestSDKType {
  /** group_id is the unique ID of the group. */
  group_id: Long;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequestSDKType;
}
/** QueryGroupMembersResponse is the Query/GroupMembersResponse response type. */

export interface QueryGroupMembersResponse {
  /** members are the members of the group with given group_id. */
  members: GroupMember[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/** QueryGroupMembersResponse is the Query/GroupMembersResponse response type. */

export interface QueryGroupMembersResponseSDKType {
  /** members are the members of the group with given group_id. */
  members: GroupMemberSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}
/** QueryGroupsByAdminRequest is the Query/GroupsByAdmin request type. */

export interface QueryGroupsByAdminRequest {
  /** admin is the account address of a group's admin. */
  admin: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequest;
}
/** QueryGroupsByAdminRequest is the Query/GroupsByAdmin request type. */

export interface QueryGroupsByAdminRequestSDKType {
  /** admin is the account address of a group's admin. */
  admin: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequestSDKType;
}
/** QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type. */

export interface QueryGroupsByAdminResponse {
  /** groups are the groups info with the provided admin. */
  groups: GroupInfo[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/** QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type. */

export interface QueryGroupsByAdminResponseSDKType {
  /** groups are the groups info with the provided admin. */
  groups: GroupInfoSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}
/** QueryGroupPoliciesByGroupRequest is the Query/GroupPoliciesByGroup request type. */

export interface QueryGroupPoliciesByGroupRequest {
  /** group_id is the unique ID of the group policy's group. */
  group_id: Long;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequest;
}
/** QueryGroupPoliciesByGroupRequest is the Query/GroupPoliciesByGroup request type. */

export interface QueryGroupPoliciesByGroupRequestSDKType {
  /** group_id is the unique ID of the group policy's group. */
  group_id: Long;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequestSDKType;
}
/** QueryGroupPoliciesByGroupResponse is the Query/GroupPoliciesByGroup response type. */

export interface QueryGroupPoliciesByGroupResponse {
  /** group_policies are the group policies info associated with the provided group. */
  group_policies: GroupPolicyInfo[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/** QueryGroupPoliciesByGroupResponse is the Query/GroupPoliciesByGroup response type. */

export interface QueryGroupPoliciesByGroupResponseSDKType {
  /** group_policies are the group policies info associated with the provided group. */
  group_policies: GroupPolicyInfoSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}
/** QueryGroupPoliciesByAdminRequest is the Query/GroupPoliciesByAdmin request type. */

export interface QueryGroupPoliciesByAdminRequest {
  /** admin is the admin address of the group policy. */
  admin: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequest;
}
/** QueryGroupPoliciesByAdminRequest is the Query/GroupPoliciesByAdmin request type. */

export interface QueryGroupPoliciesByAdminRequestSDKType {
  /** admin is the admin address of the group policy. */
  admin: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequestSDKType;
}
/** QueryGroupPoliciesByAdminResponse is the Query/GroupPoliciesByAdmin response type. */

export interface QueryGroupPoliciesByAdminResponse {
  /** group_policies are the group policies info with provided admin. */
  group_policies: GroupPolicyInfo[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/** QueryGroupPoliciesByAdminResponse is the Query/GroupPoliciesByAdmin response type. */

export interface QueryGroupPoliciesByAdminResponseSDKType {
  /** group_policies are the group policies info with provided admin. */
  group_policies: GroupPolicyInfoSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}
/** QueryProposalRequest is the Query/Proposal request type. */

export interface QueryProposalRequest {
  /** proposal_id is the unique ID of a proposal. */
  proposal_id: Long;
}
/** QueryProposalRequest is the Query/Proposal request type. */

export interface QueryProposalRequestSDKType {
  /** proposal_id is the unique ID of a proposal. */
  proposal_id: Long;
}
/** QueryProposalResponse is the Query/Proposal response type. */

export interface QueryProposalResponse {
  /** proposal is the proposal info. */
  proposal: Proposal;
}
/** QueryProposalResponse is the Query/Proposal response type. */

export interface QueryProposalResponseSDKType {
  /** proposal is the proposal info. */
  proposal: ProposalSDKType;
}
/** QueryProposalsByGroupPolicyRequest is the Query/ProposalByGroupPolicy request type. */

export interface QueryProposalsByGroupPolicyRequest {
  /** address is the account address of the group policy related to proposals. */
  address: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequest;
}
/** QueryProposalsByGroupPolicyRequest is the Query/ProposalByGroupPolicy request type. */

export interface QueryProposalsByGroupPolicyRequestSDKType {
  /** address is the account address of the group policy related to proposals. */
  address: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequestSDKType;
}
/** QueryProposalsByGroupPolicyResponse is the Query/ProposalByGroupPolicy response type. */

export interface QueryProposalsByGroupPolicyResponse {
  /** proposals are the proposals with given group policy. */
  proposals: Proposal[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/** QueryProposalsByGroupPolicyResponse is the Query/ProposalByGroupPolicy response type. */

export interface QueryProposalsByGroupPolicyResponseSDKType {
  /** proposals are the proposals with given group policy. */
  proposals: ProposalSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}
/** QueryVoteByProposalVoterRequest is the Query/VoteByProposalVoter request type. */

export interface QueryVoteByProposalVoterRequest {
  /** proposal_id is the unique ID of a proposal. */
  proposal_id: Long;
  /** voter is a proposal voter account address. */

  voter: string;
}
/** QueryVoteByProposalVoterRequest is the Query/VoteByProposalVoter request type. */

export interface QueryVoteByProposalVoterRequestSDKType {
  /** proposal_id is the unique ID of a proposal. */
  proposal_id: Long;
  /** voter is a proposal voter account address. */

  voter: string;
}
/** QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response type. */

export interface QueryVoteByProposalVoterResponse {
  /** vote is the vote with given proposal_id and voter. */
  vote: Vote;
}
/** QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response type. */

export interface QueryVoteByProposalVoterResponseSDKType {
  /** vote is the vote with given proposal_id and voter. */
  vote: VoteSDKType;
}
/** QueryVotesByProposalRequest is the Query/VotesByProposal request type. */

export interface QueryVotesByProposalRequest {
  /** proposal_id is the unique ID of a proposal. */
  proposal_id: Long;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequest;
}
/** QueryVotesByProposalRequest is the Query/VotesByProposal request type. */

export interface QueryVotesByProposalRequestSDKType {
  /** proposal_id is the unique ID of a proposal. */
  proposal_id: Long;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequestSDKType;
}
/** QueryVotesByProposalResponse is the Query/VotesByProposal response type. */

export interface QueryVotesByProposalResponse {
  /** votes are the list of votes for given proposal_id. */
  votes: Vote[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/** QueryVotesByProposalResponse is the Query/VotesByProposal response type. */

export interface QueryVotesByProposalResponseSDKType {
  /** votes are the list of votes for given proposal_id. */
  votes: VoteSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}
/** QueryVotesByVoterRequest is the Query/VotesByVoter request type. */

export interface QueryVotesByVoterRequest {
  /** voter is a proposal voter account address. */
  voter: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequest;
}
/** QueryVotesByVoterRequest is the Query/VotesByVoter request type. */

export interface QueryVotesByVoterRequestSDKType {
  /** voter is a proposal voter account address. */
  voter: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequestSDKType;
}
/** QueryVotesByVoterResponse is the Query/VotesByVoter response type. */

export interface QueryVotesByVoterResponse {
  /** votes are the list of votes by given voter. */
  votes: Vote[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/** QueryVotesByVoterResponse is the Query/VotesByVoter response type. */

export interface QueryVotesByVoterResponseSDKType {
  /** votes are the list of votes by given voter. */
  votes: VoteSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}
/** QueryGroupsByMemberRequest is the Query/GroupsByMember request type. */

export interface QueryGroupsByMemberRequest {
  /** address is the group member address. */
  address: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequest;
}
/** QueryGroupsByMemberRequest is the Query/GroupsByMember request type. */

export interface QueryGroupsByMemberRequestSDKType {
  /** address is the group member address. */
  address: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequestSDKType;
}
/** QueryGroupsByMemberResponse is the Query/GroupsByMember response type. */

export interface QueryGroupsByMemberResponse {
  /** groups are the groups info with the provided group member. */
  groups: GroupInfo[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/** QueryGroupsByMemberResponse is the Query/GroupsByMember response type. */

export interface QueryGroupsByMemberResponseSDKType {
  /** groups are the groups info with the provided group member. */
  groups: GroupInfoSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}
/** QueryTallyResultRequest is the Query/TallyResult request type. */

export interface QueryTallyResultRequest {
  /** proposal_id is the unique id of a proposal. */
  proposal_id: Long;
}
/** QueryTallyResultRequest is the Query/TallyResult request type. */

export interface QueryTallyResultRequestSDKType {
  /** proposal_id is the unique id of a proposal. */
  proposal_id: Long;
}
/** QueryTallyResultResponse is the Query/TallyResult response type. */

export interface QueryTallyResultResponse {
  /** tally defines the requested tally. */
  tally: TallyResult;
}
/** QueryTallyResultResponse is the Query/TallyResult response type. */

export interface QueryTallyResultResponseSDKType {
  /** tally defines the requested tally. */
  tally: TallyResultSDKType;
}