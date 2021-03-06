import React from 'react';
import { Input } from 'antd';
import timeFormatter from '../../utils/timeFormatter';

const { TextArea } = Input;

export default {
  id: {
    label: 'ID',
  },
  sku: {
    label: 'SKU',
    inTable: true,
    width: 100,
    inDetails: true,
    rules: [
      {
        required: true,
        message: 'Please enter a SKU with numbers or letters',
        pattern: /^[A-Za-z0-9]+$/
      },
    ],
  },
  upc: {
    label: 'UPC',
    inTable: true,
    inDetails: true,
    rules: [
      {
        message: 'Please enter a UPC with numbers or letters',
        pattern: /^[A-Za-z0-9]+$/
      },
    ],
  },
  name: {
    label: 'Name',
    inTable: true,
    width: 200,
    inDetails: true,
    rules: [
      {
        required: true,
        message: 'Please enter a valid name',
        pattern: /^[\w ]*[^\W_][\w ]*$/,
      },
    ],
  },
  description: {
    label: 'Description',
    component: (
      <TextArea
        showCount
        maxLength={255}
        allowClear
        autoSize={{ minRows: 3 }}
      />
    ),
    inDetails: true,
  },
  active: {
    label: 'Active',
    inDetails: true,
  },
  category: {
    label: 'Category',
    inTable: true,
    inDetails: true,
    rules: [
      {
        message: 'Please enter a valid category',
        pattern: /^[\w ]*[^\W_][\w ]*$/,
      }
    ]
  },
  brand: {
    label: 'Brand',
    inTable: true,
    inDetails: true,
  },
  manufacturer: {
    label: 'Manufacturer',
    inTable: true,
    inDetails: true,
  },
  sellingPrice: {
    label: 'Selling Price',
    inTable: true,
    width: 60,
    inDetails: true,
    rules: [
      {
        required: true,
        message: 'Please enter a number',
        pattern: /^[+-]?(0|([1-9]\d*))(\.\d+)?$/,
      },
    ],
  },
  costPrice: {
    label: 'Cost Price',
    inTable: true,
    width: 60,
    inDetails: true,
    rules: [
      {
        required: true,
        message: 'Please enter a number',
        pattern: /^[+-]?(0|([1-9]\d*))(\.\d+)?$/,
      },
    ],
  },
  length: {
    label: 'Length',
  },
  width: {
    label: 'Width',
  },
  height: {
    label: 'Height',
  },
  weight: {
    label: 'Weight',
    inDetails: true,
  },
  unit: {
    label: 'Unit',
    inDetails: true,
  },
  unitsPerCarton: {
    label: 'Units Per Carton',
    inDetails: true,
  },
  unitsPerPallet: {
    label: 'Units Per Pallet',
    inDetails: true,
  },
  createdTime: {
    label: 'Created Time',
    inDetails: true,
    formatter: timeFormatter.dateTime,
  },
  lastModifiedTime: {
    label: 'Last Modified Time',
    inTable: true,
    inDetails: true,
    formatter: timeFormatter.dateTime,
  },
  physicalStock: {
    title: 'Physical Stock',
    label: 'Opening Stock',
    inTable: true,
    width: 60,
    rules: [
      {
        required: true,
        message: 'Please enter a number as opening stock',
        pattern: /^[0-9]+$/,
      },
    ],
  },
  lockedStock: {
    label: 'Locked Stock',
  },
  arrivingQuantity: {
    label: 'Arriving Quantity',
  },
};