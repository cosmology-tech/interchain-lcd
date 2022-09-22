import { GroupInfo, GroupInfoSDKType, GroupMember, GroupMemberSDKType, GroupPolicyInfo, GroupPolicyInfoSDKType, Proposal, ProposalSDKType, Vote, VoteSDKType } from "./types";
/** GenesisState defines the group module's genesis state. */

export interface GenesisState {
  /**
   * group_seq is the group table orm.Sequence,
   * it is used to get the next group ID.
   */
  group_seq: Long;
  /** groups is the list of groups info. */

  groups: GroupInfo[];
  /** group_members is the list of groups members. */

  group_members: GroupMember[];
  /**
   * group_policy_seq is the group policy table orm.Sequence,
   * it is used to generate the next group policy account address.
   */

  group_policy_seq: Long;
  /** group_policies is the list of group policies info. */

  group_policies: GroupPolicyInfo[];
  /**
   * proposal_seq is the proposal table orm.Sequence,
   * it is used to get the next proposal ID.
   */

  proposal_seq: Long;
  /** proposals is the list of proposals. */

  proposals: Proposal[];
  /** votes is the list of votes. */

  votes: Vote[];
}
/** GenesisState defines the group module's genesis state. */

export interface GenesisStateSDKType {
  /**
   * group_seq is the group table orm.Sequence,
   * it is used to get the next group ID.
   */
  group_seq: Long;
  /** groups is the list of groups info. */

  groups: GroupInfoSDKType[];
  /** group_members is the list of groups members. */

  group_members: GroupMemberSDKType[];
  /**
   * group_policy_seq is the group policy table orm.Sequence,
   * it is used to generate the next group policy account address.
   */

  group_policy_seq: Long;
  /** group_policies is the list of group policies info. */

  group_policies: GroupPolicyInfoSDKType[];
  /**
   * proposal_seq is the proposal table orm.Sequence,
   * it is used to get the next proposal ID.
   */

  proposal_seq: Long;
  /** proposals is the list of proposals. */

  proposals: ProposalSDKType[];
  /** votes is the list of votes. */

  votes: VoteSDKType[];
}