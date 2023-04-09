import Image from "next/image";

export default function ContactInfo(): JSX.Element {
  return (
    <div className="bg-neutral-100 w-full ">
      <div className="w-full flex h-12 justify-between max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="flex gap-x-2">
          <Image
            src="https://icongr.am/fontawesome/facebook.svg?size=30&color=currentColor"
            alt="facebook icon"
            width={20}
            height={48}
          />
          <Image
            src="https://icongr.am/fontawesome/instagram.svg?size=30&color=currentColor"
            alt="instagram icon"
            width={20}
            height={48}
          />
        </div>
        <div className="flex gap-x-4">
          <div className="text-xs flex items-center">
            <Image
              src="https://icongr.am/fontawesome/mobile-phone.svg?size=30&color=currentColor"
              alt="mobile phone icon"
              width={20}
              height={48}
            />
            <p>(+57) 302 427 6663</p>
            
          </div>
          <div className="text-xs items-center gap-x-1 hidden md:flex">
            <Image
              src="https://icongr.am/fontawesome/envelope.svg?size=30&color=currentColor"
              alt="envelope icon"
              width={13}
              height={48}
            />
            <p>contacto@chipity.com</p>
          </div>
          <div className="text-xs items-center hidden md:flex">
            <Image
              src="https://icongr.am/fontawesome/map-marker.svg?size=30&color=currentColor"
              alt="location icon"
              width={15}
              height={48}
            />
            <p>Barranquilla, Colombia</p>
          </div>
        </div>
      </div>
    </div>
  );
}
