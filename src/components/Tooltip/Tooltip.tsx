import { FC, ReactElement } from "react";
import { OverlayTrigger, Tooltip as BootstrapTooltip } from "react-bootstrap";
import { Placement } from "react-bootstrap/esm/types";

const Tooltip: FC<{ children: ReactElement; placement?: Placement; text: string }> = ({
  children,
  placement = "top",
  text
}) => {
  return (
    <OverlayTrigger
      placement={placement}
      delay={{ show: 500, hide: 500 }}
      overlay={<BootstrapTooltip>{text}</BootstrapTooltip>}
    >
      {children}
    </OverlayTrigger>
  );
};

export default Tooltip;
