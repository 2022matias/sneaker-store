export const getInfo = () => {
    return fetch('https://shoes-collections.p.rapidapi.com/shoes', {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3890c549c3msh42cafdceb464867p1fcaf6jsnbfcdc4bd3784',
            'X-RapidAPI-Host': 'shoes-collections.p.rapidapi.com'
        }
    })
        .then(res => res.json())
        .then(data => {
            return data;
        })
        .catch(err => console.error(err));
}