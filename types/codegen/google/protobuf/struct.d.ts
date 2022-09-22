/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 *
 * The JSON representation for `NullValue` is JSON `null`.
 */
export declare enum NullValue {
    /** NULL_VALUE - Null value. */
    NULL_VALUE = 0,
    UNRECOGNIZED = -1
}
/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 *
 * The JSON representation for `NullValue` is JSON `null`.
 */
export declare enum NullValueSDKType {
    /** NULL_VALUE - Null value. */
    NULL_VALUE = 0,
    UNRECOGNIZED = -1
}
export declare function nullValueFromJSON(object: any): NullValue;
export declare function nullValueToJSON(object: NullValue): string;
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
    nullValue?: NullValue;
    /** Represents a double value. */
    numberValue?: number;
    /** Represents a string value. */
    stringValue?: string;
    /** Represents a boolean value. */
    boolValue?: boolean;
    /** Represents a structured value. */
    structValue?: Struct;
    /** Represents a repeated `Value`. */
    listValue?: ListValue;
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
