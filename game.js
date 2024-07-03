$(document).ready(function () {
    DistributeCards();
    let SelectedCardUp = 0;
    let SelectedCardDown = 0;
    $(".Up-5-Cards button").on("click", function () {
        SelectedCardUp = $(this).attr("class");
        console.log(SelectedCardUp);
    })

    $(".Down-5-Cards button").on("click", function () {
        SelectedCardDown = $(this).attr("class");
        console.log(SelectedCardDown);
    })

    $(".change").on("click", change);
    
})

function DistributeCards() {
    index = 0
    $(".Up-5-Cards button").each(function () {
        index++;
        $(this).text(index);
    });

    $(".Down-5-Cards button").each(function () {
        index++;
        $(this).text(index);
    });

}

function change() {
    $(".UpCard button").text("DownCard")
    $(".DownCard button").text("UpCard")
}



