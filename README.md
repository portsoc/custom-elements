# Custom Elememts

An introduction to Templates, Shadow DOM, Web Components and thus: Custom Elements.

## Templates

### [Template 1](./examples/templates/template1.html)

In `template1.html` we define a web page with three parts: a button `b1`, an empty `main` element, and a template identified as `t1`.

When the button is clicked, the template is cloned and its contents are added to `main`.

The `cloneNode` function takes one parameter: `deep` which should be `true` if a deep copy of the template is desired (i.e. containing all text and element subnodes).  This is likely to be the desired behaviour for templates.

### [Template 2](./examples/templates/template2.html)

In `template2.html` we extend the example by altering the content of the template which now reads `<p>The time now is <em>not specified</em>.</p>`.

When the template is inserted into the page the current time replaces the words "not specified" in the template.

### [Template 3](./examples/templates/template3.html)

In `template2.html` we highlight that a page can contain multiple templates by comnbining the first two examples.  Each template must have a unique ID in order to be selectable.

## Shadow DOM

### [Shadow 1](./examples/shadowdom/shadow1.html)

In `shadow1.html` we define a web page with two parts: a button `b1`, and a `main` element which contains two sections, one of which has the id `example`.

This example introduces the concept of shadow DOM.  An instance of shadow DOM can contain elements just like the browser's normal DOM, and can be attached to the document just like any other element.

When the button is clicked, we create an instance of shadow DOM using the `attachShadow` method.  This replaces all the content of the `example` element that is being attached to.  We then add new content to the shadow DOM and it appears in place of the original paragraphs.

`attachShadow` takes an object parameter which *must* include a `mode` property, which can be `open` or `closed`.  A `closed` shadow DOM can be accessed and altered only by scripts that are contained within it.

### [Shadow 2](./examples/shadowdom/shadow2.html)

In `shadow2.html` we add a stylesheet to the shadow DOM.  The stylesheet contains one rule, setting all paragraphs to have red text.  The stylesheet only affects the paragraphs in the shadow DOM.

### [Shadow 3](./examples/shadowdom/shadow3.html)

In `shadow3.html` we see that we can use templates to populate shadow DOM elements.

### [Shadow 4](./examples/shadowdom/shadow4.html)

In `shadow4.html` the difference between an open and closed shadow DOM is illustrated.  Two shadow DOMs are created, one open, one closed.  The first can be written to by the JS, setting its innerHTML, the second cannot, and an error is thrown when the write is attemped.

## Web Components
* [Custom 0: A `time-created` element](./examples/custom/0/index.html)

* [Custom 1: A `hh:mm:ss` `digital-clock` element](./examples/custom/1/index.html)

* [Custom 2: A `digital-clock` element defined in its own .js file](./examples/custom/2/index.html)

* [Custom 3: Adding an stylesheet to the clock](./examples/custom/3/index.html)

* [Custom 4: Using lifecycle callback methods to stop the cock from ticking when not in a document document](./examples/custom/4/index.html)

* [Custom 5: Adding a `seconds` attribute to switch between `hh:mm` and `hh:mm:ss`](./examples/custom/5/index.html)

* [Custom 6: A new element with two buttons in it](./examples/custom/6/index.html)

* [Custom 7: A new improved `pre` element called `copyable-pre` that includes a working copy-to-clipboard button](./examples/custom/7/index.html)

* [Custom 8: An analog ticking clock that uses SVG to draw the clock face](./examples/custom/8/index.html)

* [Custom 99: Using a canvas to create a new kind of `img` element](http://portsoc.github.io/img-melt/).
