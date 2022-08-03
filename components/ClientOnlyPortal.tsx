import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface ClientOnlyPortalProps {
  children: ReactNode;
}

function ClientOnlyPortal({ children }: ClientOnlyPortalProps) {
  return document ? createPortal(children, document.body) : null;
}

export default ClientOnlyPortal;
