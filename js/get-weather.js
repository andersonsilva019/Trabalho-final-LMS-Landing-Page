
const showWeather = document.querySelector('.header-weather');

// Função para obter o clima com base nas coordenadas do usuário
function obterClimaDoUsuario() {
  // Verifica se o navegador suporta geolocalização
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (location) => {
      const latitude = location.coords.latitude;
      const longitude = location.coords.longitude;

      const apiKey = '5491d580b2c92550431b07a8e60588d5';
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=pt&units=metric`;

      // Requisição para a API do OpenWeatherMap
      const result = await axios.get(url)

      console.log(result.data);

      const temperatura = result.data?.main?.temp; // 35.75

      showWeather.innerHTML = `
        <img src="/images/sun.png" alt="ícone de um sol">
        ${temperatura.toFixed(0)}°C
      `;

    });
  } else {
    console.log('Geolocalização não é suportada pelo seu navegador');
  }
}

// Chamada da função para obter o clima com base na localização do usuário
obterClimaDoUsuario();