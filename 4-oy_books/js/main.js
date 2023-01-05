const elList = document.querySelector(".js-list");
const elBtngroup = document.querySelector(".btngroup")
const elSelectAtoZ = document.querySelector(".js-A-Z")
const elSearch = document.querySelector(".search")
const ElDarkmode=document.querySelector(".js-dark")

var elDocRow = document.querySelector(".contener");
function bookOutput(array) {
    elDocRow.innerHTML = ""
    for (var list of array) {
        var imgBox = document.createElement("div");
        imgBox.setAttribute("class", "imgBox");
        var bookid = document.createElement("h4");
        bookid.setAttribute("class", "card-id");
        bookid.textContent = `${list.id}.`;
        var booktitle = document.createElement("h3");
        booktitle.setAttribute("class", "book-title");
        booktitle.textContent = list.title;
        var bookimg = document.createElement("img");
        bookimg.setAttribute("src", "./img/" + list.imageLink);
        bookimg.setAttribute("alt", "book-img");
        var bookyear = document.createElement("p");
        bookyear.setAttribute("class", "book-year");
        bookyear.textContent = `Year: ${list.year}`;
        var bookmarked = document.createElement("p");
        bookmarked.setAttribute("class", "book-bookmarked");
        bookmarked.textContent = `Bokmarked: ${list.bookmarked}`;

        var bookauthor = document.createElement("p");
        bookauthor.setAttribute("class", "book-author");
        bookauthor.textContent = `Author: ${list.author}`;
        var bookcountry = document.createElement("p");
        bookcountry.setAttribute("class", "book-coumtry");
        bookcountry.textContent = `Country: ${list.country}`;
        var card2 = document.createElement("div");
        card2.setAttribute("class", "my_card p-3 m-3 text-center fw-bold col-3 rounded card-header border border-dark border-3");

        imgBox.appendChild(bookimg);
        card2.appendChild(bookid);
        card2.append(bookimg);
        card2.appendChild(booktitle);
        card2.appendChild(bookmarked);
        card2.appendChild(bookyear);
        card2.appendChild(bookcountry)
        card2.appendChild(bookauthor);

        elDocRow.appendChild(card2);
    }
}
bookOutput(books);
let newArray = []

elSearch.addEventListener("input", function (evt) {
    evt.preventDefault();
    elDocRow.innerHTML = ""
    let elSearchval = elSearch.value.toLocaleLowerCase()
    books.forEach((el) => {
        if (el.title.toLocaleLowerCase().includes(elSearchval)) {
            newArray.push(el)
        };
    })
    bookOutput(newArray)
    newArray = []

})

elBtngroup.addEventListener("click", (evt) => {
    evt.preventDefault()

    if (evt.target.matches('.js-name')) {
        bookOutput(books.sort((a, b) => {
            return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        }))
    };
    if (evt.target.matches('.js-year')) {
        bookOutput(books.sort((a, b) => {
            return a.language.charCodeAt(0) - b.language.charCodeAt(0)
        }))
    };

    if (evt.target.matches('.js-page')) {
        bookOutput(books.sort((a, b) => {
            return a.year - b.year
        }))
    };
    if (evt.target.matches('.js-languages')) {
        bookOutput(books.sort((a, b) => {
            return a.pages - b.pages
        }))
    };
})

elSelectAtoZ.addEventListener("change", (evt) => {
    evt.preventDefault();
    console.log(elSelectAtoZ.value);
    if (elSelectAtoZ.value !== "All") {
        if (elSelectAtoZ.value == "A-Z") {
            const sortBook = books.sort((a, b) => {
                return a.title.charCodeAt(0) - b.title.charCodeAt(0)
            })
            bookOutput(sortBook)
        }
        if (elSelectAtoZ.value == "Z-A") {
            const sortBook = books.sort((a, b) => {
                return b.title.charCodeAt(0) - a.title.charCodeAt(0)
            })
            bookOutput(sortBook)
        }
    }
    if (elSelectAtoZ.value == "All") {
        bookOutput(books)
    }

})
let theme=false
ElDarkmode.addEventListener("click",function (){
    theme=!theme
    const bg=theme ? "dark" :"light";
    window.localStorage.setItem("theme",bg)
    changeTheme()
});
function changeTheme() {
    if(window.localStorage.getItem("theme")=="dark"){
        document.body.classList.add("dark");
    }
    else{
        document.body.classList.remove("dark");
    }
    changeTheme()
}
