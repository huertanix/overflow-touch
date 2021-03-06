overflow-touch
==============
This is a very simple way to tell iPhone/iPod Touch/iPad(?) users using Safari that they can use two fingers to scroll through a page element that would otherwise have a scrollbar in a full browser (overflow-y CSS property set to something other than none).

Usage
-----
Assuming you're not using a particularly fancy architecture for your website, just plop the files in the repo into your webroot and call the setIosOverlay function from any page in your webroot. This function takes in the parameter element_id, which is the DOM id for the element you want the overlay to appear over.

Example
-------
In your `<head>`, add this reference:
    <pre>`<script type="text/javascript" src="overflow-touch.js"></script>`</pre>

Near the end of your `<body>`, some place after the declaration of the element you want to apply the overlay to:
    <pre>`<script type="text/javascript">`
  `setIosOverlay('yourOverflowContainerElementDomIdHere');`
`</script>`</pre>
  
License
-------
This script is distributed under the MIT license.  Please see the included copy of the license for deets.  The included image (two_finger_scroll.png) was created by Open Exhibits | www.openexhibits.org.  It is distributed under a Creative Commons Attribution-ShareAlike 2.0 Generic (CC BY-SA 2.0) license.
