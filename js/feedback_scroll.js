
var currPage = 0;

var comments = [
    {
        "username": "Chico",
        "photo": null,
        "role": "Founder",
        "company": "arceus co. ltd",
        "comment": "LOREM IPSUM"
    },
    {
        "username": "Paulo",
        "photo": null,
        "role": "Founder",
        "company": "arceus co. ltd",
        "comment": "LOREM IPSUM"
    },
    {
        "username": "Durgivaldo",
        "photo": null,
        "role": "Founder",
        "company": "arceus co. ltd",
        "comment": "LOREM IPSUM"
    },
    {
        "username": "Yslatovek",
        "photo": null,
        "role": "Founder",
        "company": "arceus co. ltd",
        "comment": "LOREM IPSUM"
    }
]


function scrollComentsForward() {
    currPage = (currPage + 1) % comments.length;

    let itensToShow = [
        comments[currPage],
        comments[(currPage + 1) % comments.length],
        comments[(currPage + 2) % comments.length]
    ];

    displayAtContainer(itensToShow);

}

function scrollComentsBack() {
    currPage = (currPage - 1 + comments.length) % comments.length;


    let itensToShow = [
        comments[currPage],
        comments[(currPage - 1 + comments.length) % comments.length],
        comments[(currPage - 2 + comments.length) % comments.length]
    ];

    displayAtContainer(itensToShow);
}

function displayAtContainer(itens) {
    const defaultProfileImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrT_BjEyf_LEpcvb225JX2qFCJcLz5-0RXLg&usqp=CAU"
    const commentsContainer = document.getElementById("feedback_container");
    let firstCommentFlag = true;
    let htmlContent = "";

    itens.forEach(element => {
        htmlContent +=
            "<div class=\"comment_card\"" + (firstCommentFlag ? " id=\"first_comment\"" : "") + ">\n" +
            "   <img src=" + (element.photo == null ? defaultProfileImage : element.photo) + "> </img>\n" +
            "   <p>\"" + element.comment + "\"</p>\n" +
            "    <div>\n" +
            "        <p style=\"font-weight: bolder;\">" + element.username + "</p>\n" +
            "        <p>" + element.role + ", " + element.company + "</p>\n" +
            "    </div>\n" +
            "</div>\n\n"
        firstCommentFlag = false;
    });

    commentsContainer.innerHTML = htmlContent;
}