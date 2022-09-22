/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 * 
 * The JSON representation for `NullValue` is JSON `null`.
 */
export enum NullValue {
  /** NULL_VALUE - Null value. */
  NULL_VALUE = 0,
  UNRECOGNIZED = -1,
}
/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 * 
 * The JSON representation for `NullValue` is JSON `null`.
 */

export enum NullValueSDKType {
  /** NULL_VALUE - Null value. */
  NULL_VALUE = 0,
  UNRECOGNIZED = -1,
}
export function nullValueFromJSON(object: any): NullValue {
  switch (object) {
    case 0:
    case "NULL_VALUE":
      return NullValue.NULL_VALUE;

    case -1:
    case "UNRECOGNIZED":
    default:
      return NullValue.UNRECOGNIZED;
  }
}
export function nullValueToJSON(object: NullValue): string {
  switch (object) {
    case NullValue.NULL_VALUE:
      return "NULL_VALUE";

    default:
      return "UNKNOWN";
  }
}
export interface Struct_FieldsEntry {
  key: string;
  value: Value;
}
export interface Struct_FieldsEntrySDKType {
  key: string;
  value: ValueSDKType;
}
/**
 * `Struct` represents a structured data value, consisting of fields
 * which map to dynamically typed values. In some languages, `Struct`
 * might be supported by a native representation. For example, in
 * scripting languages like JS a struct is represented as an
 * object. The details of that representation are described together
 * with the proto support for the language.
 * 
 * The JSON representation for `Struct` is JSON object.
 */

export interface Struct {
  /** Unordered map of dynamically typed values. */
  fields: {
    [key: string]: Value;
  };
}
/**
 * `Struct` represents a structured data value, consisting of fields
 * which map to dynamically typed values. In some languages, `Struct`
 * might be supported by a native representation. For example, in
 * scripting languages like JS a struct is represented as an
 * object. The details of that representation are described together
 * with the proto support for the language.
 * 
 * The JSON representation for `Struct` is JSON object.
 */

export interface StructSDKType {
  /** Unordered map of dynamically typed values. */
  fields: {
    [key: string]: ValueSDKType;
  };
}
/**
 * `Value` represents a dynamically typed value which can be either
 * null, a number, a string, a boolean, a recursive struct value, or a
 * list of values. A producer of value is expected to set one of that
 * variants, absence of any variant indicates an error.
 * 
 * The JSON representation for `Value` is JSON value.
 */

export interface Value {
  /** Represents a null value. */
  null_value?: NullValue;
  /** Represents a double value. */

  number_value?: number;
  /** Represents a string value. */

  string_value?: string;
  /** Represents a boolean value. */

  bool_value?: boolean;
  /** Represents a structured value. */

  struct_value?: Struct;
  /** Represents a repeated `Value`. */

  list_value?: ListValue;
}
/**
 * `Value` represents a dynamically typed value which can be either
 * null, a number, a string, a boolean, a recursive struct value, or a
 * list of values. A producer of value is expected to set one of that
 * variants, absence of any variant indicates an error.
 * 
 * The JSON representation for `Value` is JSON value.
 */

export interface ValueSDKType {
  /** Represents a null value. */
  null_value?: NullValueSDKType;
  /** Represents a double value. */

  number_value?: number;
  /** Represents a string value. */

  string_value?: string;
  /** Represents a boolean value. */

  bool_value?: boolean;
  /** Represents a structured value. */

  struct_value?: StructSDKType;
  /** Represents a repeated `Value`. */

  list_value?: ListValueSDKType;
}
/**
 * `ListValue` is a wrapper around a repeated field of values.
 * 
 * The JSON representation for `ListValue` is JSON array.
 */

export interface ListValue {
  /** Repeated field of dynamically typed values. */
  values: Value[];
}
/**
 * `ListValue` is a wrapper around a repeated field of values.
 * 
 * The JSON representation for `ListValue` is JSON array.
 */

export interface ListValueSDKType {
  /** Repeated field of dynamically typed values. */
  values: ValueSDKType[];
}