export const getInfo = () => {
    return fetch("https://fakestoreapi.com/products", {
        method: "GET"
    })
        .then(res => res.json())
        .then(data => {
            return data;
        })
        .catch(err => console.error(err));
}