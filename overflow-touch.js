/***
	Copyright (c) 2011 David Huerta. Distributed under the MIT license: http://www.opensource.org/licenses/mit-license.php
***/

//element_id: Set to the block element's DOM ID that you want to have the overlay appear over (div, article, whatevs)
function setIosOverlay(element_id)
{
	var is_ios = (navigator.userAgent.toLowerCase().indexOf('iphone') != -1);
	var previously_displayed = window.localStorage.getItem("protip_displayed");

	if (is_ios && previously_displayed != 'true') // local storage vals are strings, it seems...
	{
		var overflow_element = document.getElementById(element_id);
		var overflow_element_max_height = window.getComputedStyle(overflow_element,null).getPropertyValue('max-height');
		var overflow_element_actual_height = overflow_element.offsetHeight;
		
		// shave off the 'px' from max-height property
		if (overflow_element_actual_height > parseInt(overflow_element_max_height.substring(0, overflow_element_max_height.length-2)))
		{
			var protip = document.createElement('div');
			protip.className = 'iosProtip';
			protip.style.top = overflow_element.offsetTop + 'px';
			protip.style.left = overflow_element.offsetLeft + 'px';
			protip.style.width = window.getComputedStyle(overflow_element,null).getPropertyValue('width');
			protip.style.height = window.getComputedStyle(overflow_element,null).getPropertyValue('max-height');
			protip.style.paddingLeft = window.getComputedStyle(overflow_element,null).getPropertyValue('padding-left');
			protip.style.paddingRight = window.getComputedStyle(overflow_element,null).getPropertyValue('padding-right');
			protip.style.paddingTop = window.getComputedStyle(overflow_element,null).getPropertyValue('padding-top');
			protip.style.paddingBottom = window.getComputedStyle(overflow_element,null).getPropertyValue('padding-bottom');

			// Two finger scroll symbol, original here: http://www.flickr.com/photos/openexhibits/5241846065/in/faves-25968780@N03/
			var protipGlyph = document.createElement('img');
			protipGlyph.src = 'images/two_finger_scroll.png';
			protipGlyph.style.width = '350px';
			protipGlyph.style.height = '350px';
			protip.appendChild(protipGlyph);

			var protipDismiss = document.createElement('h1');
			protipDismiss.className = 'iosProtipDismiss';
			protipDismiss.innerHTML = 'Use two fingers to scroll.<br />Tap once to clear.';
			protip.appendChild(protipDismiss);

			var protipAttribution = document.createElement('p');
			protipAttribution.className = 'iosProtipAttribution';
			protipAttribution.innerHTML += 'Gesture glyph by <a href="http://www.openexhibits.org">Open Exhibits</a>'
			protip.appendChild(protipAttribution);

			// Tap to clear...
			protip.setAttribute('onclick', 'this.style.display = \'none\';');

			overflow_element.appendChild(protip);
			
			// Record the fact it was displayed so it doesn't display on the site again
			localStorage.setItem("protip_displayed", true);
		}
	}
}