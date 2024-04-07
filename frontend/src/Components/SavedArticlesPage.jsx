import React from "react";
import SavedArticles from "./Article/SavedArticles";

function SavedArticlesPage() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-1 gap-y-6 place-items-center p-4 ">
      {[0, 1, 2, 3].map((item, index) => {
        return <SavedArticles key={index} />;
      })}
    </div>
  );
}

export default SavedArticlesPage;
