const stars = document.querySelectorAll(".fa-star")
let emojis = document.querySelectorAll(".far")

let colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"]

stars.forEach((satr, index) => {
    satr.addEventListener("click", () => {
        updateRating(index)
        console.log('click', index);
    })
})

function updateRating(index) {
    stars.forEach((stars, idx) => {
        if (idx < index + 1) {
            stars.classList.add("active")
            console.log(idx);
        } else {
            stars.classList.remove("active")
        }
    })

    emojis.forEach((emoji) => {
        emoji.style.transform = `translateX(-${index * 50}px)`
        emoji.style.color = colorsArray[index]
    })
}