/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0-dev.20220516(ab869e8469cd1cda70d25bb454732f84b523098c)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/abap/abap.contribution.ts
import { registerLanguage } from "../_.contribution.js";
registerLanguage({
  id: "abap",
  extensions: [".abap"],
  aliases: ["abap", "ABAP"],
  loader: () => {
    if (false) {
      return new Promise((resolve, reject) => {
        __require(["vs/basic-languages/abap/abap"], resolve, reject);
      });
    } else {
      return import("./abap.js");
    }
  }
});
