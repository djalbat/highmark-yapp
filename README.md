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
- [Highmark Fonts](https://github.com/djalbat/highmark-fonts) Computer Modern fonts for Highmark.
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

Next, to create a node from some Markdown content, use the `tokensFromContent()` and `nodeFromTokens()` utility functions:

```
import { markdownUtilities } from "highmark-yapp";

const { tokensFromContent, nodeFromTokens } = markdownUtilities;

const content = `

        ...
        
      `,
      tokens = tokensFromContent(node),
      node = nodeFromTokens(tokens);

```

Then it is just a question of mounting the node:

```
import { Element } from "easy";
import { markdownUtilities } from "highmark-yapp";

const { nodeFromContent } = markdownUtilities;

class Article extends Element {
  didMount() {
    const { content } = this.constructor,
          tokens = tokensFromContent(node),
          node = nodeFromTokens(tokens);
          domElement = this.getDOMElement(),
          parentDOMElement = domElement,  ///
          siblingDOMElement = null;

    node.mount(parentDOMElement, siblingDOMElement, context);
  }

  willUnmount() {
    ///
  }

  static tagName = "article";
}
```

Here the `didMount()` method assumes that some content is defined by way of the static `content` property.
One way to do this would be to extend the `Article` class thus:

```
import Article from "../article";

export default class ArchitectureArticle extends Article {
  static title = "Architecture";

  static content = `
  
    ...
    
  `;
}  
```

Note that the usual delimiters for block listings consisting of three backticks have been replaced with three single quotes `'''`. 
This generally makes things easier when working inside string template literals that use backticks for delimiters of course.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@djalbat.com
