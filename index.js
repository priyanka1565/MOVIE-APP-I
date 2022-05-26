let key = "6cba4a08"
     let main_div = document.getElementById("movie");
  

    async function getMovei() {

        try{
            let input = document.getElementById('name').value;

        let url = `http://www.omdbapi.com/?apikey=${key}&t=${input}`;


        let res = await fetch(url);
        let data = await res.json();
        append(data)
     

        console.log("data:", data)
        }
        catch(e){
            console.log(e.message)
        }
    }

    getMovei();

    function append(data){
        
        let div = document.createElement('div');

        let img = document.createElement('img');
        img.src = data.Poster

        
        div.append(img)

        main_div.append(img)

        
    }

    

