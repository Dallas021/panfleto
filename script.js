window.onload = function() {
    const imageUpload = document.getElementById('image-upload');
    const imageContainer = document.getElementById('image-container');
    const textOverlay = document.getElementById('text-center');
    const textInput = document.getElementById('text-input');
    const textOverlayProd = document.getElementById('text-prod')
    const textInputProd = document.getElementById('text-input-prod')
    const textOverlayCod = document.getElementById('text-cod')
    const textInputCod = document.getElementById('text-input-cod')
    const textOverlayCor = document.getElementById('text-cor')
    const textOverlaySemJuros = document.getElementById('text-semjuros')
    const textInputSemJuros = document.getElementById('text-input-semjuros')
    const textInputCor = document.getElementById('text-input-cor')
    const escreverButton = document.getElementById('btn-escrever');
    const textOverlayAvista = document.getElementById('text-avista')
    const textInputAvista = document.getElementById('text-input-avista')
    const textOverlayCartao = document.getElementById('text-cartao')
    const textInputCartao = document.getElementById('text-input-cartao')
  
    imageUpload.addEventListener('change', function(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
  
      reader.onload = function() {
        const image = document.getElementById('imagem');
        image.src = reader.result;
        textOverlay.style.width = image.width + "100%" //text-center
        textOverlay.style.height = image.height + 'px'; //text-center
        textOverlayProd.style.width = image.width + "1000px" //text-prod
        textOverlayProd.style.height = image.height + 'px'; //text-prod
        textOverlayCod.style.width = image.width + "100%" //text-cod
        textOverlayCod.style.height = image.height + 'px'; //text-cod
        textOverlayCor.style.width = image.width + "100%" //text-cor
        textOverlayCor.style.height = image.height + 'px'; //text-cor
        textOverlaySemJuros.style.width = image.width + "100%" //text-cor
        textOverlaySemJuros.style.height = image.height + 'px'; //text-cor
        textOverlayAvista.style.width = image.width + '100%'; //text-avista
        textOverlayAvista.style.height = image.height + 'px'; //text-avista
        textOverlayCartao.style.width = image.width + '100%'; //text-cartao
        textOverlayCartao.style.height = image.height + 'px'; //text-cartao
      };
  
      reader.readAsDataURL(file);
    });
  
    escreverButton.addEventListener('click', function() {
      textOverlay.textContent = textInput.value; //text-center + text-input-center
      textOverlayProd.textContent = textInputProd.value //text-prod + text-input-prod
      textOverlayCod.textContent = textInputCod.value //text-cod + text-input-cod
      textOverlayCor.textContent = textInputCor.value //text-cor + text-input-cor
      textOverlaySemJuros.textContent = textInputSemJuros.value+"X Sem Juros" //text-semjuros + text-input-semjuros
      textOverlayAvista.textContent = textInputAvista.value //text-avista + text-input-avista
      textOverlayCartao.textContent = textInputCartao.value //text-cartao + text-input-cartao
    });
  };
  
