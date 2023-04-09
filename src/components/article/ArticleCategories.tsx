import CategoryTag from "./CategoryTag";

export interface CategoriesListProps {
  categories: string[]
}

export default function ArticleCategories ({categories}: CategoriesListProps):JSX.Element {
  return (
    <div className="flex gap-x-1 h-5">
      {
        categories.map(category => category && <CategoryTag key={category} title={category} />  )
      }
    </div>
  );
}
