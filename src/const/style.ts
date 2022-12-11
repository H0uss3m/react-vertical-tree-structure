const canvasStyle = {
  width: "100%",
  height: "50vh",
  background: "white",
  // overflow: 'auto',
  display: "flex",
  color: "black"
} as const;

export const _canvasStyle = {
  ...canvasStyle,
  position: "relative",
  height: 300
} as const;
// box Style
export const boxStyle = {
  border: "1px #999 solid",
  borderRadius: "10px",
  padding: "10px",
  width: "200px",
  // height: "30px",
  color: "black",
  // alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
} as const;
