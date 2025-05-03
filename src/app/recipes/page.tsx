// app/page.tsx
import { compareDesc } from "date-fns";
import { allRecipes } from "contentlayer/generated";
import Link from "next/link";

export default function RecipesIndex() {
  const recipes = allRecipes.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="paper-effect recipe-list">
      <h1>All Recipes</h1>
      {recipes.map((recipe, idx) => (
        <div key={idx} className="recipe-link">
          <Link className="" href={recipe.url}>
            {recipe.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
