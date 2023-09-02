import { getCliPackageInfo } from "./getPackageInfo.js";
import createApp from "./createApp.js";
import createLint from "./createLint.js";
import queryComponents from "./queryComponents.js";
import removeDirectory from "./removeDirectory.js";

function simplifyPath(path) {
  const names = path.split("/");
  const stack = [];
  for (const name of names) {
    if (name == "..") {
      if (stack.length) stack.pop();
    } else if (name.length && name !== ".") {
      stack.push(name);
    }
  }

  return "./" + stack.join("/");
}

function fileTypeRouter(suffix, filename = "index") {
  return new Map([
    ["component", `src/components/${filename}/index.${suffix}sx`],
    ["page", `src/pages/${filename}/index.${suffix}sx`],
    ["redux", `src/store/modules/${filename}.${suffix}s`],
    ["axios", `src/services/${filename}.${suffix}s`],
  ]);
}

export {
  queryComponents,
  getCliPackageInfo,
  createApp,
  simplifyPath,
  fileTypeRouter,
  createLint,
  removeDirectory,
};
