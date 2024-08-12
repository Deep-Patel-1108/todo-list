import { BLACK_100_1 } from '../../tw-config/colors'
import { FC, SVGComponents } from '../../types/common.types'

const Delete: FC<SVGComponents> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 38 24"
      width={props?.width ?? '24'}
      height={props?.height ?? '24'}
      className="hover:fill-red-700 cursor-pointer"
      fill={props?.fill ?? BLACK_100_1}
    >
      <path
        d="M5.02666 26.6417C4.25888 26.6417 3.61832 26.385 3.10499 25.8717C2.59166 25.3583 2.33443 24.7172 2.33332 23.9483V3.30834H0.666656V1.64167H7.33332V0.358337H17.3333V1.64167H24V3.30834H22.3333V23.95C22.3333 24.7167 22.0767 25.3572 21.5633 25.8717C21.05 26.3861 20.4089 26.6428 19.64 26.6417H5.02666ZM8.67999 21.6417H10.3467V6.64167H8.67999V21.6417ZM14.32 21.6417H15.9867V6.64167H14.32V21.6417Z"
        className="hover:fill-red-700 cursor-pointer"
        fill={props?.fill ?? BLACK_100_1}
      />
    </svg>
  )
}

export default Delete
