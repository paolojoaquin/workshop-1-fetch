/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseAPI = "https://platzi-avo.vercel.app";
// const API = "https://platzi-avo.vercel.app/api/avo";
//web api
const appNode = document.querySelector('#app');
//Intl
    // 1.- format fechas
    // 2.- format monedas
    const formatPrice = (price) => {
        const newPrice = new window.Intl.NumberFormat('en-EN', {
            style: 'currency',
            currency: 'USD',
        }).format(price);
        return newPrice;
    };
/* conectarnos al servidor */
async function fetchData() {
    try {
        let regs = [];
        const response = await fetch(`${baseAPI}/api/avo`)
        const {data} = await response.json();
        data.forEach((item) => {
            /* Para Imagen */
            const image = document.createElement('img');
            image.src = `${baseAPI}${item.image}`; //URL de la imagen
            /* Para titulo */
            const title = document.createElement('h2');
            title.textContent = item.name;
            // title.className = 'text-xl text-red-600'
            /* Para precio */
            const price = document.createElement('p');
            price.textContent = formatPrice(item.price);

            const container = document.createElement('div');
            container.append(image, title, price);
            regs.push(container);
            container.classList.add('main__item');
        });
        appNode.append(...regs);
    } catch (error) {
        console.log(error.message);
    }
}

fetchData();
/* procesar la respuesta(response), y convertir en JSON */
/* JSON => Data => Renderizar info browser */

