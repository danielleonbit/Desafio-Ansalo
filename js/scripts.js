$(document).ready(function() {

    let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let arrayLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

    let htmlBotones = ''
    let dataTxtNumbers = '';
    let dataTxtLetters = '';

    for (let i = 0; i < arrayNumbers.length && arrayLetters.length; i++) {
        htmlBotones += `<input type="button" class="btn btn-info btn-show-text m-3" id="${arrayLetters[i]}-${arrayNumbers[i]}" value="${arrayLetters[i]} - ${arrayNumbers[i]}" >`
    }
    $(".div-botones").html(htmlBotones);
    $(".btn-show-text").click(function() {
        //segundo commit
        dataTxtNumbers = $("#txtNumbers").val();
        dataTxtLetters = $("#txtLetters").val();

        let dataBtn = $(this).attr("id").split('-');
        let vnumber = parseInt(dataBtn[1]);
        let tletter = dataBtn[0];

        if (dataTxtNumbers != "") {
            let arrayNumbers = dataTxtNumbers.split('-');

            if (arrayNumbers[arrayNumbers.length - 1] == 0) {
                if (dataTxtLetters != "") {
                    let arrayLetters = dataTxtLetters.split('-');
                    let letterToNumber = [];
                    for (let i = 0; i < arrayLetters.length; i++) {
                        letterToNumber.push(arrayNumbers[i]);

                    }
                    if (vnumber == 0 && letterToNumber[letterToNumber.length - 1] == 9) {
                        dataTxtLetters += `-${tletter}`;
                        $("#txtLetters").val(dataTxtLetters);
                        $(".txt-warning").removeClass('alert-warning');
                        $(".txt-warning").addClass('alert-success');
                        $(".txt-warning").html('Felicidades, completaste el desafio.');
                        $('.btn-show-text').prop('disabled', true);
                    } else if (vnumber - letterToNumber[letterToNumber.length - 1] == 1) {
                        dataTxtLetters += `-${tletter}`;
                        $("#txtLetters").val(dataTxtLetters);
                        $(".txt-warning").html('');
                    } else if (letterToNumber[letterToNumber.length - 1] == 0) {
                        $(".txt-warning").removeClass('alert-warning');
                        $(".txt-warning").addClass('alert-success');
                        $(".txt-warning").html('Felicidades, completaste el desafio.');
                        $('.btn-show-text').prop('disabled', true);
                    } else {
                        $(".txt-warning").html('Esa no es la letra que continua.');
                    }

                } else {
                    if (vnumber == 1) {
                        dataTxtLetters = tletter;
                        console.log(dataTxtLetters)
                        $("#txtLetters").val(dataTxtLetters);
                        $(".txt-warning").html('');
                    } else {
                        $(".txt-warning").html('Debes empezar por la letra A.');
                    }
                }
            } else if (vnumber == 0 && arrayNumbers[arrayNumbers.length - 1] == 9) {
                dataTxtNumbers += `-${vnumber}`;
                $("#txtNumbers").val(dataTxtNumbers);
                $(".txt-warning").html('');
            } else if (vnumber - arrayNumbers[arrayNumbers.length - 1] == 1) {
                dataTxtNumbers += `-${vnumber}`;
                $("#txtNumbers").val(dataTxtNumbers);
                $(".txt-warning").html('');
            } else {
                $(".txt-warning").html('Ese no es el numero que continua.');
            }
        } else {

            if (vnumber == 1) {
                dataTxtNumbers = vnumber;
                console.log(dataTxtNumbers)
                $("#txtNumbers").val(dataTxtNumbers);
                $(".txt-warning").html('');
            } else {
                $(".txt-warning").html('Debes empezar por el numero 1.');
            }

        }

    });
    $(".btn-clear").click(function() {
        $("#txtNumbers").val('');
        $("#txtLetters").val('');
        $(".txt-warning").removeClass('alert-success');
        $(".txt-warning").addClass('alert-warning');
        $('.btn-show-text').prop('disabled', false);
        $(".txt-warning").html('');
    });
});