interface IQuery {
  getUrl(city: string): string
  getWeatherByCity(city: string): Promise<Response>
}

class Query implements IQuery {
  getUrl(city: string) {
    return `http://api.weatherapi.com/v1/forecast.json?key=2b437c4f03eb482d946180821222905&q=${city}&days=3&aqi=no&alerts=no`
  }

  getWeatherByCity(city: string) {
    const url = this.getUrl(city)

    return fetch(url)
      .then(response => {
        return response.json()
      })
      .then(data => {
        return data.forecast.forecastday
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const query = new Query()