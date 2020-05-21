const url = `https://www.flickr.com/services/rest/?method=flickr.galleries.getInfo&api_key=f6e95b3acb959362d0eb8b10f0393f1f&gallery_id=72157713821402061&primary_photo_size=&cover_photos_size=150&limit=6&short_limit=5&format=json&nojsoncallback=1`

getPhotos();

function getPhotos() {
    $.ajax({     
        url: url,
        dataType: 'json',
        success: function(response){ 	
            showPhotos(response.gallery);
        } 
    });
}

function showPhotos(data) {

    let title = $("<h2></h2>").text(data.title._content);
    let description = $("<p></p>").text(data.description._content);
    let link = $("<a>Access the gallery page by clicking here.</a>").attr("href", data.url).attr("target", "_blank");
    let div = $("<div></div>").addClass("grid");
    let main = $("main");

    main.append(title, description, link, div);

    data.cover_photos.photo.forEach(value => {
        let figure = $("<figure></figure>").addClass("img");
        let img = $("<img>").attr("src", value.url);
        div.append(figure.append(img));
    });
}