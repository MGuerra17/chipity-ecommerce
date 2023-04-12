import { useArticleContext } from "@/contexts/articlesContext";
import { article } from "@/types/articles";
import { formatterCOP } from "@/utils/cop-formatter";
import Image from "next/image";

export interface itemModalProps {
  article: article;
}

export default function ItemModal({ article }: itemModalProps): JSX.Element {
  const {addToCart} = useArticleContext()
  return (
    <div
      id="articleModal"
      className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full justify-center items-center"
    >
      <div className="relative w-full max-w-3xl max-h-full">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-5 border-b rounded-t">
            <h3 className="text-xl font-medium text-gray-900">
              Informacion del producto
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-hide="articleModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Cerrar modal</span>
            </button>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between items-center px-6 pt-6">
            <div className="h-32  aspect-square rounded-md bg-slate-100 relative shadow-lg">
              {article && (
                <Image src={article.imagen} alt={article.descripcion} fill sizes="" />
              )}
            </div>
            <div className="pt-6 pl-6 space-y-6 max-w-lg">
              <p className="text-base leading-relaxed text-gray-500">
                {article?.titulo}
              </p>
              <p className="text-base leading-relaxed text-gray-500 pb-5">
                {article?.descripcion}
              </p>
              {article?.descuento ? (
              <>
                <span className="font-bold">{formatterCOP.format(((100 - article.descuento) / 100) * article.precio)}</span>
              </>
            ) : <span className="font-bold">{formatterCOP.format(article?.precio)}</span> }
            </div>
            <div className="w-56 rounded-md text-xs py-6 md:pt-0">
                <>
                  <p className="text-xs mb-2 -mx-4 font-bold">Recomendaciones:</p>
                  <ul>
                    {!article?.recomendaciones ? (
                      <li className="mb-1">No hay recomendaciones para este articulo.</li>
                    ) : (
                      article.recomendaciones.split(',').map(recomendation => <li key={recomendation} className="mb-1">👉 {recomendation}</li>
                    ))
                  }
                  </ul>
                </>
            </div>

          </div>
          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b ">
            <button
              data-modal-hide="articleModal"
              type="button"
              className="text-white bg-primary hover:bg-primary/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={() => addToCart(article)}
            >
              Agregar
            </button>
            <button
              data-modal-hide="articleModal"
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
