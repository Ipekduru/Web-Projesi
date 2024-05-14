document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://api.openf1.org/v1/drivers?session_key=9158'; // Belirli bir session_key ile API çağrısı
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log(data); // Tüm sürücü verilerini konsola yazdırır
        displayDriverInfo(data);
      })
      .catch(error => console.error('Error fetching driver data:', error));
  
    function displayDriverInfo(driverData) {
      const driverContainer = document.getElementById('driverContainer');
  
      if (!Array.isArray(driverData) || driverData.length === 0) {
        driverContainer.innerHTML = '<p>No driver data found.</p>';
        return;
      }
  
      driverData.forEach(driver => {
        const driverDiv = document.createElement('div');
        driverDiv.className = 'driver-info';
  
        driverDiv.innerHTML = `
          <h2>${driver.full_name}</h2>
          <img src="${driver.headshot_url}" alt="${driver.full_name}">
          <p><strong>Team:</strong> ${driver.team_name}</p>
          <p><strong>Country:</strong> ${driver.country_code}</p>
          <p><strong>Driver Number:</strong> ${driver.driver_number}</p>
        `;
  
        driverContainer.appendChild(driverDiv);
      });
    }
  });
  