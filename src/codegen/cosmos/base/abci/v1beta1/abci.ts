import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { Event, EventSDKType } from "../../../../tendermint/abci/types";
/**
 * TxResponse defines a structure containing relevant tx data and metadata. The
 * tags are stringified and the log is JSON decoded.
 */

export interface TxResponse {
  /** The block height */
  height: Long;
  /** The transaction hash. */

  txhash: string;
  /** Namespace for the Code */

  codespace: string;
  /** Response code. */

  code: number;
  /** Result bytes, if any. */

  data: string;
  /**
   * The output of the application's logger (raw string). May be
   * non-deterministic.
   */

  raw_log: string;
  /** The output of the application's logger (typed). May be non-deterministic. */

  logs: ABCIMessageLog[];
  /** Additional information. May be non-deterministic. */

  info: string;
  /** Amount of gas requested for transaction. */

  gas_wanted: Long;
  /** Amount of gas consumed by transaction. */

  gas_used: Long;
  /** The request transaction bytes. */

  tx: Any;
  /**
   * Time of the previous block. For heights > 1, it's the weighted median of
   * the timestamps of the valid votes in the block.LastCommit. For height == 1,
   * it's genesis time.
   */

  timestamp: string;
  /**
   * Events defines all the events emitted by processing a transaction. Note,
   * these events include those emitted by processing all the messages and those
   * emitted from the ante handler. Whereas Logs contains the events, with
   * additional metadata, emitted only by processing the messages.
   * 
   * Since: cosmos-sdk 0.42.11, 0.44.5, 0.45
   */

  events: Event[];
}
/**
 * TxResponse defines a structure containing relevant tx data and metadata. The
 * tags are stringified and the log is JSON decoded.
 */

export interface TxResponseSDKType {
  /** The block height */
  height: Long;
  /** The transaction hash. */

  txhash: string;
  /** Namespace for the Code */

  codespace: string;
  /** Response code. */

  code: number;
  /** Result bytes, if any. */

  data: string;
  /**
   * The output of the application's logger (raw string). May be
   * non-deterministic.
   */

  raw_log: string;
  /** The output of the application's logger (typed). May be non-deterministic. */

  logs: ABCIMessageLogSDKType[];
  /** Additional information. May be non-deterministic. */

  info: string;
  /** Amount of gas requested for transaction. */

  gas_wanted: Long;
  /** Amount of gas consumed by transaction. */

  gas_used: Long;
  /** The request transaction bytes. */

  tx: AnySDKType;
  /**
   * Time of the previous block. For heights > 1, it's the weighted median of
   * the timestamps of the valid votes in the block.LastCommit. For height == 1,
   * it's genesis time.
   */

  timestamp: string;
  /**
   * Events defines all the events emitted by processing a transaction. Note,
   * these events include those emitted by processing all the messages and those
   * emitted from the ante handler. Whereas Logs contains the events, with
   * additional metadata, emitted only by processing the messages.
   * 
   * Since: cosmos-sdk 0.42.11, 0.44.5, 0.45
   */

  events: EventSDKType[];
}
/** ABCIMessageLog defines a structure containing an indexed tx ABCI message log. */

export interface ABCIMessageLog {
  msg_index: number;
  log: string;
  /**
   * Events contains a slice of Event objects that were emitted during some
   * execution.
   */

  events: StringEvent[];
}
/** ABCIMessageLog defines a structure containing an indexed tx ABCI message log. */

export interface ABCIMessageLogSDKType {
  msg_index: number;
  log: string;
  /**
   * Events contains a slice of Event objects that were emitted during some
   * execution.
   */

  events: StringEventSDKType[];
}
/**
 * StringEvent defines en Event object wrapper where all the attributes
 * contain key/value pairs that are strings instead of raw bytes.
 */

export interface StringEvent {
  type: string;
  attributes: Attribute[];
}
/**
 * StringEvent defines en Event object wrapper where all the attributes
 * contain key/value pairs that are strings instead of raw bytes.
 */

export interface StringEventSDKType {
  type: string;
  attributes: AttributeSDKType[];
}
/**
 * Attribute defines an attribute wrapper where the key and value are
 * strings instead of raw bytes.
 */

export interface Attribute {
  key: string;
  value: string;
}
/**
 * Attribute defines an attribute wrapper where the key and value are
 * strings instead of raw bytes.
 */

export interface AttributeSDKType {
  key: string;
  value: string;
}
/** GasInfo defines tx execution gas context. */

