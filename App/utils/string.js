export function toSnakeCase(originalObj) {
    const transformedObj = {};
    for (let key in originalObj) {
        let transformedKey = key.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase().replace(/ /g, '_');
        transformedObj[transformedKey] = originalObj[key];
    }

    return transformedObj;
}