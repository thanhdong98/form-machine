import { FC, useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import useBreakpoint from "../../shared/hooks/useBreakpoint";
import { DownArrow, Plus, Trash, UpArrow } from "../../shared/icons";
import { ControlType } from "../../shared/types/FormControlType";
import Tooltip from "../Tooltip";

const ActionPopover: FC<{
  show: boolean;
  onAdd: (element: ControlType) => void;
  onDelete: () => void;
  onMove: (isUp?: boolean) => void;
}> = ({ show = false, onAdd, onDelete, onMove }) => {
  const [showAdd, toggleShowAdd] = useState(false);
  const breakpoint = useBreakpoint();

  useEffect(() => {
    if (!show) {
      toggleShowAdd(false);
    }
  }, [show]);

  const rows: Record<string, number> = {
    sm: 6,
    md: 3,
    lg: 2
  };

  return (
    <div
      className="position-absolute d-flex flex-wrap justify-content-start overflow-hidden bg-white"
      style={{
        zIndex: 2,
        bottom: "calc(100% + 1px)",
        right: 0,
        width: "auto",
        transition: "height 0.25s ease-in-out",
        height: show ? (showAdd ? rows[breakpoint] * 40 : 50) : 0
      }}
    >
      {showAdd ? (
        <Row className="m-0">
          {Object.values(ControlType).map((control: ControlType) => (
            <Col
              key={`action-${control}`}
              className="p-0"
              md={6}
              lg={4}
              style={{ height: `${100 / rows[breakpoint]}` }}
            >
              <Button onClick={() => onAdd(control)} className="w-100 h-100" variant="outline-primary">
                {control}
              </Button>
            </Col>
          ))}
        </Row>
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
