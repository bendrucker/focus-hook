# focus-hook [![Build Status](https://travis-ci.org/bendrucker/focus-hook.svg?branch=master)](https://travis-ci.org/bendrucker/focus-hook)

> Focus hook for virtual-dom


## Install

```
$ npm install --save focus-hook
```


## Usage

```js
var h = require('virtual-dom/h')
var FocusHook = require('focus-hook')

function render (state) {
  return h('input', {
    focus: FocusHook(function () {
      return state.active
    })
  })
}
```

## API

#### `FocusHook([predicate])` -> `object`

##### predicate

*Required*  
Type: `function`  
Arguments: `node`

An optional predicate function. If provided, it will be called asynchronously with the inserted DOM node. If it returns a truthy value, the Node will be focused, otherwise the hook is a noop. 

If a predicate is omitted, the element will always be focused.


## License

MIT © [Ben Drucker](http://bendrucker.me)
