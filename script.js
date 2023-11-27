window.addEventListener('DOMContentLoaded',()=>{
    const title=document.querySelector('#title'),
        author=document.querySelector("#author"),
        year=document.querySelector("#year"),
        btn=document.querySelector(".btn"),
        bookList=document.querySelector('#book-list')
    btn.addEventListener('click',(event)=>{
        event.preventDefault()
        if(title.value=='' && author.value=='' && year==''){
            alert("shiriksenbe?,toltirmaysanba inputlardi irik")
        }else{
            const newRow=document.createElement('tr')
            const newTitle=document.createElement('th')
            newTitle.innerHTML=author.value
            newRow.appendChild(newTitle)
            // basqa zat
            const newAuthor=document.createElement('th')
            newAuthor.innerHTML=title.value
            newRow.appendChild(newAuthor)
            //create year
            const newYear=document.createElement('th')
            newYear.innerHTML=year.value
            newRow.appendChild(newYear)
            //body UI
            bookList.appendChild(newRow)
            //,adskj
            title.value=''
            author.value=''
            year.value=''
        }
    })
})