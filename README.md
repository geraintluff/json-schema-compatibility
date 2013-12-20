# JSON Schema compatability

JSON Schema tools are now being written for v4 of the draft, but v3 schemas still exist out in the wild.

This project intends to be a converter that updates schemas to be compatible with v4 of the spec.

## Behaviour

This tool works "in-place" - so it actually modifies the JavaScript objects representing the schema.  This is simply because it's easier than cloning the data or anything like that.

This tool should also not modify schemas that are already compatible, and can even (in some cases) handle horrible merged combinations (e.g. mixed boolean/array use of `required`).

## Usage (Node):

Install using npm:

```shell
npm install json-schema-compatability
```

Convert a schema:

```
var api = require('json-schema-compatability');

api.v4(oldSchema);
```

## Usage (browser)

This is not tested, but it should make the API available as a global `JsonSchemaCompatability` variable.