import { GlobalStyles } from "./global";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import Router from "./Router";
import { useRecoilValue } from "recoil";
import { themeAtom } from "./recoil/themeAtom";

export default function App() {
  const currentTheme = useRecoilValue(themeAtom);
  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}
