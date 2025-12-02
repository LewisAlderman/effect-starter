import Effect = require("effect/Effect");

Effect.runPromise(Effect.succeed("Hello, world!")).then(console.log);