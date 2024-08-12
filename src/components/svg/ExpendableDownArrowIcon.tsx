import { PHTHALO_GREEN_100_1 } from "../../tw-config/colors";
import { FC, SVGComponents } from "../../types/common.types";

const ExpendableDownArrowIcon:FC<SVGComponents> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9.86274 9C8.65111 9 8.04529 9 7.76477 9.23959C7.52136 9.44749 7.39218 9.75934 7.4173 10.0785C7.44624 10.4462 7.87462 10.8746 8.73137 11.7314L10.8686 13.8686C11.2646 14.2646 11.4627 14.4627 11.691 14.5368C11.8918 14.6021 12.1082 14.6021 12.309 14.5368C12.5373 14.4627 12.7354 14.2646 13.1314 13.8686L15.2686 11.7314C16.1254 10.8746 16.5538 10.4462 16.5827 10.0785C16.6078 9.75934 16.4786 9.44749 16.2352 9.23959C15.9547 9 15.3489 9 14.1373 9H9.86274Z"
        fill={props?.fill ?? PHTHALO_GREEN_100_1}
        fillOpacity="0.62"
      />
    </svg>
  );
};

export default ExpendableDownArrowIcon;
