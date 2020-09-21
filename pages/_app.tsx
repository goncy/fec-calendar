import React from "react";
import {ChakraProvider, Image, Stack, Text, theme} from "@chakra-ui/core";
import {merge} from "@chakra-ui/utils";

const customTheme = merge(theme, {
  styles: {
    global: {
      "html, body": {
        background: "linear-gradient(0deg, rgba(192,245,224,1) 0%, rgba(49,129,99,1) 100%)",
        backgroundSize: "cover",
        minHeight: "100vh",
      },
    },
  },
});

function FecCalendar({Component, pageProps}) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Stack spacing={{base: 4, sm: 12}}>
        <Image src="/header.svg" />
        <Stack paddingX={{base: 4, sm: 12}} spacing={{base: 6, sm: 12}}>
          <Image
            alignSelf="flex-end"
            height={{base: 100, sm: 200}}
            marginTop={{base: -75, sm: -200}}
            src="/logo.png"
            style={{filter: "drop-shadow(2px 4px 6px black)"}}
            width={{base: 100, sm: 200}}
          />
          <Component {...pageProps} />
        </Stack>
        <Stack backgroundColor="#311C0F" color="white" paddingX={12} paddingY={4}>
          <Text>2020 FrontEndCafe</Text>
        </Stack>
      </Stack>
    </ChakraProvider>
  );
}

export default FecCalendar;
