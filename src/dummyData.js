const STORE = {
  
    users: [
        {
            id: 1,
            reviewsIds: [1, 3],
        }
    ],

    folders: [
        {
            folderId: 1,
            author: 1,
            title: 'favorites',
            savedPlacesIds: []
        }
    ],


    reviews: [
        {
            id: 1,
            author: 1,
            placeId: '1ck6cpc6a100003h5qu7jor4kf',
            placeName: "Koduos",
            placeCity: 'Condado',
            attributes: ["vegan", "coffee", "donuts"],
            addtionalComments: 'Good Vibes',
        },
        {
            id: 2,
            author: 1,
            placeId: '2ck6cpc6a100003h5qu7jor4kf',
            placeName: "Cayo Caribe",
            placeCity: 'Dorado',
            attributes: ["meat", "fish", "drinks"],
            addtionalComments: 'Fun Place!',
        }
    ]
}
export default STORE;