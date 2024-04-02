const rawData = [
  {
    id: '__group_0',
    isGroupHeader: true,
    text: 'Pigeon',
  },
  {
    id: '0',
    text: 'asasa s as as as as',
  },
  {
    id: '1',
    text: 'asdsdgjhsdfgkdj sfgkjdfgdkjfgdkfgfd sd fs',
  },
  {
    id: '2',
    text: 'sdsd as asd asd ashgsjdsdn fsd fsd gsdf ssd sd sdsdsdsd',
  },
  {
    id: '__group_1',
    isGroupHeader: true,
    text: 'Texas',
  },
  {
    id: '10',
    text: 'asasa s as as as as',
  },
  {
    id: '11',
    text: 'asdsdgjhsdfgkdj sfgkjdfgdkjfgdkfgfd sd fs',
  },
  {
    id: '12',
    text: 'sdsd as asd asd ashgsjdsdn fsd fsd gsdf ssd sd sdsdsdsd',
  },
  {
    id: '__group_2',
    isGroupHeader: true,
    text: 'Lion',
  },
  {
    id: '20',
    text: 'assda fsfd ghj tyu trt hdf g dfg',
  },
  {
    id: '21',
    text: 'sdgf fgj y fgd f dv sdf sd csdf asfas das',
  },
  {
    id: '__group_3',
    isGroupHeader: true,
    text: 'BaZ',
  },
  {
    id: '30',
    text: 'sd sd sd sdsdfsdgdsfgdfgdfgdf gdf gdfgdfg',
  },
  {
    id: '31',
    text: 'ssdfs df sd fs dfd sd sd sdsdfsdgdsfgdfgdfgdf gdf gdfgdfg',
  },
  {
    id: '32',
    text: 'ss#dfs df sd 234 234 2 3dsfgdfgdfgdf gdf gdfgdfg',
  },
  {
    id: '__group_4',
    isGroupHeader: true,
    text: 'Apple',
  },
  {
    id: '40',
    text: '4 sd sd sd sdsdfsdgdsfgdfgdfgdf gdf gdfgdfg',
  },
  {
    id: '41',
    text: 'ssdfs df sd fs dfd sd sd sdsdfsdgdsfgdfgdfgdf gdf gdfgdfg',
  },
  {
    id: '42',
    text: 'ss#dfs df sd 234 234 2 3dsfgdfgdfgdf gdf gdfgdfg',
  },
  {
    id: '__group_5',
    isGroupHeader: true,
    text: 'Banana',
  },
  {
    id: '50',
    text: '5 sd sd sd sdsdfsdgdsfgdfgdfgdf gdf gdfgdfg',
  },
  {
    id: '51',
    text: 'ssdfs df sd fs dfd sd sd sdsdfsdgdsfgdfgdfgdf gdf gdfgdfg',
  },
  {
    id: '52',
    text: 'ss#dfs df sd 234 234 2 3dsfgdfgdfgdf gdf gdfgdfg',
  },
  {
    id: '__group_6',
    isGroupHeader: true,
    text: 'Juice',
  },
  {
    id: '60',
    text: '5 sd sd sd sdsdfsdgdsfgdfgdfgdf gdf gdfgdfg',
  },
  {
    id: '61',
    text: 'ssdfs df sd fs dfd sd sd sdsdfsdgdsfgdfgdfgdf gdf gdfgdfg',
  },
  {
    id: '62',
    text: 'ss#dfs df sd 234 234 2 3dsfgdfgdfgdf gdf gdfgdfg',
  },
  {
    id: '63',
    text: '6 6ss#dfs df sd 234 234 2 3dsfgdfgdfgdf gdf gdfgdfg',
  },
  {
    id: '__group_7',
    isGroupHeader: true,
    text: 'Beer',
  },
  {
    id: '70',
    text: '77 sd sd sd sdsdfsdgdsfgdfgdfgdf gdf gdfgdfg',
  },
  {
    id: '__group_8',
    isGroupHeader: true,
    text: 'Cigar',
  },
  {
    id: '80',
    text: '8     sdfs df sd fdgdsfgdfgdfgdf gdf gdfgdfg !',
  },
];

export const getGridRows =
  (isExpandedRef) =>
    ({startRow, endRow, successCallback}) => {
      // collapsing means hiding rows except for group headers and first row
      const isHeaderOrFirstRow = ({id, isGroupHeader}) => isGroupHeader || id.substring(1) === '0';

      const data = isExpandedRef.current ? rawData : rawData.filter(isHeaderOrFirstRow);

      const response = data.slice(startRow, Math.min(endRow, data.length));
      const lastRowIndex = endRow >= data.length ? data.length : undefined;

      successCallback(response, lastRowIndex);
    };
