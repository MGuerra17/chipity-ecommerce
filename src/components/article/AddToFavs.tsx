import { useArticleContext } from "@/contexts/articlesContext";
import { article } from "@/types/articles";

export interface IAddToFavsButtonProps {
  active: boolean,
  data: article
}

export default function AddToFavsButton({active, data}: IAddToFavsButtonProps):JSX.Element {
  const {addToFavs, removeFromFavs} = useArticleContext()

  const handleAddToFavs = ():void => {
    addToFavs(data)
  }

  const handleRemoveFromFavs = ():void => {
    removeFromFavs(data)
  }

  return (
    <button
      className="bg-white h-8 w-8 rounded-full absolute top-0 right-0 m-1 grid place-items-center z-10"
      onClick={active ? handleRemoveFromFavs : handleAddToFavs}
      >
      <svg
        className={`w-6 h-6 ${active ? 'fill-primary': 'fill-white'} transition-all hover:scale-110 md:hover:fill-primary/60`}
        viewBox="0 0 256 256"
        id="Flat"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <g opacity="0.8">
          <path d="M133.65683,211.88227l81.0323-81.0322c19.9104-19.91038,22.84784-52.666,4.00583-73.59029a52.0026,52.0026,0,0,0-75.46451-2.02934L127.99994,70.46082,114.85007,57.3109C94.93972,37.40047,62.18409,34.463,41.25979,53.305a52.00261,52.00261,0,0,0-2.02934,75.46452l83.11268,83.11272A8,8,0,0,0,133.65683,211.88227Z" />
        </g>
        <path
          fill="currentColor"
          d="M128,222.21729a15.94945,15.94945,0,0,1-11.31348-4.67762L33.57324,134.42639a60.00294,60.00294,0,0,1,2.333-87.06628,58.042,58.042,0,0,1,43.0498-14.56726,64.723,64.723,0,0,1,41.55079,18.8612L128,59.14722l9.57324-9.57361a60.00377,60.00377,0,0,1,87.06739,2.33288A58.02947,58.02947,0,0,1,239.207,94.9563,64.72048,64.72048,0,0,1,220.34668,136.507l-81.03223,81.03222-.001.00074A15.95446,15.95446,0,0,1,128,222.21729ZM74.98828,48.72351A42.10428,42.10428,0,0,0,46.61328,59.25a44.0006,44.0006,0,0,0-1.72558,63.86255l88.76953,88.76977L128,206.22546l81.03223-81.03222c17.42871-17.42859,19.09668-45.50208,3.71777-62.5802a44.00227,44.00227,0,0,0-63.8623-1.72571L133.65723,76.11768a8.001,8.001,0,0,1-11.31446.00012L109.19238,62.9679A48.59669,48.59669,0,0,0,74.98828,48.72351Z"
        />
      </svg>
    </button>
  );
}
