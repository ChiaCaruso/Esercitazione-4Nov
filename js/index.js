
/** 
 * Wraps the document.querySelector method
 */

const query = (selector) => document.querySelector(selector);

const render = (container, items) => {
    const elements = items.map( (element, index) => {
        // return `${element.name}, ${element.phone}, ${element.email}`;
        return `<li>
        <h3>${element.name}</h3>
        <p><strong>Phone: </strong><a href="tel:${element.phone}">${element.phone}</a></p>
        <p><strong>Email: </strong><a href="mailto:${element.email}">${element.email}</a></p>        
        </li>`
    })

    const content = elements.join(' ')

    container.innerHTML = content;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = query("form");
    const input = query("form input");
    const list = query("ul");

    render(list, data);

    // Versione originale form
    // form.addEventListener( "submit", (event) => {
    //     event.preventDefault();
    //     const value = input.value.toLowerCase();

    //     const result = data.filter( (element) => {
    //         return element.name.toLowerCase().search(value) > -1;
    //     })

    //     render(list, result);
    // });

    input.addEventListener( "keyup", (event) => {
        event.preventDefault();
        const value = input.value.toLowerCase();

        const result = data.filter( (element) => 
            element.name.toLowerCase().search(value) > -1 ||
            element.email.toLowerCase().search(value) > -1
        )

        render(list, result);
    });


    

});