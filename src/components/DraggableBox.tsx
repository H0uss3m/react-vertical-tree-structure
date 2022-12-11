import { boxStyle } from "../const/style";

export const DraggableBox = ({
  initialOffset = undefined,
  id = undefined,
  ...style
}) => {
  // console.log("render dragable");
  let moreStyle = {};
  if (initialOffset)
    moreStyle = {
      position: "absolute",
      left: initialOffset.x,
      top: initialOffset.y
    };
  // console.log("initialOffsett", initialOffset);
  return (
    <div id={id} style={{ ...boxStyle, ...style, ...moreStyle }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>{id}</span>
        <button style={{ border: "none" }}>...</button>
      </div>
      <div>
        <h4>User Name</h4>
      </div>
    </div>
  );
};
export default DraggableBox;
