import { Typography } from "@mui/material";
import "@fontsource/roboto/700.css";

export default function Title() {
  return (
    <Typography variant="h1" component="div" mt={"40px"} gutterBottom>
      {/* variant => h1 크기로 */}
      {/* component => 속성은 div 태그로 */}
      {/* mt(margin-top) => margin-top을 40px 크기로 */}
      Material UI Intro
    </Typography>
  );
}
