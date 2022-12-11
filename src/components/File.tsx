import Xarrow from "react-xarrows";
import { FileNode } from "../data";
import { calculOffsset } from "../utils";
import DraggableBox from "./DraggableBox";

const File = ({ node }: FileNode) => {
  const { name, children } = node;

  return (
    <div>
      <DraggableBox id={name} initialOffset={calculOffsset(node)} />
      {(children ?? []).map((node: FileNode) => (
        <>
          <Xarrow
            start={name}
            end={node.name}
            path="grid"
            startAnchor="right"
            endAnchor="left"
            gridBreak="10%"
            headShape={{
              svgElem: <></>,
              offsetForward: 1
            }}
            color="#E6E8EC"
            strokeWidth={1}
          />
        </>
      ))}
      <div>
        {(children ?? []).map((node: FileNode, index) => {
          return <File node={node} index={index} />;
        })}
      </div>
    </div>
  );
};
export default File;
