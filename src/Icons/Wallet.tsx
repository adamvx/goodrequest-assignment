import { SVGProps } from "react";

const SvgWallet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#a)"
      stroke="currentColor"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m2.567 2.756 16.063 4.01c1.934.483 3.516 2.51 3.516 4.505v14.5c0 1.994-1.588 3.25-3.529 2.793l-13.484-3.17c-1.941-.458-3.529-2.463-3.529-4.456V5.229A3.635 3.635 0 0 1 5.23 1.604h20.542a3.635 3.635 0 0 1 3.625 3.625v13.292a3.636 3.636 0 0 1-3.625 3.625h-3.625M12.48 5.23h12.082" />
      <path d="M16.708 19.73a2.417 2.417 0 1 0 0-4.834 2.417 2.417 0 0 0 0 4.833ZM22.146 11.27h2.416" />
    </g>
    <defs>
      <clipPath id="a">
        <path
          fill="currentColor"
          transform="translate(1 1)"
          d="M0 0h29v29H0z"
        />
      </clipPath>
    </defs>
  </svg>
);

export default SvgWallet;
