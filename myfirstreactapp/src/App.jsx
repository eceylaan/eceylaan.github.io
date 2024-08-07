import { useState } from 'react';
import './App.css'
import DashBoard from './componets/DashBoard';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const styles = {
  borderRadius: 90
}

const meyveler = [
  {
    id: 1,
    ad: 'Kavun'
  },
  {
    id: 2,
    ad: 'Şeftali'
  },
  {
    id: 3,
    ad: 'Çilek'
  },
  {
    id: 4,
    ad: 'Karpuz'
  },
];

function App() {
  const [isLogin, setLogin] = useState(false);

  const myName = 'Orhan Ekici';

  const meyveListesi = meyveler.map(
    meyve => <li 
      className={meyve.ad === 'Kavun' ? 'green' : 'black'}
      key={meyve.id}
      style={{ color: meyve.ad === 'Kavun' ? 'green' : 'black' }}
    >{meyve.ad}</li>
  );

  function handleClick() {
    setLogin(!isLogin);
  }

  return (
    // fragment - parçacık
    <>
      <h5>Meyveler</h5>
      <ul>{meyveListesi}</ul>

      {/* <h1>İlk React Projem</h1>
      <p>merhaba ben, {user.name}</p>
      <p><img
        className='img'
        style={styles}
        src={user.imageUrl} 
        width={user.imageSize * 2} alt="" /></p>
       */}
      <MyButton  color={'primary'}/>
      <MyButton  color={'seconadry'}/>
      <MyButton />
      <p><button onClick={handleClick}>Giriş Yap | Çıkış Yap</button></p>
      {isLogin ? <DashBoard /> : <LoginForm />}
    </> 
  )
}


function MyButton({color}) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>Count: {count}</button>
  )
}

function LoginForm() {
  return (
    <form>
      <p><input type="text" placeholder='kullanıcı adı' /></p>
      <p><input type="text" placeholder='şifre' /></p>
      <p><button >Giriş Yap</button></p>
    </form>
  )
}


export default App


