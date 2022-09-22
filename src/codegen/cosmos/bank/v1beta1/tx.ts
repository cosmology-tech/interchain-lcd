import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Input, InputSDKType, Output, OutputSDKType } from "./bank";
/** MsgSend represents a message to send coins from one account to another. */

export interface MsgSend {
  fromAddress: string;
  toAddress: string;
  amount: Coin[];
}
/** MsgSend represents a message to send coins from one account to another. */

export interface MsgSendSDKType {
  from_address: string;
  to_address: string;
  amount: CoinSDKType[];
}
/** MsgSendResponse defines the Msg/Send response type. */

export interface MsgSendResponse {}
/** MsgSendResponse defines the Msg/Send response type. */

export interface MsgSendResponseSDKType {}
/** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */

export interface MsgMultiSend {
  inputs: Input[];
  outputs: Output[];
}
/** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */

export interface MsgMultiSendSDKType {
  inputs: InputSDKType[];
  outputs: OutputSDKType[];
}
/** MsgMultiSendResponse defines the Msg/MultiSend response type. */

export interface MsgMultiSendResponse {}
/** MsgMultiSendResponse defines the Msg/MultiSend response type. */

export interface MsgMultiSendResponseSDKType {}