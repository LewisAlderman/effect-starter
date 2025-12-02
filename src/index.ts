import * as Effect from "effect/Effect";

Effect.runPromise(Effect.succeed("Hello, world!")).then(console.log);