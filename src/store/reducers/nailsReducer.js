const initialState = {
  nails: [
    {
      name: 'My nails',
      file:
        'https://i.pinimg.com/474x/73/bc/35/73bc352a1859f5a43fb0f02a42cd7283.jpg',
      description: 'My very first nails, look into they and fell in love',
      date: '21st May 2020',
      id: 12345,
    },
    {
      name: 'Shiny ones',
      file:
        'https://cdn.shopify.com/s/files/1/0020/6979/0833/products/product-image-1200274265_1000x.jpg?v=1575327580',
      description: 'Those nails are shining really really strong',
      date: '9th July 2020',
      id: 92171,
    },
    {
      name: 'Shiny ones',
      file:
        'https://gfx.chillizet.pl/var/chillizet/storage/images/uroda-i-moda/paznokcie/modny-manicure-2019-milk-bath-nails.-sprawdz-jak-uzyskac-ten-efekt-17235/1647185-1-pol-PL/Modny-manicure-2019-Milk-Bath-Nails.-Sprawdz-jak-uzyskac-ten-efekt_article.jpg',
      description: 'Those nails are shining really really strong',
      date: '9th July 2020',
      id: 921712,
    },
  ],
};

const nailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      console.log('created');
      return state;

    case 'ADD_ITEM_ERROR':
      console.log('error', action.err);
      return state;

    case 'REMOVE_ITEM':
      console.log('removed');
      return state;

    case 'REMOVE_ITEM_ERROR':
      console.log('error', action.err);
      return state;

    case 'ADD_FILE':
      console.log('added');
      return state;

    case 'ADD_FILE_ERROR':
      console.log('error', action.err);
      return state;

    default:
      return state;
  }
};

export default nailsReducer;
