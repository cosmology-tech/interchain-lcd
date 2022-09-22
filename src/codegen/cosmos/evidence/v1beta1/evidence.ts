/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */
export interface Equivocation {
  height: Long;
  time: Date;
  power: Long;
  consensus_address: string;
}
/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */

export interface EquivocationSDKType {
  height: Long;
  time: Date;
  power: Long;
  consensus_address: string;
}