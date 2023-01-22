// import React from "react";
// import useStorage from "../Hooks/useStorage.js";
// import { useState, useEffect } from "react";
// import ImageDownloader from "./ImageDownloader.js";

// const ImageDownloaderStarter = ({ url }) => {
//   const [file, setFile] = useState(null);
//   const handleDownload = () => {
//     console.log(url);
//     fetch(`https://cors-fix.web.app/v1?url=${url}`)
//       .then((response) => response.json())
//       .then((blob) => {
//         // Upload the image data to the path 'images/image.jpg'
//         console.log(blob);
//         // const imageObjectURL = URL.createObjectURL(blob);
//         // console.log(imageObjectURL);
//         // setFile(imageObjectURL);
//         // Get the download URL of the image file
//       });
//   };
//   useEffect(() => {
//     console.log(file);
//   }, [file]);

//   return (
//     <div>
//       <button onClick={handleDownload}>download Image</button>
//       {file && <ImageDownloader file={file} />}
//     </div>
//   );
// };
// export default ImageDownloaderStarter;
