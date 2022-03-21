import { useEffect, useRef, useState } from "react";

import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
// db value exported from confing - Values from Firebase
import { db } from "../firebase-config.js";

export const useCollection = (collectionName, _query, _orderBy) => {
  //useRef used to stop infinite loop on useEffect
  //reference values are being realocated on each rerender and treated as diffrent - values {}==={} gives false
  //useCallback - same thing but for functions only

  const queryValue = useRef(_query).current;
  const orderByValue = useRef(_orderBy).current;

  // querry and order limitations
  //as of right now _orderBy can be only single string of exisiting field
  //If you include a filter with a range comparison (<, <=, >, >=),
  // your first ordering must be on the same field:

  //creating state to be returned
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    //building up a reference to Firebase Colletion (will be used if no query or orderBy)
    let ref = collection(db, collectionName);
    if (queryValue) {
      ref = query(ref, where(...queryValue));
    }

    // condition statemnt to change reference to querry if query values have been passed as arguments

    // if (queryValue) {
    //   console.log(queryValue);
    //   ref = query(ref, where(...queryValue));
    //   // ref = query(
    //   //   ref,
    //   //   // query here has 3 value f.e. "uid" ,"==", "CurrentUserIdString"
    //   //   // queryValue ? where("uid", "==", "2ZC8mAp6ltTiUnYk2nOPoS9cGwG3") : null,
    //   //   orderByValue ? orderBy(orderByValue) : null,
    //   //   limit(5)
    //   // );
    // }

    console.log(ref);
    //subscribe to live change made to the documets from reference or query (depending on ref value here)
    // onSntapshot returns clean up function which will unsubscribe from listening to the changes

    const unsubscribe = onSnapshot(
      ref,
      (Snapshot) => {
        const data = [];
        Snapshot.docs.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        setDocuments(data);
        setError(null);
      },
      (error) => {
        // second argument is a callback with error
        setError(error);
      }
    );

    // We are returning cleanup function, will be invoked if this hook is unmounted
    return () => unsubscribe();
  }, [collectionName, orderByValue, queryValue]);
  console.log(documents);

  //the whole hook returns:
  return { documents, error };
};
