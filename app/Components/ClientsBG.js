"use client";
import { useEffect, useRef } from "react";

export default function ClientsBG() {

   const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const rects = svg.querySelectorAll("rect");
    let index = 0;
    let interval = null;

    const startAnimation = () => {
      if (interval) return; 

      interval = setInterval(() => {
        if (index < rects.length) {
          rects[index].style.stroke = "#388DCB"; 
          index++;
        } else {
          clearInterval(interval);
        }
      }, 20); 
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect(); 
        }
      },
      {
        threshold: 0.3, 
      }
    );

    observer.observe(svg);

    return () => {
      if (interval) clearInterval(interval);
      observer.disconnect();
    };
  }, []);


  return (
   <svg  ref={svgRef} id='clients_vector' width="" height="" viewBox="0 0 2097 374" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.2">
<rect x="44.9414" y="4.61475" width="77" height="364" stroke="#ffffff"/>
<rect x="71.6409" y="1.75382" width="77" height="364" transform="rotate(5.52431 71.6409 1.75382)" stroke="#ffffff"/>
<rect x="98.5336" y="0.609991" width="77" height="364" transform="rotate(11.0486 98.5336 0.609991)" stroke="#ffffff"/>
<rect x="125.453" y="1.19411" width="77" height="364" transform="rotate(16.5729 125.453 1.19411)" stroke="#ffffff"/>
<rect x="152.234" y="3.50048" width="77" height="364" transform="rotate(22.0972 152.234 3.50048)" stroke="#ffffff"/>
<rect x="178.709" y="7.50784" width="77" height="364" transform="rotate(27.6215 178.709 7.50784)" stroke="#ffffff"/>
<rect x="204.718" y="13.1788" width="77" height="364" transform="rotate(33.1458 204.718 13.1788)" stroke="#ffffff"/>
<rect x="230.102" y="20.4611" width="77" height="364" transform="rotate(38.6701 230.102 20.4611)" stroke="#ffffff"/>
<rect x="254.709" y="29.2866" width="77" height="364" transform="rotate(44.1945 254.709 29.2866)" stroke="#ffffff"/>
<rect x="278.393" y="39.5739" width="77" height="364" transform="rotate(49.7188 278.393 39.5739)" stroke="#ffffff"/>
<rect x="301.019" y="51.2271" width="77" height="364" transform="rotate(55.2431 301.019 51.2271)" stroke="#ffffff"/>
<rect x="322.46" y="64.1375" width="77" height="364" transform="rotate(60.7674 322.46 64.1375)" stroke="#ffffff"/>
<rect x="342.601" y="78.1857" width="77" height="364" transform="rotate(66.2917 342.601 78.1857)" stroke="#ffffff"/>
<rect x="361.337" y="93.2414" width="77" height="364" transform="rotate(71.816 361.337 93.2414)" stroke="#ffffff"/>
<rect x="378.578" y="109.164" width="77" height="364" transform="rotate(77.3403 378.578 109.164)" stroke="#ffffff"/>
<rect x="394.249" y="125.807" width="77" height="364" transform="rotate(82.8646 394.249 125.807)" stroke="#ffffff"/>
<rect x="408.286" y="143.014" width="77" height="364" transform="rotate(88.3889 408.286 143.014)" stroke="#ffffff"/>
<rect x="420.643" y="160.626" width="77" height="364" transform="rotate(93.9132 420.643 160.626)" stroke="#ffffff"/>
<rect x="431.29" y="178.48" width="77" height="364" transform="rotate(99.4375 431.29 178.48)" stroke="#ffffff"/>
<rect x="440.21" y="196.409" width="77" height="364" transform="rotate(104.962 440.21 196.409)" stroke="#ffffff"/>
<rect x="447.404" y="214.247" width="77" height="364" transform="rotate(110.486 447.404 214.247)" stroke="#ffffff"/>
<rect x="452.889" y="231.829" width="77" height="364" transform="rotate(116.01 452.889 231.829)" stroke="#ffffff"/>
<rect x="456.699" y="248.991" width="77" height="364" transform="rotate(121.535 456.699 248.991)" stroke="#ffffff"/>
<rect x="458.88" y="265.573" width="77" height="364" transform="rotate(127.059 458.88 265.573)" stroke="#ffffff"/>
<rect x="459.496" y="281.422" width="77" height="364" transform="rotate(132.583 459.496 281.422)" stroke="#ffffff"/>
<rect x="458.626" y="296.39" width="77" height="364" transform="rotate(138.108 458.626 296.39)" stroke="#ffffff"/>
<rect x="456.36" y="310.338" width="77" height="364" transform="rotate(143.632 456.36 310.338)" stroke="#ffffff"/>
<rect x="452.805" y="323.138" width="77" height="364" transform="rotate(149.156 452.805 323.138)" stroke="#ffffff"/>
<rect x="448.075" y="334.669" width="77" height="364" transform="rotate(154.681 448.075 334.669)" stroke="#ffffff"/>
<rect x="442.299" y="344.824" width="77" height="364" transform="rotate(160.205 442.299 344.824)" stroke="#ffffff"/>
<rect x="435.614" y="353.51" width="77" height="364" transform="rotate(165.729 435.614 353.51)" stroke="#ffffff"/>
<rect x="428.166" y="360.646" width="77" height="364" transform="rotate(171.254 428.166 360.646)" stroke="#ffffff"/>
<rect x="420.107" y="366.166" width="77" height="364" transform="rotate(176.778 420.107 366.166)" stroke="#ffffff"/>
<rect x="411.597" y="370.017" width="77" height="364" transform="rotate(-177.698 411.597 370.017)" stroke="#ffffff"/>
<rect x="402.796" y="372.165" width="77" height="364" transform="rotate(-172.174 402.796 372.165)" stroke="#ffffff"/>
<rect x="393.872" y="372.589" width="77" height="364" transform="rotate(-166.649 393.872 372.589)" stroke="#ffffff"/>
<rect x="384.99" y="371.286" width="77" height="364" transform="rotate(-161.125 384.99 371.286)" stroke="#ffffff"/>
<rect x="376.317" y="368.267" width="77" height="364" transform="rotate(-155.601 376.317 368.267)" stroke="#ffffff"/>
<rect x="368.016" y="363.561" width="77" height="364" transform="rotate(-150.076 368.016 363.561)" stroke="#ffffff"/>
<rect x="360.249" y="357.211" width="77" height="364" transform="rotate(-144.552 360.249 357.211)" stroke="#ffffff"/>
<rect x="353.171" y="349.277" width="77" height="364" transform="rotate(-139.028 353.171 349.277)" stroke="#ffffff"/>
<rect x="346.931" y="339.832" width="77" height="364" transform="rotate(-133.503 346.931 339.832)" stroke="#ffffff"/>
<rect x="341.671" y="328.963" width="77" height="364" transform="rotate(-127.979 341.671 328.963)" stroke="#ffffff"/>
<rect x="337.524" y="316.773" width="77" height="364" transform="rotate(-122.455 337.524 316.773)" stroke="#ffffff"/>
<rect x="334.612" y="303.373" width="77" height="364" transform="rotate(-116.93 334.612 303.373)" stroke="#ffffff"/>
<rect x="333.045" y="288.888" width="77" height="364" transform="rotate(-111.406 333.045 288.888)" stroke="#ffffff"/>
<rect x="332.921" y="273.454" width="77" height="364" transform="rotate(-105.882 332.921 273.454)" stroke="#ffffff"/>
<rect x="334.326" y="257.213" width="77" height="364" transform="rotate(-100.358 334.326 257.213)" stroke="#ffffff"/>
<rect x="337.329" y="240.317" width="77" height="364" transform="rotate(-94.8333 337.329 240.317)" stroke="#ffffff"/>
<rect x="341.987" y="222.921" width="77" height="364" transform="rotate(-89.309 341.987 222.921)" stroke="#ffffff"/>
<rect x="348.34" y="205.188" width="77" height="364" transform="rotate(-83.7847 348.34 205.188)" stroke="#ffffff"/>
<rect x="356.412" y="187.283" width="77" height="364" transform="rotate(-78.2603 356.412 187.283)" stroke="#ffffff"/>
<rect x="366.212" y="169.372" width="77" height="364" transform="rotate(-72.736 366.212 169.372)" stroke="#ffffff"/>
<rect x="377.732" y="151.62" width="77" height="364" transform="rotate(-67.2117 377.732 151.62)" stroke="#ffffff"/>
<rect x="390.95" y="134.194" width="77" height="364" transform="rotate(-61.6874 390.95 134.194)" stroke="#ffffff"/>
<rect x="405.826" y="117.255" width="77" height="364" transform="rotate(-56.1631 405.826 117.255)" stroke="#ffffff"/>
<rect x="422.305" y="100.96" width="77" height="364" transform="rotate(-50.6388 422.305 100.96)" stroke="#ffffff"/>
<rect x="440.318" y="85.4615" width="77" height="364" transform="rotate(-45.1145 440.318 85.4615)" stroke="#ffffff"/>
<rect x="459.782" y="70.9021" width="77" height="364" transform="rotate(-39.5902 459.782 70.9021)" stroke="#ffffff"/>
<rect x="480.598" y="57.4178" width="77" height="364" transform="rotate(-34.0659 480.598 57.4178)" stroke="#ffffff"/>
<rect x="502.658" y="45.1334" width="77" height="364" transform="rotate(-28.5416 502.658 45.1334)" stroke="#ffffff"/>
<rect x="525.839" y="34.1636" width="77" height="364" transform="rotate(-23.0173 525.839 34.1636)" stroke="#ffffff"/>
<rect x="550.011" y="24.6098" width="77" height="364" transform="rotate(-17.493 550.011 24.6098)" stroke="#ffffff"/>
<rect x="575.032" y="16.5607" width="77" height="364" transform="rotate(-11.9687 575.032 16.5607)" stroke="#ffffff"/>
<rect x="600.753" y="10.0916" width="77" height="364" transform="rotate(-6.44435 600.753 10.0916)" stroke="#ffffff"/>
<rect x="627.02" y="5.26241" width="77" height="364" transform="rotate(-0.920047 627.02 5.26241)" stroke="#ffffff"/>
<rect x="653.671" y="2.11762" width="77" height="364" transform="rotate(4.60426 653.671 2.11762)" stroke="#ffffff"/>
<rect x="680.543" y="0.686582" width="77" height="364" transform="rotate(10.1286 680.543 0.686582)" stroke="#ffffff"/>
<rect x="707.47" y="0.98306" width="77" height="364" transform="rotate(15.6529 707.47 0.98306)" stroke="#ffffff"/>
<rect x="734.285" y="3.00379" width="77" height="364" transform="rotate(21.1772 734.285 3.00379)" stroke="#ffffff"/>
<rect x="760.823" y="6.72994" width="77" height="364" transform="rotate(26.7015 760.823 6.72994)" stroke="#ffffff"/>
<rect x="786.921" y="12.1271" width="77" height="364" transform="rotate(32.2258 786.921 12.1271)" stroke="#ffffff"/>
<rect x="812.419" y="19.1453" width="77" height="364" transform="rotate(37.7501 812.419 19.1453)" stroke="#ffffff"/>
<rect x="837.166" y="27.7195" width="77" height="364" transform="rotate(43.2744 837.166 27.7195)" stroke="#ffffff"/>
<rect x="861.014" y="37.7695" width="77" height="364" transform="rotate(48.7987 861.014 37.7695)" stroke="#ffffff"/>
<rect x="883.825" y="49.2022" width="77" height="364" transform="rotate(54.323 883.825 49.2022)" stroke="#ffffff"/>
<rect x="905.472" y="61.9115" width="77" height="364" transform="rotate(59.8473 905.472 61.9115)" stroke="#ffffff"/>
<rect x="925.836" y="75.7791" width="77" height="364" transform="rotate(65.3716 925.836 75.7791)" stroke="#ffffff"/>
<rect x="944.812" y="90.6761" width="77" height="364" transform="rotate(70.8959 944.812 90.6761)" stroke="#ffffff"/>
<rect x="962.309" y="106.465" width="77" height="364" transform="rotate(76.4203 962.309 106.465)" stroke="#ffffff"/>
<rect x="978.245" y="122.998" width="77" height="364" transform="rotate(81.9446 978.245 122.998)" stroke="#ffffff"/>
<rect x="992.558" y="140.122" width="77" height="364" transform="rotate(87.4689 992.558 140.122)" stroke="#ffffff"/>
<rect x="1005.2" y="157.678" width="77" height="364" transform="rotate(92.9932 1005.2 157.678)" stroke="#ffffff"/>
<rect x="1016.13" y="175.503" width="77" height="364" transform="rotate(98.5175 1016.13 175.503)" stroke="#ffffff"/>
<rect x="1025.34" y="193.431" width="77" height="364" transform="rotate(104.042 1025.34 193.431)" stroke="#ffffff"/>
<rect x="1032.82" y="211.296" width="77" height="364" transform="rotate(109.566 1032.82 211.296)" stroke="#ffffff"/>
<rect x="1038.59" y="228.932" width="77" height="364" transform="rotate(115.09 1038.59 228.932)" stroke="#ffffff"/>
<rect x="1042.67" y="246.175" width="77" height="364" transform="rotate(120.615 1042.67 246.175)" stroke="#ffffff"/>
<rect x="1045.12" y="262.864" width="77" height="364" transform="rotate(126.139 1045.12 262.864)" stroke="#ffffff"/>
<rect x="1045.99" y="278.846" width="77" height="364" transform="rotate(131.663 1045.99 278.846)" stroke="#ffffff"/>
<rect x="1045.37" y="293.971" width="77" height="364" transform="rotate(137.188 1045.37 293.971)" stroke="#ffffff"/>
<rect x="1043.33" y="308.098" width="77" height="364" transform="rotate(142.712 1043.33 308.098)" stroke="#ffffff"/>
<rect x="1039.98" y="321.097" width="77" height="364" transform="rotate(148.236 1039.98 321.097)" stroke="#ffffff"/>
<rect x="1035.43" y="332.847" width="77" height="364" transform="rotate(153.761 1035.43 332.847)" stroke="#ffffff"/>
<rect x="1029.82" y="343.238" width="77" height="364" transform="rotate(159.285 1029.82 343.238)" stroke="#ffffff"/>
<rect x="1023.28" y="352.175" width="77" height="364" transform="rotate(164.809 1023.28 352.175)" stroke="#ffffff"/>
<rect x="1015.95" y="359.574" width="77" height="364" transform="rotate(170.333 1015.95 359.574)" stroke="#ffffff"/>
<rect x="1007.98" y="365.367" width="77" height="364" transform="rotate(175.858 1007.98 365.367)" stroke="#ffffff"/>
<rect x="999.534" y="369.499" width="77" height="364" transform="rotate(-178.618 999.534 369.499)" stroke="#ffffff"/>
<rect x="990.771" y="371.933" width="77" height="364" transform="rotate(-173.094 990.771 371.933)" stroke="#ffffff"/>
<rect x="981.856" y="372.645" width="77" height="364" transform="rotate(-167.569 981.856 372.645)" stroke="#ffffff"/>
<rect x="972.955" y="371.629" width="77" height="364" transform="rotate(-162.045 972.955 371.629)" stroke="#ffffff"/>
<rect x="964.235" y="368.894" width="77" height="364" transform="rotate(-156.521 964.235 368.894)" stroke="#ffffff"/>
<rect x="955.861" y="364.467" width="77" height="364" transform="rotate(-150.996 955.861 364.467)" stroke="#ffffff"/>
<rect x="947.994" y="358.387" width="77" height="364" transform="rotate(-145.472 947.994 358.387)" stroke="#ffffff"/>
<rect x="940.791" y="350.712" width="77" height="364" transform="rotate(-139.948 940.791 350.712)" stroke="#ffffff"/>
<rect x="934.401" y="341.513" width="77" height="364" transform="rotate(-134.423 934.401 341.513)" stroke="#ffffff"/>
<rect x="928.969" y="330.875" width="77" height="364" transform="rotate(-128.899 928.969 330.875)" stroke="#ffffff"/>
<rect x="924.628" y="318.896" width="77" height="364" transform="rotate(-123.375 924.628 318.896)" stroke="#ffffff"/>
<rect x="921.502" y="305.69" width="77" height="364" transform="rotate(-117.851 921.502 305.69)" stroke="#ffffff"/>
<rect x="919.704" y="291.377" width="77" height="364" transform="rotate(-112.326 919.704 291.377)" stroke="#ffffff"/>
<rect x="919.334" y="276.091" width="77" height="364" transform="rotate(-106.802 919.334 276.091)" stroke="#ffffff"/>
<rect x="920.479" y="259.974" width="77" height="364" transform="rotate(-101.278 920.479 259.974)" stroke="#ffffff"/>
<rect x="923.211" y="243.176" width="77" height="364" transform="rotate(-95.7533 923.211 243.176)" stroke="#ffffff"/>
<rect x="927.59" y="225.852" width="77" height="364" transform="rotate(-90.229 927.59 225.852)" stroke="#ffffff"/>
<rect x="933.658" y="208.164" width="77" height="364" transform="rotate(-84.7047 933.658 208.164)" stroke="#ffffff"/>
<rect x="941.443" y="190.277" width="77" height="364" transform="rotate(-79.1804 941.443 190.277)" stroke="#ffffff"/>
<rect x="950.955" y="172.355" width="77" height="364" transform="rotate(-73.6561 950.955 172.355)" stroke="#ffffff"/>
<rect x="962.191" y="154.565" width="77" height="364" transform="rotate(-68.1318 962.191 154.565)" stroke="#ffffff"/>
<rect x="975.128" y="137.074" width="77" height="364" transform="rotate(-62.6075 975.128 137.074)" stroke="#ffffff"/>
<rect x="989.731" y="120.042" width="77" height="364" transform="rotate(-57.0832 989.731 120.042)" stroke="#ffffff"/>
<rect x="1005.95" y="103.63" width="77" height="364" transform="rotate(-51.5589 1005.95 103.63)" stroke="#ffffff"/>
<rect x="1023.71" y="87.9877" width="77" height="364" transform="rotate(-46.0345 1023.71 87.9877)" stroke="#ffffff"/>
<rect x="1042.94" y="73.2624" width="77" height="364" transform="rotate(-40.5102 1042.94 73.2624)" stroke="#ffffff"/>
<rect x="1063.54" y="59.5898" width="77" height="364" transform="rotate(-34.9859 1063.54 59.5898)" stroke="#ffffff"/>
<rect x="1085.4" y="47.0971" width="77" height="364" transform="rotate(-29.4616 1085.4 47.0971)" stroke="#ffffff"/>
<rect x="1108.4" y="35.9006" width="77" height="364" transform="rotate(-23.9373 1108.4 35.9006)" stroke="#ffffff"/>
<rect x="1132.42" y="26.1046" width="77" height="364" transform="rotate(-18.413 1132.42 26.1046)" stroke="#ffffff"/>
<rect x="1157.31" y="17.7992" width="77" height="364" transform="rotate(-12.8887 1157.31 17.7992)" stroke="#ffffff"/>
<rect x="1182.92" y="11.0622" width="77" height="364" transform="rotate(-7.3644 1182.92 11.0622)" stroke="#ffffff"/>
<rect x="1209.11" y="5.95634" width="77" height="364" transform="rotate(-1.84009 1209.11 5.95634)" stroke="#ffffff"/>
<rect x="1235.71" y="2.52865" width="77" height="364" transform="rotate(3.68422 1235.71 2.52865)" stroke="#ffffff"/>
<rect x="1262.56" y="0.810875" width="77" height="364" transform="rotate(9.20852 1262.56 0.810875)" stroke="#ffffff"/>
<rect x="1289.48" y="0.819213" width="77" height="364" transform="rotate(14.7328 1289.48 0.819213)" stroke="#ffffff"/>
<rect x="1316.33" y="2.55381" width="77" height="364" transform="rotate(20.2571 1316.33 2.55381)" stroke="#ffffff"/>
<rect x="1342.93" y="5.99827" width="77" height="364" transform="rotate(25.7814 1342.93 5.99827)" stroke="#ffffff"/>
<rect x="1369.11" y="11.1206" width="77" height="364" transform="rotate(31.3057 1369.11 11.1206)" stroke="#ffffff"/>
<rect x="1394.72" y="17.8728" width="77" height="364" transform="rotate(36.8301 1394.72 17.8728)" stroke="#ffffff"/>
<rect x="1419.6" y="26.1927" width="77" height="364" transform="rotate(42.3544 1419.6 26.1927)" stroke="#ffffff"/>
<rect x="1443.61" y="36.0031" width="77" height="364" transform="rotate(47.8787 1443.61 36.0031)" stroke="#ffffff"/>
<rect x="1466.6" y="47.2127" width="77" height="364" transform="rotate(53.403 1466.6 47.2127)" stroke="#ffffff"/>
<rect x="1488.45" y="59.7171" width="77" height="364" transform="rotate(58.9273 1488.45 59.7171)" stroke="#ffffff"/>
<rect x="1509.03" y="73.4006" width="77" height="364" transform="rotate(64.4516 1509.03 73.4006)" stroke="#ffffff"/>
<rect x="1528.25" y="88.1356" width="77" height="364" transform="rotate(69.9759 1528.25 88.1356)" stroke="#ffffff"/>
<rect x="1546" y="103.786" width="77" height="364" transform="rotate(75.5002 1546 103.786)" stroke="#ffffff"/>
<rect x="1562.2" y="120.205" width="77" height="364" transform="rotate(81.0245 1562.2 120.205)" stroke="#ffffff"/>
<rect x="1576.79" y="137.242" width="77" height="364" transform="rotate(86.5488 1576.79 137.242)" stroke="#ffffff"/>
<rect x="1589.71" y="154.737" width="77" height="364" transform="rotate(92.0731 1589.71 154.737)" stroke="#ffffff"/>
<rect x="1600.93" y="172.529" width="77" height="364" transform="rotate(97.5974 1600.93 172.529)" stroke="#ffffff"/>
<rect x="1610.42" y="190.451" width="77" height="364" transform="rotate(103.122 1610.42 190.451)" stroke="#ffffff"/>
<rect x="1618.19" y="208.338" width="77" height="364" transform="rotate(108.646 1618.19 208.338)" stroke="#ffffff"/>
<rect x="1624.24" y="226.024" width="77" height="364" transform="rotate(114.17 1624.24 226.024)" stroke="#ffffff"/>
<rect x="1628.6" y="243.343" width="77" height="364" transform="rotate(119.695 1628.6 243.343)" stroke="#ffffff"/>
<rect x="1631.32" y="260.136" width="77" height="364" transform="rotate(125.219 1631.32 260.136)" stroke="#ffffff"/>
<rect x="1632.45" y="276.246" width="77" height="364" transform="rotate(130.743 1632.45 276.246)" stroke="#ffffff"/>
<rect x="1632.07" y="291.523" width="77" height="364" transform="rotate(136.268 1632.07 291.523)" stroke="#ffffff"/>
<rect x="1630.25" y="305.827" width="77" height="364" transform="rotate(141.792 1630.25 305.827)" stroke="#ffffff"/>
<rect x="1627.12" y="319.022" width="77" height="364" transform="rotate(147.316 1627.12 319.022)" stroke="#ffffff"/>
<rect x="1622.76" y="330.988" width="77" height="364" transform="rotate(152.84 1622.76 330.988)" stroke="#ffffff"/>
<rect x="1617.32" y="341.613" width="77" height="364" transform="rotate(158.365 1617.32 341.613)" stroke="#ffffff"/>
<rect x="1610.92" y="350.799" width="77" height="364" transform="rotate(163.889 1610.92 350.799)" stroke="#ffffff"/>
<rect x="1603.71" y="358.459" width="77" height="364" transform="rotate(169.413 1603.71 358.459)" stroke="#ffffff"/>
<rect x="1595.84" y="364.523" width="77" height="364" transform="rotate(174.938 1595.84 364.523)" stroke="#ffffff"/>
<rect x="1587.46" y="368.935" width="77" height="364" transform="rotate(-179.538 1587.46 368.935)" stroke="#ffffff"/>
<rect x="1578.74" y="371.653" width="77" height="364" transform="rotate(-174.014 1578.74 371.653)" stroke="#ffffff"/>
<rect x="1569.84" y="372.653" width="77" height="364" transform="rotate(-168.489 1569.84 372.653)" stroke="#ffffff"/>
<rect x="1560.93" y="371.925" width="77" height="364" transform="rotate(-162.965 1560.93 371.925)" stroke="#ffffff"/>
<rect x="1552.16" y="369.475" width="77" height="364" transform="rotate(-157.441 1552.16 369.475)" stroke="#ffffff"/>
<rect x="1543.72" y="365.327" width="77" height="364" transform="rotate(-151.916 1543.72 365.327)" stroke="#ffffff"/>
<rect x="1535.76" y="359.519" width="77" height="364" transform="rotate(-146.392 1535.76 359.519)" stroke="#ffffff"/>
<rect x="1528.43" y="352.105" width="77" height="364" transform="rotate(-140.868 1528.43 352.105)" stroke="#ffffff"/>
<rect x="1521.9" y="343.154" width="77" height="364" transform="rotate(-135.344 1521.9 343.154)" stroke="#ffffff"/>
<rect x="1516.3" y="332.749" width="77" height="364" transform="rotate(-129.819 1516.3 332.749)" stroke="#ffffff"/>
<rect x="1511.77" y="320.987" width="77" height="364" transform="rotate(-124.295 1511.77 320.987)" stroke="#ffffff"/>
<rect x="1508.43" y="307.976" width="77" height="364" transform="rotate(-118.771 1508.43 307.976)" stroke="#ffffff"/>
<rect x="1506.4" y="293.839" width="77" height="364" transform="rotate(-113.246 1506.4 293.839)" stroke="#ffffff"/>
<rect x="1505.79" y="278.706" width="77" height="364" transform="rotate(-107.722 1505.79 278.706)" stroke="#ffffff"/>
<rect x="1506.68" y="262.717" width="77" height="364" transform="rotate(-102.198 1506.68 262.717)" stroke="#ffffff"/>
<rect x="1509.14" y="246.021" width="77" height="364" transform="rotate(-96.6734 1509.14 246.021)" stroke="#ffffff"/>
<rect x="1513.24" y="228.774" width="77" height="364" transform="rotate(-91.1491 1513.24 228.774)" stroke="#ffffff"/>
<rect x="1519.02" y="211.136" width="77" height="364" transform="rotate(-85.6248 1519.02 211.136)" stroke="#ffffff"/>
<rect x="1526.52" y="193.27" width="77" height="364" transform="rotate(-80.1004 1526.52 193.27)" stroke="#ffffff"/>
<rect x="1535.75" y="175.342" width="77" height="364" transform="rotate(-74.5761 1535.75 175.342)" stroke="#ffffff"/>
<rect x="1546.7" y="157.519" width="77" height="364" transform="rotate(-69.0518 1546.7 157.519)" stroke="#ffffff"/>
<rect x="1559.35" y="139.966" width="77" height="364" transform="rotate(-63.5275 1559.35 139.966)" stroke="#ffffff"/>
<rect x="1573.68" y="122.847" width="77" height="364" transform="rotate(-58.0032 1573.68 122.847)" stroke="#ffffff"/>
<rect x="1589.63" y="106.321" width="77" height="364" transform="rotate(-52.4789 1589.63 106.321)" stroke="#ffffff"/>
<rect x="1607.14" y="90.5398" width="77" height="364" transform="rotate(-46.9546 1607.14 90.5398)" stroke="#ffffff"/>
<rect x="1626.13" y="75.6519" width="77" height="364" transform="rotate(-41.4303 1626.13 75.6519)" stroke="#ffffff"/>
<rect x="1646.51" y="61.7949" width="77" height="364" transform="rotate(-35.906 1646.51 61.7949)" stroke="#ffffff"/>
<rect x="1668.17" y="49.0974" width="77" height="364" transform="rotate(-30.3817 1668.17 49.0974)" stroke="#ffffff"/>
<rect x="1690.99" y="37.6776" width="77" height="364" transform="rotate(-24.8574 1690.99 37.6776)" stroke="#ffffff"/>
<rect x="1714.85" y="27.6417" width="77" height="364" transform="rotate(-19.3331 1714.85 27.6417)" stroke="#ffffff"/>
<rect x="1739.6" y="19.0825" width="77" height="364" transform="rotate(-13.8088 1739.6 19.0825)" stroke="#ffffff"/>
<rect x="1765.11" y="12.0795" width="77" height="364" transform="rotate(-8.28446 1765.11 12.0795)" stroke="#ffffff"/>
<rect x="1791.21" y="6.698" width="77" height="364" transform="rotate(-2.76015 1791.21 6.698)" stroke="#ffffff"/>
<rect x="1817.75" y="2.98789" width="77" height="364" transform="rotate(2.76416 1817.75 2.98789)" stroke="#ffffff"/>
<rect x="1844.57" y="0.983848" width="77" height="364" transform="rotate(8.28847 1844.57 0.983848)" stroke="#ffffff"/>
<rect x="1871.5" y="0.704525" width="77" height="364" transform="rotate(13.8128 1871.5 0.704525)" stroke="#ffffff"/>
<rect x="1898.37" y="2.152" width="77" height="364" transform="rotate(19.3371 1898.37 2.152)" stroke="#ffffff"/>
<rect x="1925.01" y="5.31329" width="77" height="364" transform="rotate(24.8614 1925.01 5.31329)" stroke="#ffffff"/>
<rect x="1951.28" y="10.1588" width="77" height="364" transform="rotate(30.3857 1951.28 10.1588)" stroke="#ffffff"/>
<rect x="1976.99" y="16.6435" width="77" height="364" transform="rotate(35.91 1976.99 16.6435)" stroke="#ffffff"/>
<rect x="2002.01" y="24.7072" width="77" height="364" transform="rotate(41.4343 2002.01 24.7072)" stroke="#ffffff"/>
<rect x="2026.17" y="34.2751" width="77" height="364" transform="rotate(46.9586 2026.17 34.2751)" stroke="#ffffff"/>
<rect x="2049.34" y="45.2582" width="77" height="364" transform="rotate(52.4829 2049.34 45.2582)" stroke="#ffffff"/>
</g>
</svg>

  )
}
