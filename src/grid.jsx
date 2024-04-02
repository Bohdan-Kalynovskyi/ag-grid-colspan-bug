import React, {useRef, useState} from 'react';
import {AgGridReact} from '@ag-grid-community/react';
import {ModuleRegistry,} from '@ag-grid-community/core';
import {InfiniteRowModelModule} from '@ag-grid-community/infinite-row-model';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';

import {getGridRows} from './generate-data';

let isModuleRegistered = false;

export const Grid = () => {
  // Note, that in case of re-rendering, Ag-Grid always scrolls to the top, which is undesirable
  const expandStateRef = useRef(true);
  const gridApiRef = useRef();

  if (!isModuleRegistered) {
    ModuleRegistry.registerModules([InfiniteRowModelModule]);
    isModuleRegistered = true;
  }

  const toggleExpandState = () => {
    expandStateRef.current = !expandStateRef.current;
    gridApiRef.current?.refreshInfiniteCache(); // rely on this instead of re-render
  }

  const onGridReady = (grid) => {
    gridApiRef.current = grid.api
  }

  const datasource = {
    getRows: getGridRows(expandStateRef),
  };

  const columnDefs = [
    {
      colSpan: ({data}) => (data?.isGroupHeader ? 2 : 1),
      headerName: 'Id',
      field: 'id',
    },
    {
      headerName: 'Name',
      field: 'text',
    },
  ];

  const rowStyle = ({data}) => (data?.isGroupHeader ? {backgroundColor: '#ddd'} : undefined)

  return (
    <>
      <button onClick={toggleExpandState}>toggle expand / collapse</button>
      <br/><br/>

      <div
        className="ag-theme-alpine"
        style={{width: 500, height: 300}}>
        <AgGridReact
          columnDefs={columnDefs}
          onGridReady={onGridReady}
          rowModelType="infinite"
          datasource={datasource}
          maxBlocksInCache={4}
          getRowStyle={rowStyle}
          maxConcurrentDatasourceRequests={1}
          cacheBlockSize={10}
        /></div>
    </>
  );
};
