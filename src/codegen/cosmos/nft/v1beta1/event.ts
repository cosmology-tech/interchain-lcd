/** EventSend is emitted on Msg/Send */
export interface EventSend {
  class_id: string;
  id: string;
  sender: string;
  receiver: string;
}
/** EventSend is emitted on Msg/Send */

export interface EventSendSDKType {
  class_id: string;
  id: string;
  sender: string;
  receiver: string;
}
/** EventMint is emitted on Mint */

export interface EventMint {
  class_id: string;
  id: string;
  owner: string;
}
/** EventMint is emitted on Mint */

export interface EventMintSDKType {
  class_id: string;
  id: string;
  owner: string;
}
/** EventBurn is emitted on Burn */

export interface EventBurn {
  class_id: string;
  id: string;
  owner: string;
}
/** EventBurn is emitted on Burn */

export interface EventBurnSDKType {
  class_id: string;
  id: string;
  owner: string;
}