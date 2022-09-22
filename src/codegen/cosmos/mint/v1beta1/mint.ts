/** Minter represents the minting state. */
export interface Minter {
  /** current annual inflation rate */
  inflation: string;
  /** current annual expected provisions */

  annual_provisions: string;
}
/** Minter represents the minting state. */

export interface MinterSDKType {
  /** current annual inflation rate */
  inflation: string;
  /** current annual expected provisions */

  annual_provisions: string;
}
/** Params holds parameters for the mint module. */

export interface Params {
  /** type of coin to mint */
  mint_denom: string;
  /** maximum annual change in inflation rate */

  inflation_rate_change: string;
  /** maximum inflation rate */

  inflation_max: string;
  /** minimum inflation rate */

  inflation_min: string;
  /** goal of percent bonded atoms */

  goal_bonded: string;
  /** expected blocks per year */

  blocks_per_year: Long;
}
/** Params holds parameters for the mint module. */

export interface ParamsSDKType {
  /** type of coin to mint */
  mint_denom: string;
  /** maximum annual change in inflation rate */

  inflation_rate_change: string;
  /** maximum inflation rate */

  inflation_max: string;
  /** minimum inflation rate */

  inflation_min: string;
  /** goal of percent bonded atoms */

  goal_bonded: string;
  /** expected blocks per year */

  blocks_per_year: Long;
}