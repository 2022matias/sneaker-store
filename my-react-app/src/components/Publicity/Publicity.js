// import './publicity.scss';
// import { useState, useEffect } from 'react';
// import { getInfo } from '../../utils/api';

// function Publicity() {
//     const [imagenes, setImagenes] = useState([]);
//     const [selectedImage, setSelectedImage] = useState(null);
//     const [selectedIndex, setSelectedIndex] = useState(0);

//     useEffect(() => {
//         getInfo()
//             .then(data => {
//                 setImagenes(data);
//             })
//             .catch(error => console.error(error));
//     }, []);

//     useEffect(() => {
//         if (imagenes.length !== 0) {
//             setSelectedImage(imagenes[selectedIndex].image)
//         }
//     }, [imagenes, selectedIndex]);

//     function previous() {
//         if (selectedIndex === 0) {
//             setSelectedIndex(imagenes.length - 1);
//             setSelectedImage(imagenes[selectedIndex].image);
//         } else {
//             setSelectedIndex(selectedIndex - 1);
//             setSelectedImage(imagenes[selectedIndex].image);
//         }
//     }

//     function next() {
//         if (selectedIndex === imagenes.length - 1) {
//             setSelectedIndex(0);
//             setSelectedImage(imagenes[selectedIndex].image);
//         } else {
//             setSelectedIndex(selectedIndex + 1);
//             setSelectedImage(selectedImage[selectedIndex].image);
//         }
//     }

//     return (
//         <div className="publicity">
//             <h3>Publicity</h3>
//             <img src={selectedImage} alt="publicity" />
//             <button onClick={previous}>{"<"}</button>
//             <button onClick={next}>{">"}</button>
//         </div>
//     )
// }

// export default Publicity;