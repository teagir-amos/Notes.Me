const searchBar = document.querySelector("#searchBar");
const searchIcon = document.querySelector("#searchIcon");
const noteArea = document.querySelector("#noteArea");
const save = document.querySelector("#save");
const cancel = document.querySelector("#cancel");
const textarea = document.querySelector("#textInput");
const dotTurquoise = document.querySelector("#dotTurquoise");
const erase = document.querySelector("#erase");
const deleteRed = document.querySelector("#eraseRed")
const sampleDelete = document.querySelector("#sampleDelete");
const sample = document.querySelector("#sample");
const editRed = document.querySelector("#editRed");
const bold = document.querySelector("#bold");
const italic = document.querySelector("#italic");
const underline = document.querySelector("#underline");
console.log(bold, italic, underline);

searchIcon.addEventListener("click", function () {
    const show = document.getElementById("searchBar");
    if (show.style.display === "none") { //Always use a stict operator on this
        show.style.display = "block"
    } else {
        show.style.display = "none"
    }
});


const add = document.querySelector("#add");
const dots = document.querySelector("#dots");
console.log(dots)
add.addEventListener("click", function () {
    const showDots = document.getElementById("dots");
    if (showDots.style.display === "none") {
        showDots.style.display = "flex";
    } else {
        showDots.style.display = "none"
    }
});


sampleDelete.addEventListener("click", function () {
    sample.style.display = "none";
})

