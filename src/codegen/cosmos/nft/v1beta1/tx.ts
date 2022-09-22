/** MsgSend represents a message to send a nft from one account to another account. */
export interface MsgSend {
  /** class_id defines the unique identifier of the nft classification, similar to the contract address of ERC721 */
  class_id: string;
  /** id defines the unique identification of nft */

  id: string;
  /** sender is the address of the owner of nft */

  sender: string;
  /** receiver is the receiver address of nft */

  receiver: string;
}
/** MsgSend represents a message to send a nft from one account to another account. */

export interface MsgSendSDKType {
  /** class_id defines the unique identifier of the nft classification, similar to the contract address of ERC721 */
  class_id: string;
  /** id defines the unique identification of nft */

  id: string;
  /** sender is the address of the owner of nft */

  sender: string;
  /** receiver is the receiver address of nft */

  receiver: string;
}
/** MsgSendResponse defines the Msg/Send response type. */

export interface MsgSendResponse {}
/** MsgSendResponse defines the Msg/Send response type. */

export interface MsgSendResponseSDKType {}