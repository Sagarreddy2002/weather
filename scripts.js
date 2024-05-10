
    function getweather(){
        const Weather = document.getElementById("weather").value;
        console.log(Weather)
        let url = (`https://goweather.herokuapp.com/weather/${Weather}`)
        let fetched_url= fetch(url)
        fetched_url.then((response)=>{
            if (!response.ok){
              //  throw new Error('HTTP error! status: ' + response.status);
                console.log(new Error("something went wrong"));
            }
            else{
                return response.json();
            }
        })
        .then((datas)=>{
            console.log(datas);
            console.log(datas.temperature);
            console.log(datas.description);
            console.log(datas.wind);
            console.log("---FORECAST---");
            for( i in datas.forecast){
              document.getElementById("res1").innerHTML=`temperature:${datas.temperature}<br>description:${datas.description}<br>wind:${datas.wind}`;
            document.getElementById('res2').innerHTML='----FORECAST----'
            document.getElementById('res3').innerHTML=`DAY: ${datas.forecast[i].day} <br>temperature: ${datas.forecast[i].temperature}<br>wind: ${datas.forecast[i].wind}`
            }
            })
            .catch((err)=>{
              document.getElementById("res1").innerHTML=`please check ur internet connection,err`;
        });
    }
    
