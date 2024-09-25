import { CameraIcon, VideoCameraIcon } from '@heroicons/react/24/outline'
import BoxButton from './BoxButton'

// Bir "BoxButton" bileşeni oluşturun ve farklı içerik iletmek için children prop'unu kullanın

export default function App() {
  return (
    <div className='space-y-4 p-8 max-w-sm mx-auto'>
      <BoxButton 
        icon={CameraIcon} 
        label="Yeni bir resim ekleyin" 
      />
      
      <BoxButton 
        icon={VideoCameraIcon} 
        label="Yeni bir video oluşturun" 
      />
    </div>
  );
}
