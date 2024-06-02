

document.addEventListener("DOMContentLoaded", function() {
  
	const accessibilityMenuURL = './Toolbar.html'; 	
	const stylesURL = './styles.scss'; 
	
	var link = document.createElement('link');
	link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css';
	link.rel = 'stylesheet';
	document.head.appendChild(link);

	fetch(stylesURL)
		.then(response => response.text())
		.then(cssText => {
			var styleTag = document.createElement('style');
			styleTag.textContent = cssText;
			document.head.appendChild(styleTag);
  
			return fetch(accessibilityMenuURL);
		})
		.then(response => response.text())
		.then(htmlContent => {
			var createToolBox = document.createElement('div');
			createToolBox.id = 'init-access-tool';
			createToolBox.innerHTML = htmlContent;
  
			document.body.insertBefore(createToolBox, document.body.firstChild);
			const accessToolButton = document.querySelector(".accesstool");
			const accessToolBar = document.querySelector(".access-tool-bar");
			const closeButton = document.querySelector(".close-button");
		
			function toggleAccessibilityToolBar() {
			if (accessToolBar.style.visibility === "hidden") {
				accessToolBar.style.visibility = "visible";
				accessToolBar.style.opacity = 1; 
			} else {
				accessToolBar.style.visibility = "hidden";
				accessToolBar.style.opacity = 0;
			}
			}
		
			accessToolButton.addEventListener("click", toggleAccessibilityToolBar);
			closeButton.addEventListener("click", toggleAccessibilityToolBar);
			
			// invert fuction
			const invertButton = document.querySelector("#Invert");
			invertButton.addEventListener('click', function() {
				if (document.body.classList.contains('grayscale')) {
					document.body.classList.remove('grayscale');
				}
				if (document.body.classList.contains('highsaturation')) {
					document.body.classList.remove('highsaturation');
				}
				if (document.body.classList.contains('lowsaturation')) {
					document.body.classList.remove('lowsaturation');
				}
				document.body.classList.toggle('invert');
			});

			
			// grayscale function
			const grayscaleButton = document.querySelector("#Grayscale");
			grayscaleButton.addEventListener('click', function() {
				if (document.body.classList.contains('invert')) {
					document.body.classList.remove('invert');
				}
				if (document.body.classList.contains('highsaturation')) {
					document.body.classList.remove('highsaturation');
				}
				if (document.body.classList.contains('lowsaturation')) {
					document.body.classList.remove('lowsaturation');
				}
				document.body.classList.toggle('grayscale');
			});


			// low saturation function
			const lowsaturationbutton = document.querySelector("#lowsaturation");
			lowsaturationbutton.addEventListener('click', function() {
				if (document.body.classList.contains('grayscale')) {
					document.body.classList.remove('grayscale');
				}
				if (document.body.classList.contains('highsaturation')) {
					document.body.classList.remove('highsaturation');
				}
				if (document.body.classList.contains('invert')) {
					document.body.classList.remove('invert');
				}
				document.body.classList.toggle('lowsaturation');
			}); 



			// high saturation function
			const highSaturationButton = document.querySelector("#highsaturation");
			highSaturationButton.addEventListener('click', function() {
				if (document.body.classList.contains('lowsaturation')) {
					document.body.classList.remove('lowsaturation');
				}
				if (document.body.classList.contains('grayscale')) {
					document.body.classList.remove('grayscale');
				}
				if (document.body.classList.contains('invert')) {
					document.body.classList.remove('invert');
				}
				document.body.classList.toggle('highsaturation');
			});


			// increase Font Size function
			const increaseFontSizeButton = document.querySelector('#increasefontsize');

			increaseFontSizeButton.addEventListener('click', function() {
			  const currentFontSize = window.getComputedStyle(document.body).fontSize;
			  let fontSizeUnit = 'px'; // Default unit (can be adjusted)
			  let fontSizeValue = parseFloat(currentFontSize);
			
			  if (currentFontSize.includes('em')) {
				fontSizeUnit = 'em';
			  } else if (currentFontSize.includes('rem')) {
				fontSizeUnit = 'rem';
			  }
			
			  const newFontSize = fontSizeValue * 1.2;
			  document.body.style.fontSize = newFontSize + fontSizeUnit;
			});

			// decrease Font Size function
			const decreaseFontSizeButton = document.querySelector('#decreasefontsize');

			decreaseFontSizeButton.addEventListener('click', function(){
			  const currentFontSize = window.getComputedStyle(document.body).fontSize;
			  let fontSizeUnit = 'px'; // Default unit (can be adjusted)
			  let fontSizeValue = parseFloat(currentFontSize);
			
			  if (currentFontSize.includes('em')) {
				fontSizeUnit = 'em';
			  } else if (currentFontSize.includes('rem')) {
				fontSizeUnit = 'rem';
			  }
			
			  const newFontSize = fontSizeValue / 1.2;
			  document.body.style.fontSize = newFontSize + fontSizeUnit;
			});


			//increase letter spacing function
			const increaseLetterSpacingButton = document.querySelector('#increaseletterspacing');
			
			increaseLetterSpacingButton.addEventListener('click', function() {
				const currentLetterSpacing = window.getComputedStyle(document.body).letterSpacing;
				let letterSpacingValue = parseFloat(currentLetterSpacing);
				
				if(isNaN(letterSpacingValue)) {
					letterSpacingValue = 0;
				}

				const newLetterSpacing = letterSpacingValue + 1;
				document.body.style.letterSpacing = newLetterSpacing + 'px';
			});

			//increase line height function
			const increaseLineHeightButton = document.querySelector('#increaselineheight');

			increaseLineHeightButton.addEventListener('click', function() {	
				const currentLineHeight = window.getComputedStyle(document.body).lineHeight;
				let lineHeightValue = parseFloat(currentLineHeight);
				
				if(isNaN(lineHeightValue)) {
					lineHeightValue = 50;
				}

				const newLineHeight = lineHeightValue + 1;
				document.body.style.lineHeight = newLineHeight + 'px';
			});

			//zoom-in function
			const zoomInButton = document.querySelector('#zoomin');
			zoomInButton.addEventListener('click', function() {
				document.body.style.zoom = '150%';
			});

			//zoom-out function
			const zoomOutButton = document.querySelector('#zoomout');
			zoomOutButton.addEventListener('click', function() {
				document.body.style.zoom = '100%';
			});

			//readmode
			const readModeButton = document.querySelector('#readmode');
			readModeButton.addEventListener('click', function() {
				document.body.style.backgroundColor = 'black';
				document.body.style.color = 'white';
			});
			
			//whitecursor
			const whiteCursorButton = document.querySelector('#whitecursor');
			const cursorImageUrl = './Images/w21.png';
			const cursorPointer = './Images/hw21.png'; 
			whiteCursorButton.addEventListener('click', function() {
			document.body.style.cursor = `url(${cursorImageUrl}), auto`;
			const buttons = document.querySelectorAll('button');
			buttons.forEach(button => button.style.cursor = `url(${cursorPointer}), auto`);
			const links = document.querySelectorAll('a');
			links.forEach(link => link.style.cursor = `url(${cursorPointer}), auto`);
			});

			//blackcursor
			const blackCursorButton = document.querySelector('#blackcursor');
			const cursorImage = './Images/b2.png';
			const cursorPoint = './Images/hb.png';
			blackCursorButton.addEventListener('click', function() {
			document.body.style.cursor = `url(${cursorImage}), auto`;
			const buttons = document.querySelectorAll('button');
			buttons.forEach(button => button.style.cursor = `url(${cursorPoint}), auto`);
			const links = document.querySelectorAll('a');
			links.forEach(link => link.style.cursor = `url(${cursorPoint}), auto`);
			});


			//highlightlinks
			const highlightLinksButton = document.querySelector('#linkhighlighter');
			highlightLinksButton.addEventListener('click', function() {
				const toggleHighlightButton = document.getElementById('toggle-link-highlight'); // Button to control highlighting (optional)
			  
				const links = document.querySelectorAll('a'); // Select all links
			  
				function toggleHighlight(enabled) {
				  links.forEach(link => {
					link.style.backgroundColor = enabled ? "lightblue" : '';
				  });
				}
			  
				if (toggleHighlightButton) { // If toggle button exists
				  toggleHighlightButton.addEventListener('click', function() {
					const enabled = !document.body.classList.contains('link-highlight-enabled'); // Toggle highlight state based on class
					document.body.classList.toggle('link-highlight-enabled'); // Add/remove class for styling
					toggleHighlight(enabled);
				  });
				} else { // No toggle button, enable highlighting by default
				  toggleHighlight(true);
				}
			  
				// Add hover effect for visual feedback (optional)
				links.forEach(link => {
				  link.addEventListener('mouseover', function() {
					this.style.backgroundColor = "lightblue" + '80'; // Translucent highlight on hover
				  });
				  link.addEventListener('mouseout', function() {
					if (!document.body.classList.contains('link-highlight-enabled')) { // Revert only if highlighting is disabled
					  this.style.backgroundColor = '';
					}
				  });
				});
			  });
			  
		
			// reset function
			const resetButton = document.querySelector("#reset");
			resetButton.addEventListener('click', function() {
				if (document.body.classList.contains('grayscale')) {
					document.body.classList.remove('grayscale');
				}
				if (document.body.classList.contains('highsaturation')) {
					document.body.classList.remove('highsaturation');
				}
				if (document.body.classList.contains('lowsaturation')) {
					document.body.classList.remove('lowsaturation');
				}
				if (document.body.classList.contains('invert')) {
					document.body.classList.remove('invert');
				}
				document.body.style.fontSize = '16px';
				document.body.style.letterSpacing = 'normal';
				document.body.style.lineHeight = 'normal';
				document.body.style.cursor = 'auto';
				document.body.style.backgroundColor = 'white';
				document.body.style.color = 'black';
				document.body.style.zoom = '100%';
			});
		})

		.catch(error => {
			console.error('Error fetching resources:', error);
				
		});
});