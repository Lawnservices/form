document.getElementById("masa").addEventListener("click", function(){
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();  
      
       
      const formData = new FormData(this);

       
      fetch('url_del_servidor_que_procesa_el_formulario', {
        method: 'GET',
        body: formData
      })
      .then(response => {
        if (response.ok) {
          
          alert('¡Formulario enviado con éxito!');
          this.reset();  
        } else {
           
          alert('Error al enviar el formulario. Inténtalo de nuevo más tarde.');
        }
      })
      .catch(error => {
         
        alert('Error al enviar el formulario. Inténtalo de nuevo más tarde.');
        console.error('Error:', error);
      });
    });
    
});