/** @jsxImportSource theme-ui */
import { ThemeProvider } from "theme-ui";
import { theme } from "./theme";
import { Typography } from "antd";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography.Title
          style={{
            backgroundColor: "#000000",
            color: "#FFFFFF",
            padding: "0.5rem",
          }}
        >
          始まるぞ
        </Typography.Title>
      </div>
    </ThemeProvider>
  );
}

export default App;
