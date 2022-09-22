import { Deposit, DepositSDKType, Vote, VoteSDKType, Proposal, ProposalSDKType, DepositParams, DepositParamsSDKType, VotingParams, VotingParamsSDKType, TallyParams, TallyParamsSDKType } from "./gov";
/** GenesisState defines the gov module's genesis state. */

export interface GenesisState {
  /** starting_proposal_id is the ID of the starting proposal. */
  starting_proposal_id: Long;
  /** deposits defines all the deposits present at genesis. */

  deposits: Deposit[];
  /** votes defines all the votes present at genesis. */

  votes: Vote[];
  /** proposals defines all the proposals present at genesis. */

  proposals: Proposal[];
  /** params defines all the paramaters of related to deposit. */

  deposit_params: DepositParams;
  /** params defines all the paramaters of related to voting. */

  voting_params: VotingParams;
  /** params defines all the paramaters of related to tally. */

  tally_params: TallyParams;
}
/** GenesisState defines the gov module's genesis state. */

export interface GenesisStateSDKType {
  /** starting_proposal_id is the ID of the starting proposal. */
  starting_proposal_id: Long;
  /** deposits defines all the deposits present at genesis. */

  deposits: DepositSDKType[];
  /** votes defines all the votes present at genesis. */

  votes: VoteSDKType[];
  /** proposals defines all the proposals present at genesis. */

  proposals: ProposalSDKType[];
  /** params defines all the paramaters of related to deposit. */

  deposit_params: DepositParamsSDKType;
  /** params defines all the paramaters of related to voting. */

  voting_params: VotingParamsSDKType;
  /** params defines all the paramaters of related to tally. */

  tally_params: TallyParamsSDKType;
}