/** ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesRequest {
}
/** ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesRequestSDKType {
}
/** ListAllInterfacesResponse is the response type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesResponse {
    /** interface_names is an array of all the registered interfaces. */
    interface_names: string[];
}
/** ListAllInterfacesResponse is the response type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesResponseSDKType {
    /** interface_names is an array of all the registered interfaces. */
    interface_names: string[];
}
/**
 * ListImplementationsRequest is the request type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsRequest {
    /** interface_name defines the interface to query the implementations for. */
    interface_name: string;
}
/**
 * ListImplementationsRequest is the request type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsRequestSDKType {
    /** interface_name defines the interface to query the implementations for. */
    interface_name: string;
}
/**
 * ListImplementationsResponse is the response type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsResponse {
    implementation_message_names: string[];
}
/**
 * ListImplementationsResponse is the response type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsResponseSDKType {
    implementation_message_names: string[];
}
