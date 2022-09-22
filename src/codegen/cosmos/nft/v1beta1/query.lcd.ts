import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryBalanceRequest, QueryBalanceResponseSDKType, QueryOwnerRequest, QueryOwnerResponseSDKType, QuerySupplyRequest, QuerySupplyResponseSDKType, QueryNFTsRequest, QueryNFTsResponseSDKType, QueryNFTRequest, QueryNFTResponseSDKType, QueryClassRequest, QueryClassResponseSDKType, QueryClassesRequest, QueryClassesResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */


  balance = async (params: QueryBalanceRequest): Promise<QueryBalanceResponseSDKType> => {
    const endpoint = `cosmos/nft/v1beta1/balance/${params.owner}/${params.class_id}`;
    return await this.req.get<QueryBalanceResponseSDKType>(endpoint);
  };
  /* Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */

  owner = async (params: QueryOwnerRequest): Promise<QueryOwnerResponseSDKType> => {
    const endpoint = `cosmos/nft/v1beta1/owner/${params.class_id}/${params.id}`;
    return await this.req.get<QueryOwnerResponseSDKType>(endpoint);
  };
  /* Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */

  supply = async (params: QuerySupplyRequest): Promise<QuerySupplyResponseSDKType> => {
    const endpoint = `cosmos/nft/v1beta1/supply/${params.class_id}`;
    return await this.req.get<QuerySupplyResponseSDKType>(endpoint);
  };
  /* NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
  ERC721Enumerable */

  nFTs = async (params: QueryNFTsRequest): Promise<QueryNFTsResponseSDKType> => {
    const options: any = {
      params: {}
    };

    if (typeof params?.class_id !== "undefined") {
      options.params.class_id = params.class_id;
    }

    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/nft/v1beta1/nfts`;
    return await this.req.get<QueryNFTsResponseSDKType>(endpoint, options);
  };
  /* NFT queries an NFT based on its class and id. */

  nFT = async (params: QueryNFTRequest): Promise<QueryNFTResponseSDKType> => {
    const endpoint = `cosmos/nft/v1beta1/nfts/${params.class_id}/${params.id}`;
    return await this.req.get<QueryNFTResponseSDKType>(endpoint);
  };
  /* Class queries an NFT class based on its id */

  class = async (params: QueryClassRequest): Promise<QueryClassResponseSDKType> => {
    const endpoint = `cosmos/nft/v1beta1/classes/${params.class_id}`;
    return await this.req.get<QueryClassResponseSDKType>(endpoint);
  };
  /* Classes queries all NFT classes */

  classes = async (params: QueryClassesRequest = {
    pagination: undefined
  }): Promise<QueryClassesResponseSDKType> => {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/nft/v1beta1/classes`;
    return await this.req.get<QueryClassesResponseSDKType>(endpoint, options);
  };
}