# Library: Radio

A module for [Library](https://github.com/server/library) that adds SHOUTcast radio station genre browsing and streaming.

### Documentation

- [How to use](#how-to-use)
- [Index data structure](#index-data-structure)
- [Using the API with NodeJS](#using-the-media-index-with-nodejs)

## How to use

First install the module with `NPM`:

    $ npm install @royalarchives/library-radio

If you are using [Library](https://github.com/server/library) from the command-line include the module name in your arguments:

    $ node scanner.js @royalarchives/library-radio /path/to/files

If you are using [Library](https://github.com/server/library) with NodeJS include the module name in the parameters:

    const Library = require('@royalarchives/library')
    await Library.scan(['@royalarchives/library-radio'], ['/path/to/files'])

## Index data structure

[Top of page](#documentation)

## Using the API with NodeJS

[Top of page](#documentation)

## License

MIT
