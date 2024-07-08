"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function Page() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { damping: 20 });
  const background = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["rgb(56, 196, 51)", "rgb(221, 255, 0)", "rgb(255, 42, 0)"]
  );

  return (
    <>
      <motion.div
        className="sticky h-1 top-0 origin-left"
        style={{ scaleX, background }}
      ></motion.div>

      <div className="flex flex-col gap-[1.2rem] p-8">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          gravida, dolor eleifend tempor iaculis, lectus ante lobortis augue, eu
          commodo nulla tortor non massa. Vestibulum condimentum nibh at
          accumsan tempus. Nam nec massa id velit dictum sollicitudin et sed
          metus. Nam ultricies hendrerit erat, quis ornare odio ullamcorper sit
          amet. Nullam euismod blandit pharetra. Nulla fringilla metus a ornare
          tincidunt. Sed in dui vel purus porta condimentum. In pellentesque nec
          nisl non cursus. Donec condimentum eu diam ut lobortis. Ut facilisis
          scelerisque dui quis feugiat. Curabitur purus lorem, accumsan vel
          augue sed, imperdiet hendrerit nunc.
        </p>

        <p>
          Fusce nunc nisi, hendrerit vel lobortis ac, auctor et diam. Fusce
          tincidunt magna in ligula congue dictum sed at eros. Donec eleifend
          interdum orci in feugiat. Donec quis turpis condimentum, efficitur
          dolor sit amet, malesuada mauris. Mauris mattis porttitor varius. Cras
          arcu enim, maximus vitae tempus id, maximus sit amet orci. Fusce vel
          scelerisque purus. Praesent et metus eget elit convallis vestibulum.
          Ut consequat ultricies tortor, nec sagittis sem efficitur in. Donec
          libero augue, faucibus a leo vel, dignissim aliquet mauris. Praesent
          vel pretium nisl. Nulla facilisi. Donec at convallis nisi.
          Pellentesque ut est mauris.
        </p>

        <p>
          Etiam dignissim nunc at lectus posuere consequat. Morbi interdum
          hendrerit sem. Phasellus molestie sagittis ornare. Ut non finibus
          elit, ut iaculis metus. Nam tristique sapien id metus condimentum, at
          blandit urna ultricies. Nulla ligula lorem, ullamcorper quis pharetra
          quis, sodales vehicula nulla. Sed aliquam metus vel sollicitudin
          euismod. Proin quis ex orci.
        </p>

        <p>
          Sed ultrices odio eget dolor eleifend, eu sagittis neque fringilla.
          Sed semper libero et auctor finibus. Vivamus iaculis mattis turpis eu
          congue. Sed elementum lorem sit amet turpis finibus lobortis. Duis
          ornare lobortis tempus. Phasellus eget fringilla urna, interdum
          ullamcorper nisl. Aenean vitae neque nec tortor tincidunt gravida sed
          a magna.
        </p>

        <p>
          Proin aliquam ligula nunc, ut viverra arcu laoreet ac. Duis vehicula
          gravida tempus. Sed vulputate nisi ligula, accumsan viverra elit
          lobortis vel. Donec ultrices feugiat pharetra. Nam luctus neque ut
          nibh congue tincidunt. Morbi feugiat feugiat euismod. Aliquam dui leo,
          pretium at malesuada ut, ornare id magna. Nullam id ornare purus. Nunc
          in erat a dui faucibus laoreet eu eget nisl. Sed pretium tempor lectus
          vitae scelerisque. Donec condimentum nisl vitae feugiat fermentum.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Maecenas ut quam tempus nibh scelerisque
          tempus. Suspendisse molestie eleifend volutpat.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          gravida, dolor eleifend tempor iaculis, lectus ante lobortis augue, eu
          commodo nulla tortor non massa. Vestibulum condimentum nibh at
          accumsan tempus. Nam nec massa id velit dictum sollicitudin et sed
          metus. Nam ultricies hendrerit erat, quis ornare odio ullamcorper sit
          amet. Nullam euismod blandit pharetra. Nulla fringilla metus a ornare
          tincidunt. Sed in dui vel purus porta condimentum. In pellentesque nec
          nisl non cursus. Donec condimentum eu diam ut lobortis. Ut facilisis
          scelerisque dui quis feugiat. Curabitur purus lorem, accumsan vel
          augue sed, imperdiet hendrerit nunc.
        </p>

        <p>
          Fusce nunc nisi, hendrerit vel lobortis ac, auctor et diam. Fusce
          tincidunt magna in ligula congue dictum sed at eros. Donec eleifend
          interdum orci in feugiat. Donec quis turpis condimentum, efficitur
          dolor sit amet, malesuada mauris. Mauris mattis porttitor varius. Cras
          arcu enim, maximus vitae tempus id, maximus sit amet orci. Fusce vel
          scelerisque purus. Praesent et metus eget elit convallis vestibulum.
          Ut consequat ultricies tortor, nec sagittis sem efficitur in. Donec
          libero augue, faucibus a leo vel, dignissim aliquet mauris. Praesent
          vel pretium nisl. Nulla facilisi. Donec at convallis nisi.
          Pellentesque ut est mauris.
        </p>

        <p>
          Etiam dignissim nunc at lectus posuere consequat. Morbi interdum
          hendrerit sem. Phasellus molestie sagittis ornare. Ut non finibus
          elit, ut iaculis metus. Nam tristique sapien id metus condimentum, at
          blandit urna ultricies. Nulla ligula lorem, ullamcorper quis pharetra
          quis, sodales vehicula nulla. Sed aliquam metus vel sollicitudin
          euismod. Proin quis ex orci.
        </p>

        <p>
          Sed ultrices odio eget dolor eleifend, eu sagittis neque fringilla.
          Sed semper libero et auctor finibus. Vivamus iaculis mattis turpis eu
          congue. Sed elementum lorem sit amet turpis finibus lobortis. Duis
          ornare lobortis tempus. Phasellus eget fringilla urna, interdum
          ullamcorper nisl. Aenean vitae neque nec tortor tincidunt gravida sed
          a magna.
        </p>

        <p>
          Proin aliquam ligula nunc, ut viverra arcu laoreet ac. Duis vehicula
          gravida tempus. Sed vulputate nisi ligula, accumsan viverra elit
          lobortis vel. Donec ultrices feugiat pharetra. Nam luctus neque ut
          nibh congue tincidunt. Morbi feugiat feugiat euismod. Aliquam dui leo,
          pretium at malesuada ut, ornare id magna. Nullam id ornare purus. Nunc
          in erat a dui faucibus laoreet eu eget nisl. Sed pretium tempor lectus
          vitae scelerisque. Donec condimentum nisl vitae feugiat fermentum.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Maecenas ut quam tempus nibh scelerisque
          tempus. Suspendisse molestie eleifend volutpat.
        </p>
      </div>
    </>
  );
}
