import image from "@/assets/logo.svg";
import Image from "next/image";
export default (props: { className?: string }) => {
  return (
    <Image
      className={props.className + " max-w-lg"}
      src={image}
      width={50}
      alt="o"
    />
  );
};
