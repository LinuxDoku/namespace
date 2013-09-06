# namespace
This package provides namespaces for your nodejs or browser app. It help's you organizing your code without writing wired variable constructs and helper objects.

# Install
```
npm install ns
```

then require the module in your application code

```javascript
var namespace = require('ns');
```

or in your browser simply add the ```namespace.js``` to your script sources

```html
<script type="text/javascript" src="namespace.js"></script>
```

# Useage
Define a new namespace and assign a function

```javascript
namespace('company.hello.world', function() {
  console.log('Hello World');
});
```

now you can run the function in any of your scripts which have access to the same window/global object

```javascript
namespace('company.hello.world')(); // => Hello World
```

# Licence
The project is licenced under the conditions of the MIT licence.