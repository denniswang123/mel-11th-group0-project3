import React from 'react';
import Page from '../../components/Page';
import NewSalesOrderModal from './components/NewSalesOrderModal';
import ROUTES from '../../Routes';
import salesOrders from '../../apis/salesOrders';
import getColumns from '../../utils/getColumns';
import FIELDS from './fields';
import OrderDetailModal from './components/OrderDetailModal';

const columns = getColumns(FIELDS);

const SalesOrders = () => {
  return (
    <Page
      headerProps={{
        title: ROUTES.salesorders.title,
        hasNewButton: true,
        hasSearchBar: true,
      }}
      searchBarProps={{
        placeholder: 'Search by order number',
      }}
      tableProps={{
        columns: columns,
        rowKey: 'id',
      }}
      NewModal={NewSalesOrderModal}
      DetailsModal={OrderDetailModal}
      api={salesOrders}
      FIELDS={FIELDS}
    />
  );
};

export default SalesOrders;