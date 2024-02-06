export const Spiner = () => {
    return (
        <div className='mx-auto inline-block'>
            <svg xmlns="http://www.w3.org/2000/svg"
                 className="margin: auto; display: block; shape-rendering: auto;" width="40px" height="40px"
                 viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx="84" cy="50" r="10" fill="transparent">
                    <animate attributeName="r" repeatCount="indefinite" dur="0.8333333333333334s" calcMode="spline"
                             keyTimes="0;1" values="10;0" keySplines="0 0.5 0.5 1" begin="0s"></animate>
                    <animate attributeName="fill" repeatCount="indefinite" dur="3.3333333333333335s" calcMode="discrete"
                             keyTimes="0;0.25;0.5;0.75;1" values="#1d3f72;#71c2cc;#d8ebf9;#5699d2;#1d3f72"
                             begin="0s"></animate>
                </circle>
                <circle cx="16" cy="50" r="10" fill="#1d3f72">
                    <animate attributeName="r" repeatCount="indefinite" dur="3.3333333333333335s" calcMode="spline"
                             keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10"
                             keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
                    <animate attributeName="cx" repeatCount="indefinite" dur="3.3333333333333335s" calcMode="spline"
                             keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84"
                             keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
                </circle>
                <circle cx="50" cy="50" r="10" fill="#5699d2">
                    <animate attributeName="r" repeatCount="indefinite" dur="3.3333333333333335s" calcMode="spline"
                             keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10"
                             keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                             begin="-0.8333333333333334s"></animate>
                    <animate attributeName="cx" repeatCount="indefinite" dur="3.3333333333333335s" calcMode="spline"
                             keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84"
                             keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                             begin="-0.8333333333333334s"></animate>
                </circle>
                <circle cx="84" cy="50" r="10" fill="#d8ebf9">
                    <animate attributeName="r" repeatCount="indefinite" dur="3.3333333333333335s" calcMode="spline"
                             keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10"
                             keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                             begin="-1.6666666666666667s"></animate>
                    <animate attributeName="cx" repeatCount="indefinite" dur="3.3333333333333335s" calcMode="spline"
                             keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84"
                             keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                             begin="-1.6666666666666667s"></animate>
                </circle>
                <circle cx="16" cy="50" r="10" fill="#71c2cc">
                    <animate attributeName="r" repeatCount="indefinite" dur="3.3333333333333335s" calcMode="spline"
                             keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10"
                             keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-2.5s"></animate>
                    <animate attributeName="cx" repeatCount="indefinite" dur="3.3333333333333335s" calcMode="spline"
                             keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84"
                             keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-2.5s"></animate>
                </circle>
            </svg>
        </div>
    )
}

