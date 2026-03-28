let container = document.querySelector('.container')


fetch("https://jsonplaceholder.typicode.com/users")
.then(str=>str.json())
.then(str=>str.slice(0,19).forEach(element => {
    let {name, id,email,address} = element
    container.innerHTML += `<div class="card">
            <div class="imgBox">
                <img src="https://picsum.photos/300/200?1">
            </div>
            <div class="content">
                <h2>${element.company.name}</h2>
                <p>zipcode: ${address.geo.lat}</p>
                <button>${id}</button>
            </div>
        </div>` 
}))