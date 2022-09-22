import { Any, AnySDKType } from "../../../google/protobuf/any";
/** Class defines the class of the nft type. */

export interface Class {
  /** id defines the unique identifier of the NFT classification, similar to the contract address of ERC721 */
  id: string;
  /** name defines the human-readable name of the NFT classification. Optional */

  name: string;
  /** symbol is an abbreviated name for nft classification. Optional */

  symbol: string;
  /** description is a brief description of nft classification. Optional */

  description: string;
  /** uri for the class metadata stored off chain. It can define schema for Class and NFT `Data` attributes. Optional */

  uri: string;
  /** uri_hash is a hash of the document pointed by uri. Optional */

  uri_hash: string;
  /** data is the app specific metadata of the NFT class. Optional */

  data: Any;
}
/** Class defines the class of the nft type. */

export interface ClassSDKType {
  /** id defines the unique identifier of the NFT classification, similar to the contract address of ERC721 */
  id: string;
  /** name defines the human-readable name of the NFT classification. Optional */

  name: string;
  /** symbol is an abbreviated name for nft classification. Optional */

  symbol: string;
  /** description is a brief description of nft classification. Optional */

  description: string;
  /** uri for the class metadata stored off chain. It can define schema for Class and NFT `Data` attributes. Optional */

  uri: string;
  /** uri_hash is a hash of the document pointed by uri. Optional */

  uri_hash: string;
  /** data is the app specific metadata of the NFT class. Optional */

  data: AnySDKType;
}
/** NFT defines the NFT. */

export interface NFT {
  /** class_id associated with the NFT, similar to the contract address of ERC721 */
  class_id: string;
  /** id is a unique identifier of the NFT */

  id: string;
  /** uri for the NFT metadata stored off chain */

  uri: string;
  /** uri_hash is a hash of the document pointed by uri */

  uri_hash: string;
  /** data is an app specific data of the NFT. Optional */

  data: Any;
}
/** NFT defines the NFT. */

export interface NFTSDKType {
  /** class_id associated with the NFT, similar to the contract address of ERC721 */
  class_id: string;
  /** id is a unique identifier of the NFT */

  id: string;
  /** uri for the NFT metadata stored off chain */

  uri: string;
  /** uri_hash is a hash of the document pointed by uri */

  uri_hash: string;
  /** data is an app specific data of the NFT. Optional */

  data: AnySDKType;
}