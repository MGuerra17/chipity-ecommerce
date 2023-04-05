import Image from "next/image";

export default function ContactInfo(): JSX.Element {
  return (
    <div className="bg-neutral-100 w-full flex h-12 justify-between">
      <div className="flex px-5 gap-x-2">
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
      <div className="flex px-5 gap-x-4">
        <div className="text-xs flex items-center gap-x-1">
          <Image
            src="https://icongr.am/fontawesome/mobile-phone.svg?size=30&color=currentColor"
            alt="mobile phone icon"
            width={20}
            height={48}
          />
          (+57) 302 427 6663
        </div>
        <div className="text-xs items-center gap-x-3 hidden md:flex">
          <Image
            src="https://icongr.am/fontawesome/envelope.svg?size=30&color=currentColor"
            alt="envelope icon"
            width={13}
            height={48}
          />
          contacto@chipity.com
        </div>
        <div className="text-xs items-center gap-x-2 hidden md:flex">
          <Image
            src="https://icongr.am/fontawesome/map-marker.svg?size=30&color=currentColor"
            alt="location icon"
            width={15}
            height={48}
          />
          Barranquilla, Colombia
        </div>
      </div>
    </div>
  );
}
