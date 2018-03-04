const containerExample = () => {

  let colors = ['red', 'green', 'blue', 'orange', 'yellow', 'grey', 'pink', 'purple', 'BlueViolet ', 'CadetBlue', 'DeepPink', 'DeepSkyBlue', 'DarkTurquoise', 'IndianRed', 'MediumVioletRed', 'MidnightBlue', 'OrangeRed', 'PaleVioletRed', 'Salmon'];
  let fonts = ['Mina', 'Karma', 'Indie Flower', 'Comfortaa', 'VT323', 'Anonymous Pro', 'Nanum Myeongjo', 'Krona One', 'Cutive Mono', 'Nanum Brush Script', 'Permanent Marker', 'Courgette', 'Tangerine', 'Handlee', 'Kalam', 'Rock Salt', 'Reenie Beanie'];
  
  const Div = ({title, parragraph}) => (
    <div style={{ backgroundColor: colors[Math.floor(Math.random() * colors.length)], fontFamily: fonts[Math.floor(Math.random() * fonts.length)], padding:'10%'}}>
      <h1 style={{textAlign:'center'}}>{title}</h1>
      <p style={{ textAlign: 'center'}}>{parragraph}</p>
    </div>
  );

  const containerProps = {
    title: 'Este es un div con background-color random',
    parragraph: 'Y fuente random :D'
  };

  ReactDOM.render(
    <Div {...containerProps} />,
    document.getElementById('app')
  );

};

containerExample();
