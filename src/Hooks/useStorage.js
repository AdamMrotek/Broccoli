import { useState, useEffect } from "react";
import { storage, db } from "../firebase-config.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  // firestore triggers uploaded callback twice, need to be stopped
  let getDownloadURLNumberOfCalls = 0;
  useEffect(() => {
    //references
    const storageRef = ref(storage, file);
    const uploadTask = uploadBytesResumable(storageRef, file);
    const collectionRef = collection(db, "images");
    if (file === null) return;
    uploadTask.on(
      "state_change",
      (snap) => {
        let procentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(procentage);
      },
      (err) => {
        setError(err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          getDownloadURLNumberOfCalls++;
          if (getDownloadURLNumberOfCalls > 1) return;
          setUrl(downloadURL);
          addDoc(collectionRef, {
            url: downloadURL,
            createdAt: serverTimestamp(),
          });
        });
      }
    );
  }, [file]);
  return { progress, url, error };
};
export default useStorage;
