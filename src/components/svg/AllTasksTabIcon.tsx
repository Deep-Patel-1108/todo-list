import { DARK_JUNGLE_GREEN_100_1 } from "../../tw-config/colors";
import { FC, SVGComponents } from "../../types/common.types";

const AllTasksTabIcon: FC<SVGComponents> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width ?? "24"}
      height={props?.height ?? "25"}
      viewBox="0 0 24 25"
      fill="none"
    >
      <g clipPath="url(#clip0_5_2218)">
        <path
          d="M7.99809 16.9334H11.9981M7.99809 11.9334H15.9981M7.50009 4.43341C5.94409 4.48041 5.01709 4.65341 4.37509 5.29541C3.49609 6.17541 3.49609 7.59041 3.49609 10.4214V16.9274C3.49609 19.7594 3.49609 21.1744 4.37509 22.0544C5.25309 22.9334 6.66809 22.9334 9.49609 22.9334H14.4961C17.3251 22.9334 18.7391 22.9334 19.6171 22.0534C20.4971 21.1744 20.4971 19.7594 20.4971 16.9274V10.4214C20.4971 7.59141 20.4971 6.17541 19.6171 5.29541C18.9761 4.65341 18.0481 4.48041 16.4921 4.43341"
          stroke={props?.fill ?? DARK_JUNGLE_GREEN_100_1}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.49609 4.68341C7.49609 3.71741 8.28009 2.93341 9.24609 2.93341H14.7461C15.2102 2.93341 15.6553 3.11779 15.9835 3.44597C16.3117 3.77416 16.4961 4.21928 16.4961 4.68341C16.4961 5.14754 16.3117 5.59266 15.9835 5.92085C15.6553 6.24904 15.2102 6.43341 14.7461 6.43341H9.24609C8.78197 6.43341 8.33685 6.24904 8.00866 5.92085C7.68047 5.59266 7.49609 5.14754 7.49609 4.68341Z"
          stroke={props?.fill ?? DARK_JUNGLE_GREEN_100_1}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5_2218">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.933411)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AllTasksTabIcon;
