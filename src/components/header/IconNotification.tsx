import Image from "next/image";

interface NotificationProps {
  title: string,
  icon: string,
  notificationsAmount: number,
  clickHandler(): void
}

export default function IconNotification({title,icon,notificationsAmount,clickHandler}:NotificationProps): JSX.Element {
  return (
    <button className="relative" onClick={clickHandler}>
      <Image
        src={icon}
        alt={`${title} icon`}
        width={20}
        height={20}
        title={title}
      />
      { notificationsAmount > 0 &&
        <span className="aspect-square bg-primary text-white text-xs absolute -top-3 -right-2 rounded-full w-4 text-center">
          {notificationsAmount}
        </span>
      }
    </button>
  );
}
