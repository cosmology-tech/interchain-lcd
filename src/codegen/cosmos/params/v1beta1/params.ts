/** ParameterChangeProposal defines a proposal to change one or more parameters. */
export interface ParameterChangeProposal {
  title: string;
  description: string;
  changes: ParamChange[];
}
/** ParameterChangeProposal defines a proposal to change one or more parameters. */

export interface ParameterChangeProposalSDKType {
  title: string;
  description: string;
  changes: ParamChangeSDKType[];
}
/**
 * ParamChange defines an individual parameter change, for use in
 * ParameterChangeProposal.
 */

export interface ParamChange {
  subspace: string;
  key: string;
  value: string;
}
/**
 * ParamChange defines an individual parameter change, for use in
 * ParameterChangeProposal.
 */

export interface ParamChangeSDKType {
  subspace: string;
  key: string;
  value: string;
}