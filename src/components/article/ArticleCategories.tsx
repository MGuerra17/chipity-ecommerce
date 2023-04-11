import CategoryTag from "./CategoryTag";

export interface CategoriesListProps {
  id: number;
  categories: string[];
}

export default function ArticleCategories ({id,categories}: CategoriesListProps):JSX.Element {
  return (
    <div className="flex gap-x-1 h-5">
      {
        categories.map(category => category && <CategoryTag key={category+id} title={category} />  )
      }
    </div>
  );
}
