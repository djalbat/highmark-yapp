# Highmark Yapp

Highmark with Yapp listings.

This package augments the HTML created with Highmark with [Yapp](https://github.com/djalbat/yapp) listings.
The result is much more pleasing to the eye.
See the Juxtapose site, for example, which makes use of this package:

https://juxtapose.info

Using Highmark for creating HTML for websites usually works extremely well and even if you do not intend to include any listings, this package provides the easiest means to make use of Highmark to this end.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Example](#example)
- [Usage](#usage)
- [Building](#buidling)
- [Contact](#contact)

## Introduction

Highmark is a document preparation system inspired by [Markdown](https://en.wikipedia.org/wiki/Markdown) and [TeX](https://en.wikipedia.org/wiki/TeX).
There are several packages in the distribution.

- [Highmark-CLI](https://github.com/djalbat/highmark-cli) Highmark's CLI tool.
- [Highmark Yapp](https://github.com/djalbat/highmark-yapp) Highmark with Yapp listings.
- [Highmark Client](https://github.com/djalbat/highmark-client) Highmark's bundled client for viewing HTML.
- [Highmark Markdown](https://github.com/djalbat/highmark-markdown) Highmark's Markdown and Markdown Style languages.

Only the CLI tool is needed by end users.
All of the other packages are likely only of interest to prospective developers.

## Installation

If you would like to contribute or would simply like to have a look at the code, you can clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/highmark-yapp.git

...and then install the dependencies with [npm](https://www.npmjs.com/) from within the project's root directory:

    npm install

## Example

There is a small development server that can be run from within the project's directory with the following command:

    npm start

The example will then be available at the following URL:

http://localhost:8888

The source for the example can be found in the `src/example.js` file and corresponding`src/example` folder. You are encouraged to try the example whilst reading what follows. You can rebuild it on the fly with the following command:

    npm run watch-debug

The development server will reload the page whenever you make changes.

One last thing to bear in mind is that this package is included by way of a relative rather than a package import. If you are importing it into your own application, however, you should use the standard package import.

## Usage

To begin with, in order to make use of Yapp you must render the requisite styles:

```
import { renderYappStyles } from "highmark-yapp";

renderYappStyles();

...
```

Next, to create a node from some Markdown content, use the `tokensFromMarkdown()`, `markdownNodeFromTokens()` and `topmostHTMLNodeFromMarkdownNode()` utility functions:

```
import { markdownUtilities } from "highmark-yapp";

const { tokensFromMarkdown, markdownNodeFromTokens } = markdownUtilities;

const markdown = `

        ...
        
      `,
      tokens = tokensFromMarkdown(markdown),
      markdownNode = markdownNodeFromTokens(tokens),
      topmostHTMLNode = topmostHTMLNodeFromMarkdownNode(markdownNode);

```

Then it is just a question of mounting the node:

```
const body = document.querySelector("body"),
      domElement = body,  ///
      parentDOMElement = domElement,  ///
      siblingDOMElement = null,
      context = {
        tokens
      };

topmostHTMLNode.mount(parentDOMElement, siblingDOMElement, context);
```

Note the use of the tokens in a `context` plain old JavaScript object that must be passed to the topmost HTML node's `mount()` method along with the parent and sibling DOM elements.
This is why there are two utility functions to create the node in two stages.
By the way, the sibling DOM element, if not null, must be a child of the parent DOM element, in which case the node will be mounted immediately after it.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@djalbat.com
