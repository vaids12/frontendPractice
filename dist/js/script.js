console.log("testas")


$(document).ready(function () {

    $("#toggleBox").click(function (e) {
        e.preventDefault();
        $("#square").toggle();
    })



    $("#height").click(function (e) {
        e.preventDefault();
        if ($("#square").css("height") === "200px") {
            $("#square").css({
                "height": "280px",
                "top": "10px",
            });
        } else {
            $("#square").css({
                "height": "200px",
                "top": "50px",
            });
        };

    });

    $("#width").click(function (e) {
        e.preventDefault();
        if ($("#square").css("width") === "200px") {
            $("#square").css({
                "width": "400px",
            });
        } else {
            $("#square").css({
                "width": "200px",
            });
        };

    });

    $("#center").click(function (e) {
        e.preventDefault();
        if ($("#square").css("right") === "50px") {
            $("#square").css({
                "right": "50%",
            });
        } else {
            $("#square").css({
                "right": "50px",
                "top": "50px",
            });
        };

    });

    $("#position").click(function (e) {
        e.preventDefault();
        if ($("#square").css("top") === "50px") {
            $("#square").css({
                "top": "250px",
                "right": "50%"
            });
        } else {
            $("#square").css({
                "top": "50px",
                "right": "50px",
            });
        };

    });

    $(".iconButton ").click(function (e) {
        e.preventDefault();
        $("#navbar").toggle(300);

    });

    $(".colorDiv").click(function (e) {
        e.preventDefault();

        function color() {
            return "rgb(" + Math.ceil(Math.random() * 255) + ", " + Math.ceil(Math.random() * 255) + ", " + Math.ceil(Math.random() * 255) + ")";
        };

        let color1 = color();
        let color2 = color();
        let color3 = color();
        let color4 = color();
        let color5 = color();

        $("#color1").css({
            "background-color": color1,
        });

        $("#color2").css({
            "background-color": color2,
        });

        $("#color3").css({
            "background-color": color3,
        });

        $("#color4").css({
            "background-color": color4,
        });

        $("#color5").css({
            "background-color": color5,

        });

        $("#color1").text(color1);
        $("#color2").text(color2);
        $("#color3").text(color3);
        $("#color4").text(color4);
        $("#color5").text(color5);
    });

    let firstNames = [];
    let lastNames = [];
    let birthDates = [];
    let indexes = [];
    let index = 1;

    $("#submit").click(function (e) {
        e.preventDefault();

        let name = $("#firstName").val();
        let lastName = $("#lastName").val();
        let birthDate = $("#birthDate").val();
        let year = new Date();
        let now = year.getFullYear();

        if (!firstName || !lastName || !birthDate) {
            alert(" laukeliai negali būti tušti");
        } else if (birthDate.length != 4 || parseInt(birthDate) / parseInt(birthDate) != 1) {
            alert("gimimo metu formatas yra MMMM")
        } else if (parseInt(birthDate) > now) {
            alert("You will be born only in " + (parseInt(birthDate) - now) + " years....")
        } else if (parseInt(birthDate) - now == 0) {
            alert(" Congrats. You born this year.")
        } else {
            document.getElementById("table").style = "";

            let year = new Date();
            let now = year.getFullYear();
            let age = now - parseInt(birthDate);


            firstNames.push(firstName);
            lastNames.push(lastName);
            birthDates.push(age);
            indexes.push(index);
            index = index + 1;


            let tr = "<tr class = 'duomenys'><td>" + indexes[indexes.length - 1] + "</td><td>" + firstNames[firstNames.length - 1] + "</td>" + "<td>" + lastNames[lastNames.length - 1] + "</td>" + "<td>" + birthDates[birthDates.length - 1] + "</td></tr>";


            $("#data").append(tr);

            $("#firstName").val("");
            $("#lastName").val("");
            $("#birthDate").val("");


        }

    })
});