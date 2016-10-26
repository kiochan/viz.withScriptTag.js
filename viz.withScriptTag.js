/**
 * author: kiochan
 * email: sunxingchen@live.com
 * you must include viz.js first before to use this file
 * https://github.com/mdaines/viz.js/releases
 */

(function() {
  var projectName = 'viz.withScriptTag.js';
  var fn = function() {
    if (typeof window.Viz != 'function') { //viz check
      console.log(''+projectName+': you must include "viz.js" frist.');
    } else {
      // get all elements of dot script
      dotScript = document.querySelectorAll("script[type='text/dot']");
      //output every image
      for (i = 0; i<dotScript.length; i++) {
        el = dotScript[i];
        if (el.src == undefined || el.src == ''){
          // generaen image with viz
          image = Viz(el.innerHTML, {format: "png-image-element"});
          // add a name attribute
          if (el.id != undefined && el.id != ''){
            image.alt = el.id;
          }
          document.body.appendChild(image);
        } else { // with src url
          url = el.src;
          var request = new XMLHttpRequest();
          request.open('GET', url, true);
          request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
              var resp = request.responseText;
            } else {
              console.log(''+projectName+': file with url "' + url + '" not be found.');
            }
          };
          request.onerror = function() {
            // There was a connection error of some sort
          };
          request.send();
        }
      }
    }
  }

  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }

})()
