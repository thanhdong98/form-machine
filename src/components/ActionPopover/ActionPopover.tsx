import Tooltip from "components/Tooltip";
import { FC, useState } from "react";
import { Button } from "react-bootstrap";
import { DownArrow, Plus, Trash, UpArrow } from "shared/icons";
import { ControlType } from "shared/types/FormControlType";

const ActionPopover: FC<{
  show: boolean;
  onAdd: (element: ControlType) => void;
  onDelete: () => void;
  onMove: (isUp?: boolean) => void;
}> = ({ show = false, onAdd, onDelete, onMove }) => {
  const [showAdd, toggleShowAdd] = useState(false);

  return (
    <div
      onMouseLeave={() => toggleShowAdd(false)}
      className="position-absolute d-flex flex-wrap justify-content-start overflow-hidden bg-white"
      style={{
        zIndex: 999,
        bottom: "calc(100% + 1px)",
        right: 0,
        width: "auto",
        transition: "height 0.25s ease-in-out",
        height: show ? (showAdd ? 100 : 50) : 0
      }}
    >
      {showAdd ? (
        <>
          {Object.values(ControlType).map((control: ControlType) => (
            <Button onClick={() => onAdd(control)} className="h-50 w-25" variant="outline-primary" key={`action-${control}`}>
              {control}
            </Button>
          ))}
        </>
      ) : (
        <>
          <Tooltip text="Add item">
            <Button variant="success" className="h-100" onClick={() => toggleShowAdd(true)}>
              <Plus height={25} />
            </Button>
          </Tooltip>
          <Tooltip text="Move up">
            <Button variant="outline-info" className="h-100" onClick={() => onMove(true)}>
              <UpArrow height={25} />
            </Button>
          </Tooltip>
          <Tooltip text="Move down">
            <Button variant="outline-info" className="h-100" onClick={() => onMove()}>
              <DownArrow height={25} />
            </Button>
          </Tooltip>
          <Tooltip text="Delete item">
            <Button variant="danger" className="h-100" onClick={onDelete}>
              <Trash height={25} />
            </Button>
          </Tooltip>
        </>
      )}
    </div>
  );
};

export default ActionPopover;
