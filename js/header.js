document.addEventListener("DOMContentLoaded", function () {
    mapMetaDataInHeader();
    mapSocialLinksData();
    mapStatsData();
});

function mapMetaDataInHeader() {
    var tagElement = document.getElementById("tag-label");
   
    let firstName = 'Isaí';
    let lastName = 'Arellano';

    var firstNameElement = document.getElementById("first-name");
    firstNameElement.innerHTML = firstName;

    var lastNameElement = document.getElementById("last-name");
    lastNameElement.innerHTML = lastName;

}

function mapSocialLinksData() {
    let socials = [
        {
            "icon": "fa fa-linkedin-square",
            "value": "https://www.linkedin.com/in/isai-x-x/"
        },
        {
            "icon": "fa fa-github",
            "value": "https://github.com/isai-arellano"
        },
        {
            "icon": "fa fa-youtube",
            "value": "https://www.youtube.com/@Isai.Arellano"
        },
        {
            "icon": "fa fa-instagram",
            "value": "https://www.instagram.com/isai.x.x/"
        },
    ];

    // Iconos en la sección superior
    for (var i = 0; i < socials.length; i++) {
        var anchor = document.createElement("a");
        anchor.className = "social-icon-wrapper";

        var icon = document.createElement("i");
        icon.className = "social-icon " + socials[i]["icon"];

        var link = socials[i]["value"];
        anchor.href = link;
        anchor.target = "_blank";

        anchor.appendChild(icon);

        var socialHandles = document.getElementById("social-handles");
        socialHandles.appendChild(anchor);
    }

    // Iconos en la sección de contacto
    for (var i = 0; i < socials.length; i++) {
        var anchor = document.createElement("a");
        anchor.className = "social-icon-wrapper";
        anchor.style.padding = "3%";

        var icon = document.createElement("i");
        icon.className = "social-icon " + socials[i]["icon"];

        var link = socials[i]["value"];
        anchor.href = link;
        anchor.target = "_blank";

        anchor.appendChild(icon);

        var socialHandlsContact = document.getElementById("social-contact-icons");
        var extraDiv = document.createElement("div");

        socialHandlsContact.appendChild(extraDiv);
        socialHandlsContact.appendChild(anchor);
        socialHandlsContact.appendChild(extraDiv);
    }
}

function mapStatsData() {
    let stats = [
        {
            "value": "+8",
            "text-1": "Años",
            "text-2": "Experiencia"
        },
    ];

    for (var i = 0; i < stats.length; i++) {
        var stat = stats[i];
        var value = stat["value"];
        var txt1 = stat["text-1"];
        var txt2 = stat["text-2"];

        var div = document.createElement("div");
        div.className = "stats stats-data";

        var valueText = document.createElement("h1");
        valueText.className = "value";
        valueText.textContent = value;

        var textColumn = document.createElement("div");
        textColumn.className = "stats-label-column";

        var text1 = document.createElement("div");
        text1.className = "label stats-label";
        text1.innerHTML = txt1;

        var text2 = document.createElement("div");
        text2.className = "label stats-label";
        text2.innerHTML = txt2;

        textColumn.appendChild(text1);
        textColumn.appendChild(text2);

        div.appendChild(valueText);
        div.appendChild(textColumn);

        var overaAllStatsDiv = document.getElementById("overall-stats");
        overaAllStatsDiv.append(div);
    }
}