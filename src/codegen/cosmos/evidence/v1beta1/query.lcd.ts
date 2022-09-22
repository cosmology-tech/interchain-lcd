import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryEvidenceRequest, QueryEvidenceResponseSDKType, QueryAllEvidenceRequest, QueryAllEvidenceResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Evidence queries evidence based on evidence hash. */


  evidence = async (params: QueryEvidenceRequest): Promise<QueryEvidenceResponseSDKType> => {
    const endpoint = `cosmos/evidence/v1beta1/evidence/${params.evidence_hash}`;
    return await this.req.get<QueryEvidenceResponseSDKType>(endpoint);
  };
  /* AllEvidence queries all evidence. */

  allEvidence = async (params: QueryAllEvidenceRequest = {
    pagination: undefined
  }): Promise<QueryAllEvidenceResponseSDKType> => {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/evidence/v1beta1/evidence`;
    return await this.req.get<QueryAllEvidenceResponseSDKType>(endpoint, options);
  };
}