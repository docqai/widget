# Docq Embeddable widget

This is a widget that can be embedded in any website to give access to the Docq public chat interface.


## Docq Documentation
To find out more about Docq, check out the documentation:
- [Overview](https://docqai.github.io/docq/overview/introduction/)
- [User Guide](https://docqai.github.io/docq/user-guide/getting-started/)
- [Developers guide](https://docqai.github.io/docq/developer-guide/getting-started)

## Usage
To add the widget to your website:

### Option 1: Dynamic

Copy the following code and replace `docq-host-url` with the URL of your Docq server and `docq-sid` with the ID of the space group you want to use for the embed.

```html
<div id="docq-widget" ><i>Loading widget...</i></div>
<script>
  (function(d,o,c,q,a,i){
  i=o.createElement('script');i.async=1;i.src=c;d['__DocqSID']=a;a=o.getElementsByTagName('script')[0];
  a.parentNode.insertBefore(i,a);d['__Docq']=q;
  })(window, document,'https://cdn.jsdelivr.net/gh/docqai/widget@main/public/widget.js', 'docq-host-url', 'docq-sid')
</script>
```

#### Example
The following code will load the widget from  a server at `http://localhost:8501` with the `default` space group.

```html
<div id="docq-widget" ><i>Loading widget...</i></div>
<script>
  (function(d,o,c,q,a,i){
  i=o.createElement('script');i.async=1;i.src=c;a=o.getElementsByTagName('script')[0];
  a.parentNode.insertBefore(i,a);d['__Docq']=q;
  })(window, document,'https://cdn.jsdelivr.net/gh/docqai/widget@main/public/widget.js', 'http://localhost:8501','default')
</script>
```

### Option 2: Static
Load the widget from a static URL. Replace `docq-host-url` with the URL of your Docq server and `docq-sid` with the ID of the space group you want to use for the embed.

```html
<div id="docq-widget"><i>Loading widget...</i></div>
<script src="https://cdn.jsdelivr.net/gh/docqai/widget@main/public/widget.js"
 docq-host-url="docq-host-url" docq-sid="docq-sid"
></script>
```


### Screenshots

##### Minimized state

<img width="824" alt="embed-icon" src="https://github.com/docqai/widget/assets/64925863/195bde7a-4ff2-41bc-8687-4aa551172829">

##### Opened State

<img width="824" alt="sample-embed" src="https://github.com/docqai/widget/assets/64925863/8e5efe47-c5ca-4e46-81a7-36fe1e8d78e5">


