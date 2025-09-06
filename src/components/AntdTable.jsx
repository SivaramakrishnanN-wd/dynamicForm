import React, { useRef } from "react";
import { Table } from "antd";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const type = "DraggableBodyRow";

// Draggable row component
const DraggableBodyRow = ({ index, moveRow, className, style, dragEnabled, ...restProps }) => {
  const ref = useRef();

  // Drop logic
  const [, drop] = useDrop({
    accept: type,
    hover(item) {
      if (!dragEnabled) return;
      if (item.index === index) return;
      moveRow(item.index, index);
      item.index = index;
    },
  });

  // Drag logic
  const [{ isDragging }, drag] = useDrag({
    type,
    item: { index },
    canDrag: dragEnabled, // ✅ only draggable if enabled
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  if (dragEnabled) drag(drop(ref));

  return (
    <tr
      ref={dragEnabled ? ref : null}
      className={className}
      style={{
        cursor: dragEnabled ? "move" : "default",
        opacity: dragEnabled && isDragging ? 0.5 : 1,
        ...style,
      }}
      {...restProps}
    />
  );
};

// Main wrapper
const AntdTable = ({
  columns = [],
  dataSource = [],
  setDataSource, // parent passes setter for reordering
  rowKey = (record, index) => index,
  enableDrag = false, // 👈 boolean flag
  pagination = false,
  bordered = true,
  loading = false,
  size = "middle",
  scroll,
  title,
  footer,
  expandable,
  rowSelection,
  onRow,
  className,
  style = { marginTop: "20px" },
  locale = { emptyText: "No data available" },
  ...rest
}) => {
  const moveRow = (dragIndex, hoverIndex) => {
    if (!enableDrag) return;
    const dragRow = dataSource[dragIndex];
    const newData = [...dataSource];
    newData.splice(dragIndex, 1);
    newData.splice(hoverIndex, 0, dragRow);
    setDataSource(newData);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Table
        columns={columns}
        dataSource={dataSource}
        rowKey={rowKey}
        pagination={pagination}
        bordered={bordered}
        loading={loading}
        size={size}
        scroll={scroll}
        title={title}
        footer={footer}
        expandable={expandable}
        rowSelection={rowSelection}
        onRow={(record, index) => ({
          index,
          moveRow,
          dragEnabled: enableDrag, // ✅ pass down
          ...(onRow ? onRow(record, index) : {}),
        })}
        className={className}
        style={style}
        locale={locale}
        components={
          enableDrag
            ? {
                body: {
                  row: (props) => <DraggableBodyRow {...props} dragEnabled={enableDrag} />,
                },
              }
            : undefined // plain table if not draggable
        }
        {...rest}
      />
    </DndProvider>
  );
};

export default AntdTable;
