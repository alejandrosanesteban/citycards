const container = document.getElementById ("cards-container");


const archivo = async () => {
    try {
        const response = await fetch ("ciudades.json")
        const data = await response.json()

        let contenidoHTML = "" ;

        data.forEach( (element) => {
            contenidoHTML += `<div class="col-12 col-sm-8 col-md-6 col-lg-4 col">
            <div class="card mx-auto">
              <div style="position: relative;">
                <img class="card-img img-fluid" src=${element.image} alt="Foto de ${element.name}">
                <div class="card-img-overlay text-white d-flex flex-column justify-content-end">
                  <h4 class="card-title">${element.name}</h4>
                  <p class="card-text"> ${element.description}</p>
                  <div class="link d-flex">
                    <button type="button" class="btn btn-dark btn-sm btn-block">Descubrir</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
            `;
            container.innerHTML = contenidoHTML;
        });



    } catch (error) {
        console.log(error);
    }
    
} 



archivo();