//creating Elements
function addItem() {
    const ul = document.querySelector("#addItem");
    const dotRed = document.querySelector("#dotRed");
    const textarea = document.querySelector("#textInputRed");
    const essentials = document.querySelector("#essentials");
    const dateRed = document.querySelector("#dateRed");
    dotRed.addEventListener("click", function () {
        const li = document.createElement("li")
        li.className = `bg-crimson w-full h-fit rounded-lg p-2`; //adding the class(li) properties
        const p = document.createElement("p");
        p.className = "antialiased font-Arimo text-lg pb-10"; //adding the class(p) properties
        p.textContent = //What the user types/note
            "Add a note";
        const div = document.createElement("div");
        div.className = "flex gap-5 justify-end";
        const date = document.createElement("div");
        date.className = "flex bg-cordovan justify-center items-center p-2 rounded-lg text-white";
        date.textContent = new Date().toDateString(); //the date that the user typed the note.
        const button = document.createElement("button");
        button.className = "bg-black p-2 rounded-lg";


        button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" class="size-6">
        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z"/>
       <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5.75 0 0 1-1.5 1.5H5.25a1.5.75 0 0 1-1.5-1.5V8.25a1.5.75 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z"/>
       </svg>
       `;
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "bg-cordovan text-white p-2 rounded-lg";
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", () => { //adding event listener to the delete button
            li.remove();
            document.getElementById("textInputRed").style.display = "none"
        });

        button.addEventListener("click", function () {
            document.getElementById("noteArea").style.display = "initial";
            document.getElementById("textInputRed").style.display = "initial";
            document.getElementById("textInputAmber").style.display = "none";
            document.getElementById("textInputPurple").style.display = "none";
            document.getElementById("textInputGreen").style.display = "none";
            document.getElementById("textInputTeal").style.display = "none";
            li.style.display = "none";
            document.getElementById("addItem").style.display = "grid";
        })

        //saving notes to local storage
        save.addEventListener("click", function () {
            const text = document.getElementById("textInputRed").value;
            console.log(text);
            document.getElementById("textInputAmber").style.display = "none"
            document.getElementById("textInputRed").style.display = "initial"
            document.getElementById("textInputPurple").style.display = "none";

            document.getElementById("noteArea").style.display = "none";
            li.style.display = "initial";
            document.getElementById("addItem").style.display = "grid";
            p.textContent = //What the user types/note
                text;

        });



        bold.addEventListener("click", function () {
            document.getElementById("bold").style.backgroundColor = "#dc143c";
            document.getElementById("bold").style.borderRadius = "5px";
            document.getElementById("italic").style.backgroundColor = "initial";
            document.getElementById("underline").style.backgroundColor = "initial";
            const text = document.getElementById("textInputRed").value;
            document.getElementById("textInputRed").value = text;
            if (document.getElementById("textInputRed").style.fontWeight === "bold") {
                document.getElementById("textInputRed").style.fontWeight = "initial";

            } else {
                document.getElementById("textInputRed").style.fontWeight = "bold";
            }
        });

        italic.addEventListener("click", function () {
            document.getElementById("italic").style.backgroundColor = "#dc143c";
            document.getElementById("italic").style.borderRadius = "5px";
            document.getElementById("bold").style.backgroundColor = "initial";
            document.getElementById("underline").style.backgroundColor = "initial";
            const text = document.getElementById("textInputRed").value;
            console.log(text);
            document.getElementById("textInputRed").value = text;
            if (document.getElementById("textInputRed").style.fontStyle === "italic") {
                document.getElementById("textInputRed").style.fontStyle = "initial";

            } else {
                document.getElementById("textInputRed").style.fontStyle = "italic";
            }
        });

        underline.addEventListener("click", function () {
            document.getElementById("underline").style.backgroundColor = "#dc143c";
            document.getElementById("underline").style.borderRadius = "5px";
            document.getElementById("italic").style.backgroundColor = "initial";
            document.getElementById("bold").style.backgroundColor = "initial";
            const text = document.getElementById("textInputRed").value;
            console.log(text);
            document.getElementById("textInputRed").value = text;
            if (document.getElementById("textInputRed").style.textDecoration === "underline") {
                document.getElementById("textInputRed").style.textDecoration = "initial";

            } else {
                document.getElementById("textInputRed").style.textDecoration = "underline";
            }
        });

        cancel.addEventListener("click", function () {
            noteArea.style.display = "none";
            ul.style.display = "grid";

        })



        //Appending the child to the container
        div.appendChild(date);
        div.appendChild(button);
        div.appendChild(deleteBtn);

        //Appending to the li
        li.appendChild(p);
        li.appendChild(div);

        ul.appendChild(li);

    });

    //purple

    dotPurple.addEventListener("click", function () {
        const li = document.createElement("li")
        li.className = `bg-purple w-full h-fit rounded-lg p-2`; //adding the class(li) properties
        const p = document.createElement("p");
        p.className = "antialiased font-Arimo text-lg pb-10"; //adding the class(p) properties
        p.textContent = //What the user types/note
            "Add a note";
        const div = document.createElement("div");
        div.className = "flex gap-5 justify-end";
        const date = document.createElement("div");
        date.className = "flex bg-orchid justify-center items-center p-2 rounded-lg text-white";
        date.textContent = new Date().toDateString(); //the date that the user typed the note.
        const button = document.createElement("button");
        button.className = "bg-black p-2 rounded-lg";


        button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" class="size-6">
          <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z"/>
         <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5.75 0 0 1-1.5 1.5H5.25a1.5.75 0 0 1-1.5-1.5V8.25a1.5.75 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z"/>
         </svg>
         `;
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "bg-orchid text-white p-2 rounded-lg";
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", () => { //adding event listener to the delete button
            li.remove();
            document.getElementById("textInputRed").style.display = "none"
        });

        button.addEventListener("click", function () {
            document.getElementById("noteArea").style.display = "initial";
            document.getElementById("textInputPurple").style.display = "initial";
            document.getElementById("textInputAmber").style.display = "none"
            document.getElementById("textInputRed").style.display = "none";
            document.getElementById("textInputGreen").style.display = "none";
            document.getElementById("textInputTeal").style.display = "none";
            li.style.display = "none";
            document.getElementById("addItem").style.display = "grid";
        })

        save.addEventListener("click", function () {
            const text = document.getElementById("textInputPurple").value;
            console.log(text);
            document.getElementById("textInputAmber").style.display = "none"
            document.getElementById("textInputPurple").style.display = "initial"
            document.getElementById("textInputRed").style.display = "none";

            document.getElementById("noteArea").style.display = "none";
            li.style.display = "initial";
            document.getElementById("addItem").style.display = "grid";
            p.textContent = //What the user types/note
                text;
        });

        bold.addEventListener("click", function () {
            document.getElementById("bold").style.backgroundColor = "#da70d6";
            document.getElementById("bold").style.borderRadius = "5px";
            document.getElementById("italic").style.backgroundColor = "initial";
            document.getElementById("underline").style.backgroundColor = "initial";
            const text = document.getElementById("textInputPurple").value;
            // document.getElementById("textInputPurple").style.fontWeight = "bold";
            document.getElementById("textInputPurple").value = text;
            if (document.getElementById("textInputPurple").style.fontWeight === "bold") {
                document.getElementById("textInputPurple").style.fontWeight = "initial";

            } else {
                document.getElementById("textInputPurple").style.fontWeight = "bold";
            }
        });

        italic.addEventListener("click", function () {
            document.getElementById("italic").style.backgroundColor = "#da70d6";
            document.getElementById("italic").style.borderRadius = "5px";
            document.getElementById("bold").style.backgroundColor = "initial";
            document.getElementById("underline").style.backgroundColor = "initial";
            const text = document.getElementById("textInputPurple").value;
            console.log(text);
            //document.getElementById("textInputPurple").style.fontStyle = "italic";
            document.getElementById("textInputPurple").value = text;
            if (document.getElementById("textInputPurple").style.fontStyle === "italic") {
                document.getElementById("textInputPurple").style.fontStyle = "initial";

            } else {
                document.getElementById("textInputPurple").style.fontStyle = "italic";
            }
        });

        underline.addEventListener("click", function () {
            document.getElementById("underline").style.backgroundColor = "#da70d6"
            document.getElementById("underline").style.borderRadius = "5px";
            document.getElementById("italic").style.backgroundColor = "initial";
            document.getElementById("bold").style.backgroundColor = "initial";
            const text = document.getElementById("textInputPurple").value;
            console.log(text);
            //document.getElementById("textInputPurple").style.textDecoration = "underline";
            document.getElementById("textInputPurple").value = text;
            if (document.getElementById("textInputPurple").style.textDecoration === "underline") {
                document.getElementById("textInputPurple").style.textDecoration = "initial";

            } else {
                document.getElementById("textInputPurple").style.textDecoration = "underline";
            }
        });

        cancel.addEventListener("click", function () {
            noteArea.style.display = "none";
            ul.style.display = "grid";

        })



        //Appending the child to the container
        div.appendChild(date);
        div.appendChild(button);
        div.appendChild(deleteBtn);

        //Appending to the li
        li.appendChild(p);
        li.appendChild(div);

        ul.appendChild(li);
    });



    //Amber

    dotAmber.addEventListener("click", function () {
        const li = document.createElement("li")
        li.className = `bg-valspar w-full h-fit rounded-lg p-2`; //adding the class(li) properties
        const p = document.createElement("p");
        p.className = "antialiased font-Arimo text-lg pb-10"; //adding the class(p) properties
        p.textContent = //What the user types/note
            "Add a note";
        const div = document.createElement("div");
        div.className = "flex gap-5 justify-end";
        const date = document.createElement("div");
        date.className = "flex bg-Amber justify-center items-center p-2 rounded-lg text-white";
        date.textContent = new Date().toDateString(); //the date that the user typed the note.
        const button = document.createElement("button");
        button.className = "bg-black p-2 rounded-lg";


        button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" class="size-6">
        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z"/>
       <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5.75 0 0 1-1.5 1.5H5.25a1.5.75 0 0 1-1.5-1.5V8.25a1.5.75 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z"/>
       </svg>
       `;
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "bg-Amber text-white p-2 rounded-lg";
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", () => { //adding event listener to the delete button
            li.remove();
            document.getElementById("textInputAmber").style.display = "none"
        });

        button.addEventListener("click", function () {
            document.getElementById("noteArea").style.display = "initial";
            document.getElementById("textInputAmber").style.display = "initial";
            document.getElementById("textInputRed").style.display = "none";
            document.getElementById("textInputPurple").style.display = "none";
            document.getElementById("textInputGreen").style.display = "none";
            document.getElementById("textInputTeal").style.display = "none";
            li.style.display = "none";
            document.getElementById("addItem").style.display = "grid";
        })

        bold.addEventListener("click", function () {
            document.getElementById("bold").style.backgroundColor = "#e07f71";
            document.getElementById("bold").style.borderRadius = "5px";
            document.getElementById("italic").style.backgroundColor = "initial";
            document.getElementById("underline").style.backgroundColor = "initial";
            const text = document.getElementById("textInputAmber").value;
            document.getElementById("textInputAmber").value = text;
            if (document.getElementById("textInputAmber").style.fontWeight === "bold") {
                document.getElementById("textInputAmber").style.fontWeight = "initial";

            } else {
                document.getElementById("textInputAmber").style.fontWeight = "bold";
            }
        });

        italic.addEventListener("click", function () {
            document.getElementById("italic").style.backgroundColor = "#e07f71";
            document.getElementById("italic").style.borderRadius = "5px";
            document.getElementById("bold").style.backgroundColor = "initial";
            document.getElementById("underline").style.backgroundColor = "initial";
            const text = document.getElementById("textInputAmber").value;
            console.log(text);
            //document.getElementById("textInputPurple").style.fontStyle = "italic";
            document.getElementById("textInputAmber").value = text;
            if (document.getElementById("textInputAmber").style.fontStyle === "italic") {
                document.getElementById("textInputAmber").style.fontStyle = "initial";

            } else {
                document.getElementById("textInputAmber").style.fontStyle = "italic";
            }
        });

        underline.addEventListener("click", function () {
            document.getElementById("underline").style.backgroundColor = "#e07f71";
            document.getElementById("underline").style.borderRadius = "5px";
            document.getElementById("italic").style.backgroundColor = "initial";
            document.getElementById("bold").style.backgroundColor = "initial";
            const text = document.getElementById("textInputAmber").value;
            console.log(text);
            //document.getElementById("textInputPurple").style.textDecoration = "underline";
            document.getElementById("textInputAmber").value = text;
            if (document.getElementById("textInputAmber").style.textDecoration === "underline") {
                document.getElementById("textInputAmber").style.textDecoration = "initial";

            } else {
                document.getElementById("textInputAmber").style.textDecoration = "underline";
            }
        });

        save.addEventListener("click", function () {
            const text1 = document.getElementById("textInputAmber").value;
            console.log(text1);
            document.getElementById("textInputRed").style.display = "none"
            document.getElementById("textInputAmber").style.display = "initial"
            document.getElementById("noteArea").style.display = "none";
            li.style.display = "initial";
            document.getElementById("addItem").style.display = "grid";
            p.textContent = //What the user types/note
                text1;

        });

        cancel.addEventListener("click", function () {
            noteArea.style.display = "none";
            ul.style.display = "grid";

        })



        //Appending the child to the container
        div.appendChild(date);
        div.appendChild(button);
        div.appendChild(deleteBtn);

        //Appending to the li
        li.appendChild(p);
        li.appendChild(div);

        ul.appendChild(li);

    });


    //Green

    dotGreen.addEventListener("click", function () {
        const li = document.createElement("li")
        li.className = `bg-green w-full h-fit rounded-lg p-2`; //adding the class(li) properties
        const p = document.createElement("p");
        p.className = "antialiased font-Arimo text-lg pb-10"; //adding the class(p) properties
        p.textContent = //What the user types/note
            "Add a note";
        const div = document.createElement("div");
        div.className = "flex gap-5 justify-end";
        const date = document.createElement("div");
        date.className = "flex bg-kellyGreen justify-center items-center p-2 rounded-lg text-white";
        date.textContent = new Date().toDateString();; //the date that the user typed the note.
        const button = document.createElement("button");
        button.className = "bg-black p-2 rounded-lg";


        button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" class="size-6">
        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z"/>
       <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5.75 0 0 1-1.5 1.5H5.25a1.5.75 0 0 1-1.5-1.5V8.25a1.5.75 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z"/>
       </svg>
       `;
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "bg-kellyGreen text-white p-2 rounded-lg";
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", () => { //adding event listener to the delete button
            li.remove();
            document.getElementById("textInputGreen").style.display = "none"




        });

        button.addEventListener("click", function () {
            document.getElementById("noteArea").style.display = "initial";
            document.getElementById("textInputGreen").style.display = "initial";
            document.getElementById("textInputRed").style.display = "none";
            document.getElementById("textInputPurple").style.display = "none";
            document.getElementById("textInputAmber").style.display = "none";
            document.getElementById("textInputTeal").style.display = "none";
            li.style.display = "none";
            document.getElementById("addItem").style.display = "grid";
        })

        save.addEventListener("click", function () {
            const text1 = document.getElementById("textInputGreen").value;
            console.log(text1);
            document.getElementById("textInputRed").style.display = "none"
            document.getElementById("textInputAmber").style.display = "initial"
            document.getElementById("noteArea").style.display = "none";
            li.style.display = "initial";
            document.getElementById("addItem").style.display = "grid";
            p.textContent = //What the user types/note
                text1;

        });
        bold.addEventListener("click", function () {
            document.getElementById("bold").style.backgroundColor = "#50c878";
            document.getElementById("bold").style.borderRadius = "5px";
            document.getElementById("italic").style.backgroundColor = "initial";
            document.getElementById("underline").style.backgroundColor = "initial";
            const text = document.getElementById("textInputGreen").value;
            // document.getElementById("textInputPurple").style.fontWeight = "bold";
            document.getElementById("textInputGreen").value = text;
            if (document.getElementById("textInputGreen").style.fontWeight === "bold") {
                document.getElementById("textInputGreen").style.fontWeight = "initial";

            } else {
                document.getElementById("textInputGreen").style.fontWeight = "bold";
            }
        });

        italic.addEventListener("click", function () {
            document.getElementById("italic").style.backgroundColor = "#50c878";
            document.getElementById("italic").style.borderRadius = "5px";
            document.getElementById("bold").style.backgroundColor = "initial";
            document.getElementById("underline").style.backgroundColor = "initial";
            const text = document.getElementById("textInputGreen").value;
            console.log(text);
            //document.getElementById("textInputPurple").style.fontStyle = "italic";
            document.getElementById("textInputGreen").value = text;
            if (document.getElementById("textInputGreen").style.fontStyle === "italic") {
                document.getElementById("textInputGreen").style.fontStyle = "initial";

            } else {
                document.getElementById("textInputGreen").style.fontStyle = "italic";
            }
        });

        underline.addEventListener("click", function () {
            document.getElementById("underline").style.backgroundColor = "#50c878";
            document.getElementById("underline").style.borderRadius = "5px";
            document.getElementById("italic").style.backgroundColor = "initial";
            document.getElementById("bold").style.backgroundColor = "initial";
            const text = document.getElementById("textInputGreen").value;
            console.log(text);
            //document.getElementById("textInputPurple").style.textDecoration = "underline";
            document.getElementById("textInputGreen").value = text;
            if (document.getElementById("textInputGreen").style.textDecoration === "underline") {
                document.getElementById("textInputGreen").style.textDecoration = "initial";

            } else {
                document.getElementById("textInputGreen").style.textDecoration = "underline";
            }
        });

        cancel.addEventListener("click", function () {
            noteArea.style.display = "none";
            ul.style.display = "grid";

        })



        //Appending the child to the container
        div.appendChild(date);
        div.appendChild(button);
        div.appendChild(deleteBtn);

        //Appending to the li
        li.appendChild(p);
        li.appendChild(div);

        ul.appendChild(li);

    });


    //Turqouise
    dotTurquoise.addEventListener("click", function () {
        const li = document.createElement("li")
        li.className = `bg-cyan w-full h-fit rounded-lg p-2`; //adding the class(li) properties
        const p = document.createElement("p");
        p.className = "antialiased font-Arimo text-lg pb-10"; //adding the class(p) properties
        p.textContent = //What the user types/note
            "Add a note";
        const div = document.createElement("div");
        div.className = "flex gap-5 justify-end";
        const date = document.createElement("div");
        date.className = "flex bg-teal justify-center items-center p-2 rounded-lg text-white";
        date.textContent = new Date().toDateString();; //the date that the user typed the note.
        const button = document.createElement("button");
        button.className = "bg-black p-2 rounded-lg";


        button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" class="size-6">
        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z"/>
       <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5.75 0 0 1-1.5 1.5H5.25a1.5.75 0 0 1-1.5-1.5V8.25a1.5.75 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z"/>
       </svg>
       `;
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "bg-teal text-white p-2 rounded-lg";
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", () => { //adding event listener to the delete button
            li.remove();
            document.getElementById("textInputTeal").style.display = "none"




        });

        button.addEventListener("click", function () {
            document.getElementById("noteArea").style.display = "initial";
            document.getElementById("textInputTeal").style.display = "initial";
            document.getElementById("textInputRed").style.display = "none";
            document.getElementById("textInputPurple").style.display = "none";
            document.getElementById("textInputAmber").style.display = "none";
            document.getElementById("textInputGreen").style.display = "none";
            li.style.display = "none";
            document.getElementById("addItem").style.display = "grid";
        })

        save.addEventListener("click", function () {
            const text1 = document.getElementById("textInputTeal").value;
            console.log(text1);
            document.getElementById("textInputRed").style.display = "none"
            document.getElementById("textInputAmber").style.display = "initial"
            document.getElementById("noteArea").style.display = "none";
            li.style.display = "initial";
            document.getElementById("addItem").style.display = "grid";
            p.textContent = //What the user types/note
                text1;

        });

        bold.addEventListener("click", function () {
            document.getElementById("bold").style.backgroundColor = "#008080";
            document.getElementById("bold").style.borderRadius = "5px";
            document.getElementById("italic").style.backgroundColor = "initial";
            document.getElementById("underline").style.backgroundColor = "initial";
            const text = document.getElementById("textInputTeal").value;
            document.getElementById("textInputTeal").value = text;
            if (document.getElementById("textInputTeal").style.fontWeight === "bold") {
                document.getElementById("textInputTeal").style.fontWeight = "initial";

            } else {
                document.getElementById("textInputTeal").style.fontWeight = "bold";
            }
        });

        italic.addEventListener("click", function () {
            document.getElementById("italic").style.backgroundColor = "#008080";
            document.getElementById("italic").style.borderRadius = "5px";
            document.getElementById("bold").style.backgroundColor = "initial";
            document.getElementById("underline").style.backgroundColor = "initial";
            const text = document.getElementById("textInputTeal").value;
            console.log(text);
            document.getElementById("textInputTeal").value = text;
            if (document.getElementById("textInputTeal").style.fontStyle === "italic") {
                document.getElementById("textInputTeal").style.fontStyle = "initial";

            } else {
                document.getElementById("textInputTeal").style.fontStyle = "italic";
            }
        });

        underline.addEventListener("click", function () {
            document.getElementById("underline").style.backgroundColor = "#008080";
            document.getElementById("underline").style.borderRadius = "5px";
            document.getElementById("italic").style.backgroundColor = "initial";
            document.getElementById("bold").style.backgroundColor = "initial";
            const text = document.getElementById("textInputTeal").value;
            console.log(text);
            //document.getElementById("textInputPurple").style.textDecoration = "underline";
            document.getElementById("textInputTeal").value = text;
            if (document.getElementById("textInputTeal").style.textDecoration === "underline") {
                document.getElementById("textInputTeal").style.textDecoration = "initial";

            } else {
                document.getElementById("textInputTeal").style.textDecoration = "underline";
            }
        });

        cancel.addEventListener("click", function () {
            noteArea.style.display = "none";
            ul.style.display = "grid";

        })


        //Appending the child to the container
        div.appendChild(date);
        div.appendChild(button);
        div.appendChild(deleteBtn);

        //Appending to the li
        li.appendChild(p);
        li.appendChild(div);

        ul.appendChild(li);

    });
}

addItem();

