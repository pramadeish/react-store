import DirectoryItem from '../directory-item/directory-item.components';

import { DirectoryContainer } from './directory.styles';


const categories = [
  {
    id:1,
    title: 'Hats',
    imageUrl: 'https://wallpaperaccess.com/full/1976241.jpg',
    route:'shop/hats'
  },
  {
    id:2,
    title:'Jackets',
    imageUrl: 'https://wallpapercrafter.com/desktop/17921-shirt-bads-jeans-jacket-style-4k.jpg',
    route:'shop/jackets'
  },
  {
    id:3,
    title:'Sneakers',
    imageUrl: 'https://wallpapercrafter.com/desktop/20432-sneakers-shoes-white-4k.jpg',
    route:'shop/sneakers'
  },
  {
    id:4,
    title:'kids',
    imageUrl: 'https://images.pexels.com/photos/35188/child-childrens-baby-children-s.jpg?cs=srgb&dl=pexels-bess-hamiti-35188.jpg&fm=jpg',
    route:'shop/kids'
  },
  {
    id:5,
    title:'suits',
    imageUrl: 'https://wallpapercave.com/wp/wp2513418.jpg',
    route:'shop/suits'
  }
]



const Directory = () => {
  
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;