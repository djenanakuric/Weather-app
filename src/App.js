import React, {useState, useEffect} from 'react';
import Content from './Content';


function App() {
  const [cityCode, setCityCode] = useState('33028');
  const [weatherInfo, setWeatherInfo] = useState('');
  const brojac = 0;
  
/*
  const fetchCity = async() => {
    const data = await fetch("http://dataservice.accuweather.com/locations/v1/cities/search?apikey=QFjV9fwIUtp82GCkSNI4F791xKKwFM0B&q=London&language=en-en");
    const dataOfWeather = await data.json();
    setCityCode(dataOfWeather[0].Key);
  }

    //const fetchWeather = async() => {
      //const data = await fetch("http://dataservice.accuweather.com/currentconditions/v1/33028?apikey=%09QFjV9fwIUtp82GCkSNI4F791xKKwFM0B&language=en-us&details=true");
      //const dataOfWeather = await data.json();
      //console.log(dataOfWeather)
     // setWeatherInfo(dataOfWeather);
    }
useEffect( () => {
  fetchWeather();
}, [cityCode])
 */
const informacije = [
  {
    "LocalObservationDateTime": "2022-03-29T11:42:00+02:00",
    "EpochTime": 1648546920,
    "WeatherText": "Sunny",
    "WeatherIcon": 1,
    "HasPrecipitation": false,
    "PrecipitationType": null,
    "IsDayTime": true,
    "Temperature": {
      "Metric": {
        "Value": 15.7,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 60,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "RealFeelTemperature": {
      "Metric": {
        "Value": 20.9,
        "Unit": "C",
        "UnitType": 17,
        "Phrase": "Pleasant"
      },
      "Imperial": {
        "Value": 70,
        "Unit": "F",
        "UnitType": 18,
        "Phrase": "Pleasant"
      }
    },
    "RealFeelTemperatureShade": {
      "Metric": {
        "Value": 16.2,
        "Unit": "C",
        "UnitType": 17,
        "Phrase": "Cool"
      },
      "Imperial": {
        "Value": 61,
        "Unit": "F",
        "UnitType": 18,
        "Phrase": "Cool"
      }
    },
    "RelativeHumidity": 29,
    "IndoorRelativeHumidity": 37,
    "DewPoint": {
      "Metric": {
        "Value": -2.2,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 28,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "Wind": {
      "Direction": {
        "Degrees": 315,
        "Localized": "NW",
        "English": "NW"
      },
      "Speed": {
        "Metric": {
          "Value": 3.7,
          "Unit": "km/h",
          "UnitType": 7
        },
        "Imperial": {
          "Value": 2.3,
          "Unit": "mi/h",
          "UnitType": 9
        }
      }
    },
    "WindGust": {
      "Speed": {
        "Metric": {
          "Value": 10.2,
          "Unit": "km/h",
          "UnitType": 7
        },
        "Imperial": {
          "Value": 6.4,
          "Unit": "mi/h",
          "UnitType": 9
        }
      }
    },
    "UVIndex": 5,
    "UVIndexText": "Moderate",
    "Visibility": {
      "Metric": {
        "Value": 16.1,
        "Unit": "km",
        "UnitType": 6
      },
      "Imperial": {
        "Value": 10,
        "Unit": "mi",
        "UnitType": 2
      }
    },
    "ObstructionsToVisibility": "",
    "CloudCover": 0,
    "Ceiling": {
      "Metric": {
        "Value": 10211,
        "Unit": "m",
        "UnitType": 5
      },
      "Imperial": {
        "Value": 33500,
        "Unit": "ft",
        "UnitType": 0
      }
    },
    "Pressure": {
      "Metric": {
        "Value": 1015,
        "Unit": "mb",
        "UnitType": 14
      },
      "Imperial": {
        "Value": 29.97,
        "Unit": "inHg",
        "UnitType": 12
      }
    },
    "PressureTendency": {
      "LocalizedText": "Falling",
      "Code": "F"
    },
    "Past24HourTemperatureDeparture": {
      "Metric": {
        "Value": 1.7,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 3,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "ApparentTemperature": {
      "Metric": {
        "Value": 16.1,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 61,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "WindChillTemperature": {
      "Metric": {
        "Value": 15.6,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 60,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "WetBulbTemperature": {
      "Metric": {
        "Value": 7.5,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 46,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "Precip1hr": {
      "Metric": {
        "Value": 0,
        "Unit": "mm",
        "UnitType": 3
      },
      "Imperial": {
        "Value": 0,
        "Unit": "in",
        "UnitType": 1
      }
    },
    "PrecipitationSummary": {
      "Precipitation": {
        "Metric": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0,
          "Unit": "in",
          "UnitType": 1
        }
      },
      "PastHour": {
        "Metric": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0,
          "Unit": "in",
          "UnitType": 1
        }
      },
      "Past3Hours": {
        "Metric": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0,
          "Unit": "in",
          "UnitType": 1
        }
      },
      "Past6Hours": {
        "Metric": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0,
          "Unit": "in",
          "UnitType": 1
        }
      },
      "Past9Hours": {
        "Metric": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0,
          "Unit": "in",
          "UnitType": 1
        }
      },
      "Past12Hours": {
        "Metric": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0,
          "Unit": "in",
          "UnitType": 1
        }
      },
      "Past18Hours": {
        "Metric": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0,
          "Unit": "in",
          "UnitType": 1
        }
      },
      "Past24Hours": {
        "Metric": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0,
          "Unit": "in",
          "UnitType": 1
        }
      }
    },
    "TemperatureSummary": {
      "Past6HourRange": {
        "Minimum": {
          "Metric": {
            "Value": 2.6,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 37,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Maximum": {
          "Metric": {
            "Value": 15.7,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 60,
            "Unit": "F",
            "UnitType": 18
          }
        }
      },
      "Past12HourRange": {
        "Minimum": {
          "Metric": {
            "Value": 2.6,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 37,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Maximum": {
          "Metric": {
            "Value": 15.7,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 60,
            "Unit": "F",
            "UnitType": 18
          }
        }
      },
      "Past24HourRange": {
        "Minimum": {
          "Metric": {
            "Value": 2.6,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 37,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Maximum": {
          "Metric": {
            "Value": 20.7,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 69,
            "Unit": "F",
            "UnitType": 18
          }
        }
      }
    },
    "MobileLink": "http://www.accuweather.com/en/ba/sarajevo/33028/current-weather/33028?lang=en-us",
    "Link": "http://www.accuweather.com/en/ba/sarajevo/33028/current-weather/33028?lang=en-us"
  }
];

}
  return (
    <div className="App">
     <div className='main-window'>
       <Content />
     </div>
    </div>
  );
}

export default App;
