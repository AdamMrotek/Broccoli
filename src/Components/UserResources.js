import { useEffect } from "react";
import useAuthContext from "../Hooks/useAuthContext.js";
import { useCollection } from "../Hooks/useCollection.js";

export default function UserResources() {
  const context = useAuthContext();
  const { documents, error } = useCollection("usersLists", [
    "userId",
    "==",
    `${context.user?.uid}`,
  ]);

  useEffect(() => {
    console.log(documents);
  }, [documents]);

  return (
    <>
      {documents &&
        documents.map((doc) => {
          return (
            <div className="user-resources">
              <h3>{doc.id}</h3>
              <div>{doc.recipes.length}</div>
            </div>
          );
        })}
      <div>User Resources</div>;
    </>
  );
}
