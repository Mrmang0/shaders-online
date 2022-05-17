/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0-dev.20220516(ab869e8469cd1cda70d25bb454732f84b523098c)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/objective-c/objective-c.contribution.ts
import { registerLanguage } from "../_.contribution.js";
registerLanguage({
  id: "objective-c",
  extensions: [".m"],
  aliases: ["Objective-C"],
  loader: () => {
    if (false) {
      return new Promise((resolve, reject) => {
        __require(["vs/basic-languages/objective-c/objective-c"], resolve, reject);
      });
    } else {
      return import("./objective-c.js");
    }
  }
});
