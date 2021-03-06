// Generated via http://jmmk.github.io/javascript-externs-generator/

// Loaded JavaScripts:
// https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react-dom.js
// https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react-with-addons.js
// https://cdnjs.cloudflare.com/ajax/libs/react-virtualized/9.11.1/react-virtualized.js

// Reference JavaScript object: ReactVirtualized
/**********************************************************************
 * Extern for ReactVirtualized
 * Generated by http://jmmk.github.io/javascript-externs-generator
 **********************************************************************/
var ReactVirtualized = {
  "ArrowKeyStepper": {
    "defaultProps": {
      "disabled": {},
      "isControlled": {},
      "mode": {},
      "scrollToColumn": {},
      "scrollToRow": {}, 
      "setScrollIndexes": function () {}
    }
  },
  "AutoSizer": {
    "defaultProps": {
      "disableHeight": {},
      "disableWidth": {},
      "onResize": function () {}
    }
  },
  "CellMeasurer": {
    "__internalCellMeasurerFlag": {}
  },
  "CellMeasurerCache": function () {},
  "Collection": {
    "defaultProps": {
      "aria-label": {},
      "cellGroupRenderer": function () {}
    },
    "propTypes": {
      "aria-label": {
        "isRequired": function () {}
      },
      "cellCount": function () {},
      "cellGroupRenderer": function () {},
      "cellRenderer": function () {},
      "cellSizeAndPositionGetter": function () {},
      "sectionSize": {
        "isRequired": function () {}
      }
    }
  },
  "Column": {
    "defaultProps": {
      "cellDataGetter": function () {},
      "cellRenderer": function () {},
      "defaultSortDirection": {},
      "flexGrow": {},
      "flexShrink": {},
      "headerRenderer": function () {},
      "style": {}
    },
    "propTypes": {
      "aria-label": {
        "isRequired": function () {}
      },
      "cellDataGetter": {
        "isRequired": function () {}
      },
      "cellRenderer": {
        "isRequired": function () {}
      },
      "className": {
        "isRequired": function () {}
      },
      "columnData": {
        "isRequired": function () {}
      },
      "dataKey": function () {},
      "defaultSortDirection": {
        "isRequired": function () {}
      },
      "disableSort": {
        "isRequired": function () {}
      },
      "flexGrow": {
        "isRequired": function () {}
      },
      "flexShrink": {
        "isRequired": function () {}
      },
      "headerClassName": {
        "isRequired": function () {}
      },
      "headerRenderer": function () {},
      "id": {
        "isRequired": function () {}
      },
      "label": {
        "isRequired": function () {}
      },
      "maxWidth": {
        "isRequired": function () {}
      },
      "minWidth": {
        "isRequired": function () {}
      },
      "style": {
        "isRequired": function () {}
      },
      "width": function () {}
    }
  },
  "ColumnSizer": {
    "propTypes": {
      "children": function () {},
      "columnCount": function () {},
      "columnMaxWidth": {
        "isRequired": function () {}
      },
      "columnMinWidth": {
        "isRequired": function () {}
      },
      "width": function () {}
    }
  },
  "Grid": {
    "defaultProps": {
      "aria-label": {},
      "aria-readonly": {},
      "autoContainerWidth": {},
      "autoHeight": {},
      "autoWidth": {},
      "cellRangeRenderer": function () {},
      "containerRole": {},
      "containerStyle": {},
      "estimatedColumnSize": {},
      "estimatedRowSize": {},
      "getScrollbarSize": function () {},
      "noContentRenderer": function () {},
      "onScroll": function () {},
      "onScrollbarPresenceChange": function () {},
      "onSectionRendered": function () {},
      "overscanColumnCount": {},
      "overscanIndicesGetter": function () {},
      "overscanRowCount": {},
      "role": {},
      "scrollToAlignment": {},
      "scrollToColumn": {},
      "scrollToRow": {},
      "scrollingResetTimeInterval": {},
      "style": {},
      "tabIndex": {}
    }
  },
  "InfiniteLoader": {
    "defaultProps": {
      "minimumBatchSize": {},
      "rowCount": {},
      "threshold": {}
    },
    "propTypes": {
      "children": function () {},
      "isRowLoaded": function () {},
      "loadMoreRows": function () {},
      "minimumBatchSize": function () {},
      "rowCount": function () {},
      "threshold": function () {}
    }
  },
  "List": {
    "defaultProps": {
      "autoHeight": {},
      "estimatedRowSize": {},
      "noRowsRenderer": function () {},
      "onRowsRendered": function () {},
      "onScroll": function () {},
      "overscanIndicesGetter": function () {},
      "overscanRowCount": {},
      "scrollToAlignment": {},
      "scrollToIndex": {},
      "style": {}
    }
  },
  "Masonry": {
    "defaultProps": {
      "autoHeight": {},
      "keyMapper": function () {},
      "onCellsRendered": function () {},
      "onScroll": function () {},
      "overscanByPixels": {},
      "role": {},
      "scrollingResetTimeInterval": {},
      "style": {},
      "tabIndex": {}
    }
  },
  "MultiGrid": {
    "defaultProps": {
      "classNameBottomLeftGrid": {},
      "classNameBottomRightGrid": {},
      "classNameTopLeftGrid": {},
      "classNameTopRightGrid": {},
      "enableFixedColumnScroll": {},
      "enableFixedRowScroll": {},
      "fixedColumnCount": {},
      "fixedRowCount": {},
      "scrollToColumn": {},
      "scrollToRow": {},
      "style": {},
      "styleBottomLeftGrid": {},
      "styleBottomRightGrid": {},
      "styleTopLeftGrid": {},
      "styleTopRightGrid": {}
    },
    "propTypes": {
      "classNameBottomLeftGrid": function () {},
      "classNameBottomRightGrid": function () {},
      "classNameTopLeftGrid": function () {},
      "classNameTopRightGrid": function () {},
      "enableFixedColumnScroll": function () {},
      "enableFixedRowScroll": function () {},
      "fixedColumnCount": function () {},
      "fixedRowCount": function () {},
      "style": function () {},
      "styleBottomLeftGrid": function () {},
      "styleBottomRightGrid": function () {},
      "styleTopLeftGrid": function () {},
      "styleTopRightGrid": function () {}
    }
  },
  "ScrollSync": {
    "propTypes": {
      "children": function () {}
    }
  },
  "SortDirection": {
    "ASC": {},
    "DESC": {}
  },
  "SortIndicator": {
    "propTypes": {
      "sortDirection": {
        "isRequired": function () {}
      }
    }
  },
  "Table": {
    "defaultProps": {
      "disableHeader": {},
      "estimatedRowSize": {},
      "headerHeight": {},
      "headerRowRenderer": function () {},
      "headerStyle": {},
      "noRowsRenderer": function () {},
      "onRowsRendered": function () {},
      "onScroll": function () {},
      "overscanIndicesGetter": function () {},
      "overscanRowCount": {},
      "rowRenderer": function () {},
      "rowStyle": {},
      "scrollToAlignment": {},
      "scrollToIndex": {},
      "style": {}
    },
    "propTypes": {
      "aria-label": {
        "isRequired": function () {}
      },
      "autoHeight": {
        "isRequired": function () {}
      },
      "children": function () {},
      "className": {
        "isRequired": function () {}
      },
      "disableHeader": {
        "isRequired": function () {}
      },
      "estimatedRowSize": function () {},
      "gridClassName": {
        "isRequired": function () {}
      },
      "gridStyle": {
        "isRequired": function () {}
      },
      "headerClassName": {
        "isRequired": function () {}
      },
      "headerHeight": function () {},
      "headerRowRenderer": {
        "isRequired": function () {}
      },
      "headerStyle": {
        "isRequired": function () {}
      },
      "height": function () {},
      "id": {
        "isRequired": function () {}
      },
      "noRowsRenderer": {
        "isRequired": function () {}
      },
      "onHeaderClick": {
        "isRequired": function () {}
      },
      "onRowClick": {
        "isRequired": function () {}
      },
      "onRowDoubleClick": {
        "isRequired": function () {}
      },
      "onRowMouseOut": {
        "isRequired": function () {}
      },
      "onRowMouseOver": {
        "isRequired": function () {}
      },
      "onRowRightClick": {
        "isRequired": function () {}
      },
      "onRowsRendered": {
        "isRequired": function () {}
      },
      "onScroll": function () {},
      "overscanIndicesGetter": function () {},
      "overscanRowCount": function () {},
      "rowClassName": {
        "isRequired": function () {}
      },
      "rowCount": function () {},
      "rowGetter": function () {},
      "rowHeight": function () {},
      "rowRenderer": {
        "isRequired": function () {}
      },
      "rowStyle": function () {},
      "scrollToAlignment": function () {},
      "scrollToIndex": function () {},
      "scrollTop": {
        "isRequired": function () {}
      },
      "sort": {
        "isRequired": function () {}
      },
      "sortBy": {
        "isRequired": function () {}
      },
      "sortDirection": {
        "isRequired": function () {}
      },
      "style": {
        "isRequired": function () {}
      },
      "tabIndex": {
        "isRequired": function () {}
      },
      "width": function () {}
    }
  },
  "WindowScroller": {
    "defaultProps": {
      "onResize": function () {},
      "onScroll": function () {},
      "scrollingResetTimeInterval": {}
    },
    "propTypes": {
      "children": function () {},
      "onResize": function () {},
      "onScroll": function () {},
      "scrollElement": {
        "isRequired": function () {}
      },
      "scrollingResetTimeInterval": function () {}
    }
  },
  "accessibilityOverscanIndicesGetter": function () {},
  "createMasonryCellPositioner": function () {},
  "defaultCellRangeRenderer": function () {},
  "defaultOverscanIndicesGetter": function () {},
  "defaultTableCellDataGetter": function () {},
  "defaultTableCellRenderer": function () {},
  "defaultTableHeaderRenderer": function () {},
  "defaultTableHeaderRowRenderer": function () {},
  "defaultTableRowRenderer": function () {}
};
ReactVirtualized.ArrowKeyStepper.prototype = {
  "forceUpdate": function () {},
  "isPureReactComponent": function () {},
  "isReactComponent": function () {},
  "setState": function () {}
};
ReactVirtualized.AutoSizer.prototype = {
  "forceUpdate": function () {},
  "isPureReactComponent": function () {},
  "isReactComponent": function () {},
  "setState": function () {}
};
ReactVirtualized.CellMeasurer.prototype = {
  "forceUpdate": function () {},
  "isPureReactComponent": function () {},
  "isReactComponent": function () {},
  "setState": function () {}
};
ReactVirtualized.Collection.prototype = {
  "isPureReactComponent": function () {},
  "isReactComponent": function () {},
  "setState": function () {}
};
ReactVirtualized.Column.prototype = {
  "forceUpdate": function () {},
  "isReactComponent": function () {},
  "setState": function () {}
};
ReactVirtualized.ColumnSizer.prototype = {
  "forceUpdate": function () {},
  "isPureReactComponent": function () {},
  "isReactComponent": function () {},
  "setState": function () {}
};
ReactVirtualized.Grid.prototype = {
  "forceUpdate": function () {},
  "isPureReactComponent": function () {},
  "isReactComponent": function () {},
  "setState": function () {}
};
ReactVirtualized.InfiniteLoader.prototype = {
  "forceUpdate": function () {},
  "isPureReactComponent": function () {},
  "isReactComponent": function () {},
  "setState": function () {}
};
ReactVirtualized.List.prototype = {
  "forceUpdate": function () {},
  "isPureReactComponent": function () {},
  "isReactComponent": function () {},
  "setState": function () {}
};
ReactVirtualized.Masonry.prototype = {
  "forceUpdate": function () {},
  "isPureReactComponent": function () {},
  "isReactComponent": function () {},
  "setState": function () {}
};
ReactVirtualized.MultiGrid.prototype = {
  "forceUpdate": function () {},
  "isPureReactComponent": function () {},
  "isReactComponent": function () {},
  "setState": function () {}
};
ReactVirtualized.ScrollSync.prototype = {
  "forceUpdate": function () {},
  "isPureReactComponent": function () {},
  "isReactComponent": function () {},
  "setState": function () {}
};
ReactVirtualized.Table.prototype = {
  "forceUpdate": function () {},
  "isPureReactComponent": function () {},
  "isReactComponent": function () {},
  "setState": function () {}
};
ReactVirtualized.WindowScroller.prototype = {
  "forceUpdate": function () {},
  "isPureReactComponent": function () {},
  "isReactComponent": function () {},
  "setState": function () {}
};
/**********************************************************************
 * End Generated Extern for ReactVirtualized
/**********************************************************************/