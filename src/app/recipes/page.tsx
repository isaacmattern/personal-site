// app/page.tsx
import { compareDesc } from "date-fns";
import { allRecipes } from "contentlayer/generated";
import PostCard from "@/components/PostCard/PostCard";

export default function RecipesIndex() {
  const recipes = allRecipes.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="paper-effect">
      {recipes.map((recipe, idx) => (
        <div className="paper-effect">
          <PostCard key={idx} {...recipe} />
        </div>
      ))}
    </div>
  );
}
