const ICONS = {
  ARROW_LEFT:
    'm 9.768,3.972 0,1.056 -7.568,0 L 4.92,7.716 4.184,8.452 0.232,4.5 4.184,0.548 4.92,1.284 2.2,3.972 Z',
  ARROW_RIGHT:
    'm 0.232,5.028 0,-1.056 7.568,0 L 5.08,1.284 5.816,0.548 9.768,4.5 5.816,8.452 5.08,7.716 7.8,5.028 Z',
  ARROW_TOP:
    'm 5.028,9.768 -1.056,0 0,-7.568 L 1.284,4.92 0.548,4.184 4.5,0.232 8.452,4.184 7.716,4.92 5.028,2.2 Z',
  TWITTER:
    'm 16.08896,4.36384 c 0.007,0.15744 0.01088,0.31616 0.01088,0.47488 0,4.83264 -3.67744,10.4032 -10.40576,10.4032 -2.06528,0 -3.98784,-0.60352 -5.60576,-1.6416 0.28608,0.03392 0.57728,0.0512 0.87232,0.0512 1.71392,0 3.29024,-0.58496 4.54208,-1.56544 -1.6,-0.02944 -2.95104,-1.08672 -3.41632,-2.54016 0.22272,0.04224 0.45248,0.06592 0.68736,0.06592 0.33344,0 0.65728,-0.04352 0.96384,-0.12736 C 2.06464,9.14912 0.80448,7.67136 0.80448,5.89856 c 0,-0.01536 0,-0.03136 6.4e-4,-0.04608 0.4928,0.27328 1.05664,0.4384 1.65568,0.45696 C 1.48032,5.65472 0.83456,4.53472 0.83456,3.26624 0.83456,2.59552 1.0144,1.96704 1.32928,1.42688 3.13216,3.64 5.82784,5.09536 8.86656,5.24896 8.80384,4.9808 8.77248,4.7024 8.77248,4.41504 c 0,-2.0192 1.63712,-3.65696 3.65632,-3.65696 1.05216,0 2.00128,0.44416 2.66944,1.15456 0.83392,-0.16384 1.61472,-0.4672 2.3232,-0.88768 -0.2752,0.8544 -0.85312,1.57056 -1.61024,2.02368 0.74048,-0.08832 1.44704,-0.28416 2.10048,-0.57536 -0.48768,0.73216 -1.10784,1.37664 -1.82272,1.89056 z',
  FACEBOOK:
    'm 8.95072,9.50736 -2.58496,0 c 0,4.12992 0,9.21344 0,9.21344 l -3.8304,0 c 0,0 0,-5.03424 0,-9.21344 l -1.8208,0 0,-3.25632 1.8208,0 0,-2.10624 c 0,-1.50848 0.7168,-3.8656 3.8656,-3.8656 l 2.8384,0.01088 0,3.16096 c 0,0 -1.7248,0 -2.06016,0 -0.33536,0 -0.81216,0.16768 -0.81216,0.88704 l 0,1.9136 2.9184,0 -0.33472,3.25568 z',
  WHATSAPP:
    'M10.0025,0 C15.51625,0 20,4.48625 20,10 C20,15.51375 15.51625,20 10.0025,20 C7.96875,20 6.0825,19.395 4.50125,18.3475 L4.50125,18.3475 L0.6575,19.57625 L1.90375,15.86125 C0.705,14.215 0,12.1875 0,10 C0,4.485 4.48375,0 9.9975,0 L9.9975,0 Z M6.235,4.57375 C5.8525,4.57375 5.45375,4.68625 5.2125,4.9325 C4.91875,5.2325 4.19,5.93125 4.19,7.36625 C4.19,8.80125 5.23625,10.18875 5.3775,10.3825 C5.525,10.57625 7.4175,13.5625 10.35625,14.78 C12.65375,15.7325 13.33625,15.64375 13.85875,15.5325 C14.6225,15.3675 15.58,14.8025 15.82125,14.12125 C16.0625,13.43875 16.0625,12.8575 15.9925,12.73375 C15.92125,12.61 15.7275,12.54 15.43375,12.3925 C15.14,12.24625 13.71125,11.54 13.44125,11.44625 C13.17625,11.34625 12.92375,11.38125 12.72375,11.66375 C12.4425,12.0575 12.16625,12.4575 11.9425,12.69875 C11.76625,12.88625 11.47875,12.91 11.2375,12.81 C10.91375,12.675 10.00875,12.3575 8.8925,11.36375 C8.0275,10.59375 7.44,9.635 7.27,9.3475 C7.1,9.05375 7.2525,8.88375 7.3875,8.725 C7.535,8.5425 7.675,8.4125 7.8225,8.2425 C7.97,8.0725 8.0525,7.98375 8.14625,7.78375 C8.24625,7.59 8.175,7.39 8.10375,7.2425 C8.03375,7.095 7.44625,5.66 7.205,5.07875 C7.01125,4.615 6.86375,4.5975 6.57,4.585 C6.47,4.58 6.35875,4.57375 6.235,4.57375 Z',
  MAIL:
    'M 1.5345625,3.8977813 C 1.7368125,4.0405 2.3464688,4.464375 3.3635625,5.1691875 4.3806875,5.874 5.159875,6.4166875 5.7011563,6.7972812 5.760625,6.839 5.8869688,6.9296875 6.08025,7.0694688 6.2735625,7.2093438 6.4341875,7.322375 6.562,7.4085937 6.6899062,7.4947812 6.8445312,7.5914687 7.0260312,7.6985 7.2074688,7.8054375 7.3785,7.885875 7.5390937,7.939125 7.6997187,7.992813 7.8484062,8.019406 7.9851875,8.019406 l 0.00897,0 0.009,0 c 0.1367812,0 0.2855312,-0.026625 0.4461562,-0.080281 C 8.609845,7.885875 8.7810325,7.8053437 8.9623137,7.6985 9.1436887,7.5913437 9.2983137,7.49475 9.42622,7.4085937 9.554125,7.322375 9.714625,7.2093438 9.908,7.0694688 10.10125,6.9295625 10.22775,6.839 10.287219,6.7972812 10.834344,6.4166875 12.226313,5.4500937 14.462687,3.8975938 14.896875,3.594375 15.259625,3.2285 15.551031,2.8002188 15.842656,2.372125 15.988312,1.9230312 15.988312,1.4531875 c 0,-0.392625 -0.141343,-0.72871875 -0.423906,-1.00825 C 15.281875,0.16534375 14.94725,0.025625 14.56075,0.025625 l -13.1332813,0 C 0.9695,0.025625 0.6170625,0.18025 0.37021875,0.4895 0.12340625,0.7988125 0,1.1854375 0,1.6493438 0,2.0240625 0.163625,2.430125 0.49071875,2.8672813 0.81778125,3.3044687 1.1658437,3.648 1.5345625,3.8977813 Z M 15.096,4.8523437 C 13.14525,6.1726875 11.664,7.1988125 10.652969,7.9305 10.313938,8.1802188 10.038906,8.3751563 9.8276875,8.5148438 9.6164687,8.654625 9.3355625,8.797375 8.9845625,8.9430313 8.6336875,9.0889063 8.3066875,9.161625 8.0032813,9.161625 l -0.00909,0 -0.00897,0 C 7.681875,9.161625 7.3546875,9.0889063 7.0038125,8.9430313 6.6529375,8.797375 6.3718437,8.654625 6.1606875,8.5148438 5.9495937,8.3751563 5.6744687,8.1802188 5.3354688,7.9305 4.5324375,7.3416875 3.054375,6.3155 0.90121875,4.8523437 0.56209375,4.6264687 0.26171875,4.3675625 0,4.0761563 l 0,7.0839067 c 0,0.392812 0.13971875,0.728718 0.4193125,1.008281 0.27953125,0.279656 0.6156562,0.419437 1.00825,0.419437 l 13.1333125,0 c 0.3925,0 0.728594,-0.139781 1.008156,-0.419437 0.279657,-0.279656 0.419313,-0.615438 0.419313,-1.008281 l 0,-7.0839067 C 15.732531,4.3615312 15.435219,4.6204375 15.096,4.8523437 Z',
  INFO:
    'M 7.9996667,0.125 C 3.651,0.125 0.125,3.651 0.125,7.9996667 0.125,12.348333 3.651,15.875 7.9996667,15.875 12.348333,15.875 15.875,12.348333 15.875,7.9996667 15.875,3.651 12.348333,0.125 7.9996667,0.125 Z M 9.639,12.329667 C 9.2336667,12.489667 8.911,12.611 8.669,12.695 8.4276667,12.779 8.147,12.821 7.8276667,12.821 7.337,12.821 6.955,12.701 6.683,12.461667 6.411,12.222333 6.2756667,11.919 6.2756667,11.550333 c 0,-0.143333 0.01,-0.29 0.03,-0.439333 0.020667,-0.149333 0.053333,-0.317333 0.098,-0.506 L 6.911,8.813 C 6.955667,8.641 6.994333,8.477667 7.025,8.325667 7.055667,8.172333 7.070333,8.0316667 7.070333,7.9036667 c 0,-0.228 -0.047333,-0.388 -0.1413333,-0.478 -0.095333,-0.09 -0.2746667,-0.134 -0.542,-0.134 -0.1306667,0 -0.2653333,0.019333 -0.4033333,0.06 C 5.847,7.3936667 5.7283333,7.4316667 5.631,7.469 L 5.765,6.917 c 0.332,-0.1353333 0.65,-0.2513333 0.9533333,-0.3473333 0.3033334,-0.097333 0.59,-0.1453334 0.86,-0.1453334 0.4873334,0 0.8633334,0.1186667 1.128,0.3533334 C 8.9696667,7.013 9.1023333,7.319 9.1023333,7.695 9.1023333,7.773 9.093,7.9103333 9.075,8.1063333 9.057,8.303 9.023,8.482333 8.9736667,8.647 L 8.469,10.433667 C 8.4276667,10.577 8.391,10.741 8.3576667,10.924333 8.325,11.107667 8.309,11.247667 8.309,11.341667 8.309,11.579 8.3616667,11.741 8.4683333,11.827 c 0.1053334,0.086 0.29,0.129333 0.5513334,0.129333 C 9.143,11.956333 9.281,11.934333 9.437,11.891667 9.5916667,11.849 9.7036667,11.811 9.7743333,11.778333 L 9.639,12.329667 Z M 9.5496667,5.0776667 c -0.2353334,0.2186666 -0.5186667,0.328 -0.85,0.328 -0.3306667,0 -0.616,-0.1093334 -0.8533334,-0.328 C 7.6103333,4.859 7.491,4.593 7.491,4.2823333 7.491,3.9723333 7.611,3.7056667 7.8463333,3.485 8.0836667,3.2636667 8.369,3.1536667 8.6996667,3.1536667 c 0.3313333,0 0.6153333,0.11 0.85,0.3313333 C 9.785,3.7056667 9.903,3.9723333 9.903,4.2823333 9.903,4.5936667 9.785,4.859 9.5496667,5.0776667 Z',
  CHECKMARK: 'M 40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9z',
};

export default ICONS;
