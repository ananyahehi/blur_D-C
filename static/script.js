document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgElement = document.getElementById('uploadIcon');
            imgElement.src = e.target.result;
            imgElement.style.borderRadius = '50px';
            updateImageSize(imgElement);

            // Remove green background color
            const uploadBox = document.getElementById('uploadBox');
            uploadBox.style.backgroundColor = 'transparent';
        };
        
        reader.readAsDataURL(file);
    }
});

document.getElementById('uploadBox').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});

document.getElementById('submitButton').addEventListener('click', function() {
    document.getElementById('resultContainer').style.display = 'block';
});

function updateImageSize(imgElement) {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 600) {
        imgElement.style.width = '100%';
        imgElement.style.height = '250px';
    } else if (screenWidth <= 768) {
        imgElement.style.width = '100%';
        imgElement.style.height = '300px';
    } else {
        imgElement.style.width = '395px';
        imgElement.style.height = '300px';
    }
}
