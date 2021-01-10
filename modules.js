export const Str = {
  split: (...args) => String.prototype.split.call(...args),
  trim: (...args) => String.prototype.trim.call(...args),
}

export const Arr = {
  map: (...args) => Array.prototype.map.call(...args),
  reduce: (...args) => Array.prototype.reduce.call(...args),
  filter: (...args) => Array.prototype.filter.call(...args),
  join: (...args) => Array.prototype.join.call(...args),
  length: val => val.length
}

export const Num = {
  parseInt: (...args) => parseInt(...args)
}
