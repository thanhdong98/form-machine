import { FC, ReactNode, useState } from "react";
import { Button } from "react-bootstrap";
import { ControlType } from "../../shared/types";

const AddControlButton: FC<{ onAdd: (controlType: ControlType) => void; children: ReactNode }> = ({
  onAdd,
  children
}) => {
  const [showControls, toggleShowControl] = useState(false);

  return (
    <Button
      as="div"
      variant="success"
      className="w-100 position-relative"
      onClick={() => toggleShowControl(true)}
      onMouseLeave={() => toggleShowControl(false)}
    >
      {showControls && (
        <div
          className="position-absolute d-flex flex-wrap justify-content-start overflow-hidden bg-white"
          style={{
            zIndex: 2,
            top: "calc(100% + 1px)",
            right: 0,
            width: "auto",
            transition: "height 0.25s ease-in-out",
            height: 100
          }}
        >
          {Object.values(ControlType).map((control: ControlType) => (
            <Button
              onClick={() => onAdd(control)}
              className="h-50 w-25"
              variant="outline-primary"
              key={`action-${control}`}
            >
              {control}
            </Button>
          ))}
        </div>
      )}
      {children}
    </Button>
  );
};

export default AddControlButton;
