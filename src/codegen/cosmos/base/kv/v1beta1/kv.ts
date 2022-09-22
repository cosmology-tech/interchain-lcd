/** Pairs defines a repeated slice of Pair objects. */
export interface Pairs {
  pairs: Pair[];
}
/** Pairs defines a repeated slice of Pair objects. */

export interface PairsSDKType {
  pairs: PairSDKType[];
}
/** Pair defines a key/value bytes tuple. */

export interface Pair {
  key: Uint8Array;
  value: Uint8Array;
}
/** Pair defines a key/value bytes tuple. */

export interface PairSDKType {
  key: Uint8Array;
  value: Uint8Array;
}