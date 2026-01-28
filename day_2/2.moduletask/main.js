import { add } from "./math.js";

console.log(add(2, 3)); // 5
import greet from "./user.js";

console.log(greet("Alish"));
import { port as serverPort } from "./config.js";

console.log(serverPort);
import * as MathUtils from "./math.js";

console.log(MathUtils.pi);
console.log(MathUtils.add(2, 4));
