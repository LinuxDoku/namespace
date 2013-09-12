# namespace
[![Build Status](https://travis-ci.org/LinuxDoku/namespace.png?branch=master)](https://travis-ci.org/LinuxDoku/namespace)

This package provides namespaces for your nodejs or browser app. It help's you organizing your code without writing wired variable constructs and helper objects.

## Install
```
npm install ns
```

then require the module in your application code

```javascript
var namespace = require('ns');
```

or in the browser simply add the ```namespace.js``` to your script sources

```html
<script type="text/javascript" src="namespace.js"></script>
```

## Usage
Define a new namespace and assign a function

```javascript
namespace('company.hello.world', function() {
  console.log('Hello World');
});
```

now you can run the function in any of your scripts which have access to the same window/global object.

A namespace can contain everything. Objects, functions and even variables - string, integer, float, ...

```javascript
namespace('company.hello.world')(); // => Hello World
```

## Where is the namespace stored?
When you assign any kind of variable, object or function to a namespace it won't be stored in the namespace scope.
It is attached on nodejs to the ```global``` var and in your local browser to ```window```. These variables are reachable for all code in your application.

So you may access the namespace defined as follows:

```javascript
namespace('hello.world', "Hello World");
```

in this way:

```javascript
global.hello.world // => Hello World
window.hello.world // => Hello World
```

## License
The project is licensed under the conditions of the MIT licence.
