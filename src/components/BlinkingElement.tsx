import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

// Styled component for the red circle
const RedCircle = styled("div")({
  width: "16px",
  height: "16px",
  borderRadius: "50%",
  backgroundColor: "red",
  marginRight: "8px",
});

// Styled component for the container with the blinking animation
const BlinkingBox = styled(Box)(({ theme }) => ({
  justifyContent: "center",
  marginTop: theme.spacing(1),
  display: "flex",
  alignItems: "center",
  width: "100%",
  animation: "blink 3s infinite", // Set to blink every 5 seconds infinitely
  "@keyframes blink": {
    "0%": { opacity: 1 },
    "50%": { opacity: 0.5 },
    "100%": { opacity: 1 },
  },
}));

const BlinkingElement: React.FC = () => {
  return (
    <BlinkingBox>
      <RedCircle />
      <Typography
        variant="h6"
        sx={{
          color: "white",
          userSelect: "none",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        AI 生成中
      </Typography>
    </BlinkingBox>
  );
};

export default BlinkingElement;