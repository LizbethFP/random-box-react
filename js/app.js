const containerExample = () => {
  let colors = ['red', 'green', 'blue', 'orange', 'yellow', 'grey', 'black', 'purple'];
  let fonts = ['Mina', 'Karma', 'Indie Flower', 'Comfortaa', 'VT323', 'Anonymous Pro', 'Nanum Myeongjo', 'Krona One'];
  const Div = ({title, parragraph}) => (
    <div style={{ backgroundColor: colors[Math.floor(Math.random() * colors.length)], fontFamily: fonts[Math.floor(Math.random() * fonts.length)]}}>
      <h1>{title}</h1>
      <p>{parragraph}</p>
    </div>
  );

  const containerProps = {
    title: 'Este es un div con background random',
    parragraph: 'Y fuente random'
  };

  ReactDOM.render(
    <Div {...containerProps} />,
    document.getElementById('app')
  );

};

containerExample();
