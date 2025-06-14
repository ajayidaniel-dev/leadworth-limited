import Image from "next/image";
import { logo } from "../asset/images";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Logo = (props: any) => {
  const { renderDefault } = props;
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        alt="logo image"
        src={logo}
        width={50}
        height={50}
      />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
};

export default Logo;
