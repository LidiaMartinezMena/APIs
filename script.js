//comprobamos si la File API es soportada
if (window.File && window.FileReader && window.FileList){
    function handleFileSelect(evt){
        var files = evt.target.files[0];
        
        var reader = new FileReader();

        reader.onload = (function (theFile) {
            return function (e){
                var span = document.createElement('span');
                span.innerHTML = ['<video controls id="video" class="thumb" width="620" src="' ,e.target.result, '" title="', escape(theFile.name), '"/>'].join('');
                document.getElementById('video-output').insertBefore(span, null);

                alert("El video está cargando");

                document.getElementById('reproducir').style.display = 'inline';
                document.getElementById('pausa').style.display = 'inline';
                document.getElementById('subir').style.display = 'inline';
                document.getElementById('bajar').style.display = 'inline';

            };
        })(files);
        reader.readAsDataURL(files);
    }
    document.getElementById('files').addEventListener('change', handleFileSelect, false);
} else {
    alert('File APIs no están soportadas por este navegador');
}