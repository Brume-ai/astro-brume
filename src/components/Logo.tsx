import React from 'react';

interface LogoProps {
    className?: string;
    width?: string;
    height?: string;
    showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
    className = "w-5 h-5 max-w-full max-h-full",
    width = "32",
    height = "32",
    showText = true
}) => {
    return (
        <div className="flex items-center gap-2 mb-0.5">
            <svg
                className={className}
                width={width}
                height={height}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1318.84 1152.25"
                preserveAspectRatio="xMidYMid meet"
            >
                <g>
                    <path
                        className="fill-violet-700"
                        d="m200.73,652.01H0V40.41C0,18.09,18.09,0,40.41,0h119.9c22.32,0,40.41,18.09,40.41,40.41v611.59Z"
                    />
                    <path
                        className="fill-violet-500"
                        d="m818.58,1152.25h-318.34C224.41,1152.25,0,927.85,0,652.01S224.41,151.76,500.25,151.76h318.34c275.84,0,500.26,224.41,500.26,500.25s-224.41,500.25-500.26,500.25ZM500.25,352.49c-165.16,0-299.52,134.36-299.52,299.52s134.36,299.52,299.52,299.52h318.34c165.16,0,299.53-134.36,299.53-299.52s-134.37-299.52-299.53-299.52h-318.34Z"
                    />
                    <rect
                        className="fill-violet-800"
                        x="382.32"
                        y="523.07"
                        width="141.41"
                        height="257.87"
                        rx="30.43"
                        ry="30.43"
                    />
                    <rect
                        className="fill-violet-800"
                        x="795.11"
                        y="523.07"
                        width="141.41"
                        height="257.87"
                        rx="30.43"
                        ry="30.43"
                    />
                </g>
            </svg>

            {showText && (
                <svg className="brume-logo-text group ml-0" viewBox="1 2 504 89" style={{ width: '80px' }}>
                    <path fillRule="evenodd" className="fill-black group-hover:fill-gray-700 dark:fill-white group-hover:dark:fill-gray-100 transition-colors duration-300" d="m66.7 21q7.2 4.7 11.2 13 4 8.2 4 18.4 0 10.7-4.4 19.1-4.3 8.4-11.8 13-7.5 4.6-16.6 4.6-9.7 0-16.9-4.1-7.1-4.2-11.1-11.9v14h-19.9v-84.7h19.9v32.4q3.4-8.7 10.8-13.6 7.4-4.9 18.1-4.9 9.5 0 16.7 4.7zm-15.2 49.3q4.6-2.6 7-7.2 2.5-4.6 2.5-10.4 0-5.8-2.4-10.4-2.4-4.6-6.9-7.2-4.5-2.6-10.6-2.6-6 0-10.6 2.7-4.6 2.7-7.1 7.3-2.4 4.7-2.4 10.5 0 5.8 2.4 10.3 2.4 4.5 6.9 7.1 4.5 2.6 10.5 2.6 6.1 0 10.7-2.7z" />
                    <path fillRule="evenodd" className="fill-black group-hover:fill-gray-700 dark:fill-white dark:group-hover:fill-gray-100 transition-colors duration-300" d="m140.3 20.6v18.4q-2.1-1.4-5-2.3-2.8-0.9-6.3-0.9-5.5 0-9.5 2.5-4.1 2.5-6.4 7.7-2.3 5.1-2.3 12.7v28.4h-20.1v-68h19.8v18.7q2.4-10 7.5-15 5-5 12.4-5 5.9 0 9.9 2.8z" />
                    <path fillRule="evenodd" className="fill-black group-hover:fill-gray-700 dark:fill-white dark:group-hover:fill-gray-100 transition-colors duration-300" d="m218.2 19.1v68h-20v-13.9q-3.4 8.1-10.1 12.2-6.6 4.2-15.6 4.2-13.3 0-20.5-7.8-7.1-7.7-7.1-22.1v-40.6h20v36.4q0 9.2 3.9 13.7 4 4.5 12.1 4.5 8.2 0 12.8-5.1 4.5-5.1 4.5-13.9v-35.6z" />
                    <path fillRule="evenodd" className="fill-black group-hover:fill-gray-700 dark:fill-white dark:group-hover:fill-gray-100 transition-colors duration-300" d="m337.3 23.9q6.4 7.6 6.4 21.8v41.4h-20v-37.2q0-8.1-3.2-12.4-3.2-4.4-9.5-4.4-6.7 0-10.3 4.6-3.6 4.6-3.6 12.3v37.1h-19.8v-38.8q0-7-3.3-11.1-3.3-4.1-9.4-4.1-4.4 0-7.6 2.4-3.1 2.4-4.8 6.6-1.6 4.2-1.6 9.8h-0.1v35.2h-19.9v-68h19.8v14.3q3-8.8 8.7-12.9 5.6-4.2 14.2-4.2 8.3 0 14 4.4 5.7 4.3 8.2 12.3 2.9-8.5 8.8-12.6 5.9-4.1 14.8-4.1 11.9 0 18.2 7.6z" />
                    <path fillRule="evenodd" className="fill-black group-hover:fill-gray-700 dark:fill-white dark:group-hover:fill-gray-100 transition-colors duration-300" d="m425.6 56.2h-54.3q1.7 8 8.5 12.4 6.9 4.4 18 4.4 7.4 0 13.8-2.2 6.4-2.2 11.7-5.9v15.5q-5.5 4-13.4 6.4-8 2.3-16.6 2.3-12.6 0-22.1-4.6-9.4-4.7-14.6-13-5.1-8.4-5.1-19.3 0-10.1 4.7-18.2 4.6-8.2 13.5-12.9 8.8-4.8 20.7-4.8 11.3 0 19.2 4 7.9 3.9 11.9 11.2 4.1 7.3 4.1 17.5zm-47.6-20.6q-4.9 3.7-6.3 10h37q-0.7-6.6-5.3-10.2-4.6-3.6-12.6-3.6-7.9 0-12.8 3.8z" />
                    <path fillRule="evenodd" className="fill-gray-400" d="m437.1 87.8q-1.3-1.2-1.3-3 0-1.2 0.6-2.2 0.5-1 1.5-1.5 1-0.6 2.2-0.6 1.9 0 3.1 1.2 1.1 1.2 1.1 3.1 0 1.8-1.1 3.1-1.2 1.2-3.1 1.2-1.8 0-3-1.3z" />
                    <path fillRule="evenodd" className="fill-gray-400" d="m481.3 77.1h-20.8l-4.7 12h-6.6l17.7-43.8h8.4l17.4 43.8h-6.7zm-2-5.1l-8.4-21.4-8.4 21.4z" />
                    <path fillRule="evenodd" className="fill-gray-400" d="m497.6 45.2h6.3v43.9h-6.3z" />
                </svg>
            )}
        </div>
    );
};
