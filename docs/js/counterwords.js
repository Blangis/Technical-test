const texto = document.getElementById("texto");
const button = document.getElementById("button");
const parrafo = document.querySelector('p');
const refresh = document.getElementById("refresh");


button.addEventListener("click", function()  {
    console.log("click")
    
    //To desactivate the button after the first use
    button.disabled=true; 

    const paragraph= texto.value
    parrafo.textContent=paragraph;

    if (paragraph === '') {
        //When the paragraph is empty, show this legend
        parrafo.textContent = 'Por favor, ingresa un texto.';
        return;
    }

    const counter = document.createElement("button");
    counter.classList.add("frecuencia");
    counter.textContent = "Frecuencia de palabras";
    document.querySelector(".invest").appendChild(counter);

    counter.addEventListener("click", () => {
        console.log("click2");

         //To desactivate the button after the first use
         counter.disabled=true;

        const sanitizedText= paragraph.replace(/[.,\/#¿?¡!$%\^&\*;:{}=\-_"`~()]/g,"");
        console.log(sanitizedText);
        // Output: "Hola Cómo estás Hola Cómo te sientes"

        const lowerWords = sanitizedText.toLowerCase();
        console.log(lowerWords);
        // Output: "hola cómo estás hola cómo te sientes"

        const words = lowerWords.split(' ');
        console.log(words);
        // Output: ['hola','cómo','estás','hola','cómo','te','sientes']  
        
        

         /* 
        Final expected output: 
        cómo - 2
        hola -2
        estás -1 
        sientes -1 
        te -1
        */

        const frequencyWords={}

        for(let i=0; i<words.length; i++){
            let palabra = words[i]
            console.log(palabra)
            if(frequencyWords[palabra] == undefined){
                frequencyWords[palabra]=1
            } else {
                frequencyWords[palabra]++
            }
          
        }

        console.log(frequencyWords);

        // The next step is to convert the object into an array of pairs [palabra, frecuencia]
        //object.entries(): take an object and return an array of pairs [key,value]
        let sortedFrequency = Object.entries(frequencyWords);

        //Sort the array according to frequency (from high to low)
        sortedFrequency.sort((a,b) => b[1]-a[1]);
        console.log(sortedFrequency);

        const displayInfo = document.getElementById("showing_freq");
        
        const titleCard = document.createElement("h3");
        titleCard.textContent="Frecuencia de palabras en el texto";
        displayInfo.appendChild(titleCard);

        const wordList = document.createElement("ul");
        displayInfo.appendChild(wordList);

        //To traverse the array and create the list for each word, they will appear as a list on the browser
       sortedFrequency.forEach(([word,frequency]) => {
            const item = document.createElement('li');
            item.textContent = `${word} : ${frequency}`;
            wordList.appendChild(item);

        })
       
    })
    

}
);


refresh.addEventListener("click", function() {
    
    location.reload();
})


