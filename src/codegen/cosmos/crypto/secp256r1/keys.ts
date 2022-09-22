/** PubKey defines a secp256r1 ECDSA public key. */
export interface PubKey {
  /**
   * Point on secp256r1 curve in a compressed representation as specified in section
   * 4.3.6 of ANSI X9.62: https://webstore.ansi.org/standards/ascx9/ansix9621998
   */
  key: Uint8Array;
}
/** PubKey defines a secp256r1 ECDSA public key. */

export interface PubKeySDKType {
  /**
   * Point on secp256r1 curve in a compressed representation as specified in section
   * 4.3.6 of ANSI X9.62: https://webstore.ansi.org/standards/ascx9/ansix9621998
   */
  key: Uint8Array;
}
/** PrivKey defines a secp256r1 ECDSA private key. */

export interface PrivKey {
  /** secret number serialized using big-endian encoding */
  secret: Uint8Array;
}
/** PrivKey defines a secp256r1 ECDSA private key. */

export interface PrivKeySDKType {
  /** secret number serialized using big-endian encoding */
  secret: Uint8Array;
}