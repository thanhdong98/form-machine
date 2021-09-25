import { FC, ReactNode, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useBreakpoint } from "../../shared/hooks";
import { ControlType } from "../../shared/types";

const AddControlButton: FC<{ onAdd: (controlType: ControlType) => void; children: ReactNode }> = ({
  onAdd,
  children
}) => {
  const [showControls, toggleShowControl] = useState(false);
  const breakpoint = useBreakpoint();

  const rows: Record<string, number> = {
    sm: 6,
    md: 3,
    lg: 2
  };

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
          className="position-absolute d-flex flex-wrap justify-content-start overflow-hidden bg-white controls-popover"
          style={{
            height: rows[breakpoint] * 40
          }}
        >
          <Row className="m-0">
            {Object.values(ControlType).map((control: ControlType) => (
              <Col
                key={`action-${control}`}
                className="p-0"
                md={6}
                lg={4}
                style={{ height: `${100 / rows[breakpoint]}` }}
              >
                <Button onClick={() => onAdd(control)} className="w-100 h-100 btn-item-control" variant="outline-primary">
                  {control}
                </Button>
              </Col>
            ))}
          </Row>
        </div>
      )}
      {children}
    </Button>
  );
};

export default AddControlButton;
