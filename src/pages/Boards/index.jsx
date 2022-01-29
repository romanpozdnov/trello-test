import React, { useMemo } from "react";

import GridWrapper from "../../components/GridWrapper";
import { WIDTHS } from "../../constants/layout";

import BoardCard from "./components/BoardCard";

const Boards = () => {
  const boardsList = useMemo(
    () => [
      { id: 0, Component: () => <BoardCard title="asasdasdasdd" /> },
      { id: 1, Component: () => <BoardCard title="asasdasdasdd" /> },
      { id: 2, Component: () => <BoardCard title="asasdasdasdd" /> },
      { id: 3, Component: () => <BoardCard title="asasdasdasdd" /> },
      { id: 4, Component: () => <BoardCard title="asasdasdasdd" /> },
      { id: 5, Component: () => <BoardCard title="asasdasdasdd" /> },
      { id: 6, Component: () => <BoardCard title="asasdasdasdd" /> },
      { id: 7, Component: () => <BoardCard title="asasdasdasdd" /> },
    ],
    []
  );

  return (
    <GridWrapper
      items={boardsList}
      gridItemWidths={{
        [WIDTHS.xs]: 12,
        [WIDTHS.sm]: 6,
        [WIDTHS.md]: 4,
        [WIDTHS.lg]: 4,
        [WIDTHS.xl]: 4,
      }}
    />
  );
};

export default Boards;
