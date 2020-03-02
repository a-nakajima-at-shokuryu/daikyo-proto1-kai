import React from 'react';
import MuiDataTable from 'mui-datatables'; 
import uriageMeisaiColumns from './uriageMeisaiColumns';
import uriageMeisaiDataSource from './uriageMeisaiDataSource';

const UriageMeisai = ({
  
}) => {
  return (
    <MuiDataTable
      columns={uriageMeisaiColumns}
      data={uriageMeisaiDataSource}
    />
  )
}

export default UriageMeisai

