'use strict';

const vue = require('vue');

function toRefs(objectRef, options = {}) {
  if (!vue.isRef(objectRef))
    return vue.toRefs(objectRef);
  const result = Array.isArray(objectRef.value) ? Array.from({ length: objectRef.value.length }) : {};
  for (const key in objectRef.value) {
    result[key] = vue.customRef(() => ({
      get() {
        return objectRef.value[key];
      },
      set(v) {
        const replaceRef = vue.toValue(options.replaceRef) ?? true;
        if (replaceRef) {
          if (Array.isArray(objectRef.value)) {
            const copy = [...objectRef.value];
            copy[key] = v;
            objectRef.value = copy;
          } else {
            const newObject = { ...objectRef.value, [key]: v };
            Object.setPrototypeOf(newObject, Object.getPrototypeOf(objectRef.value));
            objectRef.value = newObject;
          }
        } else {
          objectRef.value[key] = v;
        }
      }
    }));
  }
  return result;
}

exports.toRefs = toRefs;
