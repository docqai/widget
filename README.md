# Docq Embeddable Widget

The Docq Embeddable Widget is a tool that allows you to seamlessly integrate the Docq public chat interface into your website.

## Overview

For a comprehensive understanding of Docq, please refer to the official documentation:
- [Overview](https://docqai.github.io/docq/overview/introduction/)
- [User Guide](https://docqai.github.io/docq/user-guide/getting-started/)
- [Developers Guide](https://docqai.github.io/docq/developer-guide/getting-started)

## Usage

### Option 1: Dynamic Embed

To dynamically embed the widget, copy and paste the following code into your website, replacing [placeholders](https://github.com/docqai/widget#placeholders) with the appropriate values:

```html
<div id="docq-widget"><i>Loading widget...</i></div>
<script>
  (function(d, o, c, q, a, i) {
    i = o.createElement('script');i.async = 1;i.src = c;d['__DocqSID'] = a;
    a = o.getElementsByTagName('script')[0];a.parentNode.insertBefore(i, a);d['__Docq'] = q;
  })(window, document, 'https://cdn.jsdelivr.net/gh/docqai/widget@main/public/widget.js', 'docq-host-url', 'org-id:space-group-id')
</script>
```

#### Example 1: Dynamic Embed
The following code will load the widget from a server at `http://localhost:8501` with the organization ID `1000` and space group ID `1`:

```html
<div id="docq-widget"><i>Loading widget...</i></div>
<script>
  (function(d, o, c, q, a, i) {
    i = o.createElement('script');i.async = 1;i.src = c;d['__DocqSID'] = a;
    a = o.getElementsByTagName('script')[0];a.parentNode.insertBefore(i, a);d['__Docq'] = q;
  })(window, document, 'http://localhost:8501', '1000:1')
```

### Option 2: Static Embed

To statically embed the widget, copy and paste the following code into your website, replacing [placeholders](https://github.com/docqai/widget#placeholders) with the appropriate values:

```html
<div id="docq-widget"><i>Loading widget...</i></div>
<script src="https://cdn.jsdelivr.net/gh/docqai/widget@main/public/widget.js"
 docq-host-url="docq-host-url" docq-config="org-id:space-group-id"
></script>
```

#### Example 2: Static Embed
The following code will load the widget from a server at `http://localhost:8501` with the organization ID `1000` and space group ID `1`:

```html
<div id="docq-widget"><i>Loading widget...</i></div>
<script src="https://cdn.jsdelivr.net/gh/docqai/widget@main/public/widget.js" docq-host-url="http://localhost:8501" docq-config="1000:1"></script>
```

### Screenshots

##### Minimized state

<img width="824" alt="embed-icon" src="https://github.com/docqai/widget/assets/64925863/195bde7a-4ff2-41bc-8687-4aa551172829">

##### Opened State

<img width="824" alt="sample-embed" src="https://github.com/docqai/widget/assets/64925863/8e5efe47-c5ca-4e46-81a7-36fe1e8d78e5">


##### Placeholders

Below is a list of placeholders that are used and what they represent:
- `docq-host-url`: URL of the Docq server
- `org-id`: Organization ID
- `space-group-id`: Space Group ID
- `docq-config`: Configuration string in the format `org-id:space-group-id`
  



