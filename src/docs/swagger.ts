import swaggerJsDoc from "swagger-jsdoc";
import path from "path";

export const swaggerOptions: swaggerJsDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Weather API",
      version: "1.0.0",
      description: "API de previsão do tempo"
    }
  },
  apis: [path.resolve(__dirname, "../routes/*.ts")]
};

export let swaggerSpec: object;
try {
  // Attempt to generate the swagger spec from JSDoc comments.
  // Some parsers may throw when encountering unexpected content (e.g. TypeScript AST/YAML parsing issues),
  // so we guard generation to avoid crashing the server at startup.
  swaggerSpec = swaggerJsDoc(swaggerOptions);
} catch (err) {
  // Log the error and export an empty spec so the server can start.
  // This avoids `Cannot read properties of undefined (reading 'cstNode')` crashes coming
  // from deep parser calls inside swagger-jsdoc or its dependencies.
  // Investigate the logged error to apply a more specific fix if needed.
  // eslint-disable-next-line no-console
  console.error("Failed to generate swagger spec:", err);
  swaggerSpec = {};
}
