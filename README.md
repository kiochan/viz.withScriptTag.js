# viz.withScriptTag.js

This script allows you to use [viz.js](https://github.com/mdaines/viz.js) simply by using of HTML script tag.

## How to Use

First, you need download the `viz.js` from the [releases page](https://github.com/mdaines/viz.js/releases).

Then, include `viz.js` and `viz.withScriptTag.js` both into you HTML file.
```html
<head>
  <meta charset="utf-8">
  <title>just a little demo</title>
  <script type="text/javascript" src="./viz.js"></script>
  <script type="text/javascript" src="./viz.withScriptTag.js"></script>
</head>
```

At last, write your dot script into script tag with `type="text/dot"`.
```html
<script type="text/dot">
  digraph graphname {
    a -> b;
    b -> c;
    c -> a;
  }
</script>
```

You can check [demo](./demo.html)

## License

Viz.withScriptTag.js itself is also [released into the public domain](./LICENSE), just like [viz.js](https://github.com/mdaines/viz.js).
