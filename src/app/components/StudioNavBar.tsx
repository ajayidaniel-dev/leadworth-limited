import Link from "next/link";
import { BsArrowReturnLeft } from "react-icons/bs";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <BsArrowReturnLeft />
        <Link href="/" className="text-primary flex items-center gap-2">
          Go To Website
        </Link>
      </div>

      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
