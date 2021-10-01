fetch("https://api.ipify.org?format=json")
  .then(data => data.json())
  .then(sData => {
      const sText = "Your current IP address is " + sData.ip;
      const sp = document.getElementById('sp')

      sp.innerHTML = sText;
  })