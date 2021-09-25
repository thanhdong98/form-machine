import { FC } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useBreakpoint } from "../../shared/hooks";
import { DownArrow, Plus, Trash, UpArrow } from "../../shared/icons";
import { ControlType } from "../../shared/types";
import Tooltip from "../Tooltip";

const ActionPopover: FC<{
  show?: "actions" | "controls";
  showControls: () => void;
  onAdd: (element: ControlType) => void;
  onDelete: () => void;
  onMove: (isUp?: boolean) => void;
}> = ({ show, showControls, onAdd, onDelete, onMove }) => {
  const breakpoint = useBreakpoint();

  const rows: Record<string, number> = {
    sm: 6,
    md: 3,
    lg: 2
  };

  return (
    <div
      className="position-absolute d-flex flex-wrap justify-content-start overflow-hidden bg-white controls-popover"
      style={{
        height: show ? (show === "controls" ? rows[breakpoint] * 40 : 50) : 0
      }}
    >
      {show === "controls" ? (
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
            <Button variant="success" className="h-100" onClick={showControls}>
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
