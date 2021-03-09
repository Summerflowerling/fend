const baseURL = "https://api.meaningcloud.com/sentiment-2.1"


//post request

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/addData',{
        method: 'POST',
        credentials: 'same-origin',
       mode: 'cors',
        headers:{
            'Content-Type':'application/json',
        }, 
        body:JSON.stringify({sentence: formText}),
        
    })
    
   

    /*postData('/addData', { sentence: formText })*/
  
}

export { handleSubmit }
