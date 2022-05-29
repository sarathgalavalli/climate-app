import React from "react";
import "./Widget.css";

interface WidgetProps {
  header?: string;
  children: React.ReactNode;
}

export const Widget = (props: WidgetProps) => {
 const {header, children} = props;
  return (
    <div className="widget">
      {header && (
        <div className="widget-header">
          <h4>{header}</h4>
        </div>
      )}
      <div className="widget-content">
        <div className="content">
        {children}
        </div>
      </div>
    </div>
  );
};