/**
 * PubKey defines a secp256k1 public key
 * Key is the compressed form of the pubkey. The first byte depends is a 0x02 byte
 * if the y-coordinate is the lexicographically largest of the two associated with
 * the x-coordinate. Otherwise the first byte is a 0x03.
 * This prefix is followed with the x-coordinate.
 */
export interface PubKey {
  key: Uint8Array;
}
/**
 * PubKey defines a secp256k1 public key
 * Key is the compressed form of the pubkey. The first byte depends is a 0x02 byte
 * if the y-coordinate is the lexicographically largest of the two associated with
 * the x-coordinate. Otherwise the first byte is a 0x03.
 * This prefix is followed with the x-coordinate.
 */

export interface PubKeySDKType {
  key: Uint8Array;
}
/** PrivKey defines a secp256k1 private key. */

export interface PrivKey {
  key: Uint8Array;
}
/** PrivKey defines a secp256k1 private key. */

export interface PrivKeySDKType {
  key: Uint8Array;
}