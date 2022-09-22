import { Config, ConfigSDKType } from "./config";
/** QueryConfigRequest is the Query/Config request type. */

export interface QueryConfigRequest {}
/** QueryConfigRequest is the Query/Config request type. */

export interface QueryConfigRequestSDKType {}
/** QueryConfigRequest is the Query/Config response type. */

export interface QueryConfigResponse {
  /** config is the current app config. */
  config: Config;
}
/** QueryConfigRequest is the Query/Config response type. */

export interface QueryConfigResponseSDKType {
  /** config is the current app config. */
  config: ConfigSDKType;
}