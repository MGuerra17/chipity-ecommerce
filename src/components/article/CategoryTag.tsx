interface CategoryTagProps {
  title: string
}

interface ColorsOptions {
  [category:string]: string
}

const CATEGORIES_COLORS:ColorsOptions = {
  nuevo: 'text-blue-800 bg-blue-300/40',
  descuento: 'text-emerald-600 bg-emerald-300/40',
  combo: 'text-yellow-800 bg-yellow-300/40'
}

export default function CategoryTag ({title}: CategoryTagProps):JSX.Element {
  const color = CATEGORIES_COLORS[title] || 'text-emerald-600' 
  return (
    <div className={`${color} px-2 rounded-full text-xs`}>
      {title.charAt(0).toUpperCase() + title.slice(1)}
    </div>
  );
}
