
/** 
 * Wraps the document.querySelector method.
 */

const query = (selector) => document.querySelector(selector);


/** 
 * Populate html with data's elements.
 */

const render = (container, items) => {
    const elements = items.map( (element, index) => {
        return `<li>
        <h3>${element.name}</h3>
        <p><strong>Phone: </strong><a href="tel:${element.phone}">${element.phone}</a></p>
        <p><strong>Email: </strong><a href="mailto:${element.email}">${element.email}</a></p>        
        </li>`
    })

    const content = elements.join(' ')

    container.innerHTML = content;
}




/** 
 * - Add listener;
 * - Arrow function to delete last child of data.
 */

document.addEventListener('DOMContentLoaded', () => {
    const form = query("form");
    const input = query("form input");
    const list = query("ul");
    const inputName = query("#name");
    const inputEmail = query("#email");
    const inputPhone = query("#phone");
    const btnInsert = query(".btn-insert");

    render(list, data);

    input.addEventListener( "keyup", (event) => {
        event.preventDefault();
        const value = input.value.toLowerCase();

        const result = data.filter( (element) => 
            element.name.toLowerCase().search(value) > -1 ||
            element.email.toLowerCase().search(value) > -1
        )

        render(list, result);
    });   

    // const inputNameCapitalize = (value) => {
    //     const inputLower = inputName.value.split(" ");
    //     for (let index = 0; index < inputLower.length; index++) {
    //         inputLower[index] = inputLower[index].charAt(0).toUpperCase() + inputLower[index].slice(1);
    //     }

        
    // }
    // function capitalizeFirstLetter(string) {

    //     return string.charAt(0).toUpperCase() + string.slice(1);
    //   }
      
    // console.log(capitalizeFirstLetter(inputName.value));



    btnInsert.addEventListener( "click", (event) => {
        event.preventDefault();

        const newData = {};

        newData.name = inputName.value;
        newData.phone = inputPhone.value;
        newData.email = inputEmail.value;

        data.push(newData);

        render(list, data);

    });
      

})