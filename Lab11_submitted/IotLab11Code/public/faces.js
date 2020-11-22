function updatePageWithFaces() {
    $.get("http://localhost:1234/get_all_faces", function (rcvd) {
        var currentUserInfo = rcvd;
        console.log("rcvd"+JSON.stringify(rcvd));


        for (face_data of rcvd) {
            $("#main_row").append(`
            <div class="col-6">
                <div class="card ">
                    <img class="card-img-top" src="data:`+face_data.contentType+`;base64, `+face_data.imageString+ `" alt="Card image cap">
                    <div class="card-body">
                    <h5 class="card-title">`+face_data.name+`</h5>
                    <p class="card-text">`+face_data.description+`</p>
                    <form action="http://localhost:1234/detect_face_app">
                        <input type="hidden" name="name" value="`+face_data.name+`"/>
                        <input class="btn btn-primary" type="submit" value="Detect Emotions"/>
                    </form>
                    </div>
                </div>
            </div>
        `);
        }
    });
}