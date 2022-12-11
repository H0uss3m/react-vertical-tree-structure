import { useEffect, useState } from "react";
import { Xwrapper } from "react-xarrows";
import { _canvasStyle } from "./const/style";
import { root } from "./data";
import { numberOfChildren } from "./utils";
import File from "./components/File";

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    numberOfChildren(root, 0, "Company", 1);
    setData(root);
  }, []);

  return (
    <div>
      <div style={_canvasStyle} id="canvas">
        <Xwrapper>
          <div>
            <File index={0} node={data} />
          </div>
        </Xwrapper>
      </div>
    </div>
  );
};
export default App;
