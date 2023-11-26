function convertHexToRGB() {
    const hexInput = document.getElementById('hexInput').value;
    const rgbOutput = document.getElementById('rgbOutput');
  
    const isHexValid = /^#[0-9A-F]{6}$/i.test(hexInput);
  
    if (isHexValid) {

      const hex = hexInput.substring(1);
  

      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);


      rgbOutput.textContent = `RGB: ${r}, ${g}, ${b}`;
      rgbOutput.style.color = '#4682b4'; 
    } else {

      rgbOutput.textContent = 'Invalid hex color';
      rgbOutput.style.color = 'red';
    }
  }