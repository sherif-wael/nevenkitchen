export default (value) => (
    value === undefined ||
    value === null ||
    (typeof value === "string" && value.length === 0) || 
    (typeof value === "object" && Object.keys(value).length == 0)
)