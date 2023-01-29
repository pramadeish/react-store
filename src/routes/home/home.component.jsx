import Directory from "../../components/directory/directory.component";

const Home=()=> {

  const categories = [
    {
      id:1,
      title: 'Hats',
      imageurl: 'https://wallpaperaccess.com/full/1976241.jpg',
    },
    {
      id:2,
      title:'Jackets',
      imageurl: 'https://wallpapercrafter.com/desktop/17921-shirt-bads-jeans-jacket-style-4k.jpg',
    },
    {
      id:3,
      title:'Sneakers',
      imageurl: 'https://wallpapercrafter.com/desktop/20432-sneakers-shoes-white-4k.jpg',
    },
    {
      id:4,
      title:'kids',
      imageurl: 'https://images.pexels.com/photos/35188/child-childrens-baby-children-s.jpg?cs=srgb&dl=pexels-bess-hamiti-35188.jpg&fm=jpg',
    },
    {
      id:5,
      title:'suits',
      imageurl: 'https://wallpapercave.com/wp/wp2513418.jpg',
    }
  ]


  return (
    <Directory categories={categories}/>
  );
}

export default Home;