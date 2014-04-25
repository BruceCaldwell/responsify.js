responsify.js
=============

Version 140424

A super simple jQuery plugin to add a responsive jQuery Event to your site using Bootstrap standards. Does not require Bootstrap, but is meant to be used with it.

The width used by responsify.js is the closest I've found to exactly matching the CSS viewport width. If a better way is found, it will be updated.

Why?
----

Bootstrap is great, but I have been unable to find an Events API for it that deals with the global size of the document. This leaves a hole for developers that need to do more advanced things in JavaScript to make their sites fully responsive. This file fills that void and creates a way to have your code change along with Bootstrap.


Usage
-----
There are three ways to use responsify.js, after including the `responsify-min.js` file to your site.

### Adding an event using `jQuery.on`

You can hook into the `responsify` event with jQuery to run code based on the current width.

```
$(document).on('responsify', function(e, size) {
	/* Your code here */
});
```

The `size` parameter above is the Bootstrap-style slug for based on the document's width. Possible values are `lg`, `md`, `sm`, and `xs`. For info on the widths associated with these values, see the Bootstrap section on Grid Options: [http://getbootstrap.com/css/#grid-options](http://getbootstrap.com/css/#grid-options)

---

### Using `$().responsify`

This is only a wrapper for the jQuery.on function. It can be used on any element, but will always add an event to `$(document)`.

**Example:**

```
$(document).responsify(function(e, size) {
	/* Your code here */
});
```

---

### The `responsify` Function

You can also access the current width, height, and Bootstrap-style size from calling on the global `responsify` function.

```
if(responsify().currentSize === 'md') {
	/* Your code here */
}
```

**OR**

```
if(responsify().width >= 1200) {
	/* Your code here */
}
```

**OR**

```
if(responsify().height >= 750) {
	/* Your code here */
}
```