export interface GasInfo {
  /** GasWanted is the maximum units of work we allow this tx to perform. */
  gas_wanted: Long;
  /** GasUsed is the amount of gas actually consumed. */

  gas_used: Long;
}
/** GasInfo defines tx execution gas context. */

export interface GasInfoSDKType {
  /** GasWanted is the maximum units of work we allow this tx to perform. */
  gas_wanted: Long;
  /** GasUsed is the amount of gas actually consumed. */

  gas_used: Long;
}
/** Result is the union of ResponseFormat and ResponseCheckTx. */

export interface Result {
  /**
   * Data is any data returned from message or handler execution. It MUST be
   * length prefixed in order to separate data from multiple message executions.
   * Deprecated. This field is still populated, but prefer msg_response instead
   * because it also contains the Msg response typeURL.
   */

  /** @deprecated */
  data: Uint8Array;
  /** Log contains the log information from message or handler execution. */

  log: string;
  /**
   * Events contains a slice of Event objects that were emitted during message
   * or handler execution.
   */

  events: Event[];
  /**
   * msg_responses contains the Msg handler responses type packed in Anys.
   * 
   * Since: cosmos-sdk 0.46
   */

  msg_responses: Any[];
}
/** Result is the union of ResponseFormat and ResponseCheckTx. */

export interface ResultSDKType {
  /**
   * Data is any data returned from message or handler execution. It MUST be
   * length prefixed in order to separate data from multiple message executions.
   * Deprecated. This field is still populated, but prefer msg_response instead
   * because it also contains the Msg response typeURL.
   */

  /** @deprecated */
  data: Uint8Array;
  /** Log contains the log information from message or handler execution. */

  log: string;
  /**
   * Events contains a slice of Event objects that were emitted during message
   * or handler execution.
   */

  events: EventSDKType[];
  /**
   * msg_responses contains the Msg handler responses type packed in Anys.
   * 
   * Since: cosmos-sdk 0.46
   */

  msg_responses: AnySDKType[];
}
/**
 * SimulationResponse defines the response generated when a transaction is
 * successfully simulated.
 */

export interface SimulationResponse {
  gas_info: GasInfo;
  result: Result;
}
/**
 * SimulationResponse defines the response generated when a transaction is
 * successfully simulated.
 */

export interface SimulationResponseSDKType {
  gas_info: GasInfoSDKType;
  result: ResultSDKType;
}
/**
 * MsgData defines the data returned in a Result object during message
 * execution.
 */

/** @deprecated */

export interface MsgData {
  msg_type: string;
  data: Uint8Array;
}
/**
 * MsgData defines the data returned in a Result object during message
 * execution.
 */

/** @deprecated */

export interface MsgDataSDKType {
  msg_type: string;
  data: Uint8Array;
}
/**
 * TxMsgData defines a list of MsgData. A transaction will have a MsgData object
 * for each message.
 */

export interface TxMsgData {
  /** data field is deprecated and not populated. */

  /** @deprecated */
  data: MsgData[];
  /**
   * msg_responses contains the Msg handler responses packed into Anys.
   * 
   * Since: cosmos-sdk 0.46
   */

  msg_responses: Any[];
}
/**
 * TxMsgData defines a list of MsgData. A transaction will have a MsgData object
 * for each message.
 */

export interface TxMsgDataSDKType {
  /** data field is deprecated and not populated. */

  /** @deprecated */
  data: MsgDataSDKType[];
  /**
   * msg_responses contains the Msg handler responses packed into Anys.
   * 
   * Since: cosmos-sdk 0.46
   */

  msg_responses: AnySDKType[];
}
/** SearchTxsResult defines a structure for querying txs pageable */

export interface SearchTxsResult {
  /** Count of all txs */
  total_count: Long;
  /** Count of txs in current page */

  count: Long;
  /** Index of current page, start from 1 */

  page_number: Long;
  /** Count of total pages */

  page_total: Long;
  /** Max count txs per page */

  limit: Long;
  /** List of txs in current page */

  txs: TxResponse[];
}
/** SearchTxsResult defines a structure for querying txs pageable */

export interface SearchTxsResultSDKType {
  /** Count of all txs */
  total_count: Long;
  /** Count of txs in current page */

  count: Long;
  /** Index of current page, start from 1 */

  page_number: Long;
  /** Count of total pages */

  page_total: Long;
  /** Max count txs per page */

  limit: Long;
  /** List of txs in current page */

  txs: TxResponseSDKType[];
}