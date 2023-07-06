export function setIfDefined(target: { [key: string]: any }, source: { [key: string]: any }) {
  for(let key in source) {
    if(source[key] !== undefined) {
      target[key] = source[key];
    }
  }
}