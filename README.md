Basic image slider based react and basics using react function such as -{useEffect, useRef, useState}

there is use of Framer-motion from react and 3 motion div main div, inner-main div, and items for image

main div has overflow as hidden in order to use sliding image functionality

some important stuff to know -

sliding can be ranged unlimited so inorder to fix the range of sliding we have used dragConstraints{{right : 0, left : -width}} for right, its obvious there will not be any image on right side so its 0
for left side, we took total scrollWidth - offsetWidth that will calculate total range of all images on a slider
and thats the pretty is.
