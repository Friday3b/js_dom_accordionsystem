const container = document.getElementById("container")





const data = [

    {

        title : "What is flowbite",
        p : "lorem"

    },
    {

        title : "somecode",
        p : "something"

    },

    {

        title : "anycode1 ",
        p : "anything"

    }



]

data.map(extract => {





    const div1  = document.createElement("div")
    const div2  = document.createElement("div")

    const p = document.createElement("p")
    const h3 = document.createElement("h3")


    p.innerText = extract.p
    h3.innerText = extract.title


    p.classList.add("accordionContent")
    h3.classList.add("cardItem")

    div2.appendChild(h3)
    div2.appendChild(p)
    div1.appendChild(div2)


    container.appendChild(div1)




    h3.addEventListener("click" , ()=>{

        if(p.style.display==='none' || p.style.display ===''){
            p.style.display ='block'
        }
        else{
            p.style.display = 'none'
        }
    })



})

