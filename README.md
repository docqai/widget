# Docq Embeddable widget

This is a widget that can be embedded in any website to give access to the Docq public chat interface.

## Usage
To add the widget to your website:

### Option 1: Dynamic

Copy the following code and replace `docq-host-url` with the URL of your Docq server.

```html
<div id="docq-widget" ><i>Loading widget...</i></div>
<script>
  (function(d,o,c,q,a,i){
  i=o.createElement('script');i.async=1;i.src=c;a=o.getElementsByTagName('script')[0];
  a.parentNode.insertBefore(i,a);d['Docq']=q;
  })(window, document,'https://cdn.jsdelivr.net/gh/docqai/widget@main/public/widget.js', 'docq-host-url')
</script>
```

#### Example
The following code will load the widget from  a server at `https://docq.io`.

```html
<div id="docq-widget" ><i>Loading widget...</i></div>
<script>
  (function(d,o,c,q,a,i){
  i=o.createElement('script');i.async=1;i.src=c;a=o.getElementsByTagName('script')[0];
  a.parentNode.insertBefore(i,a);d['Docq']=q;
  })(window, document,'https://cdn.jsdelivr.net/gh/docqai/widget@main/public/widget.js', 'https://docq.io')
</script>
```

### Option 2: Static

```html
<div id="docq-widget"></div>
<script src="https://docq.io/widget.js"></script>
```
