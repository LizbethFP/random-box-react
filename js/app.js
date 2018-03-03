const containerExample = () => {
  const Div = ({title, parragraph}) => (
    <div>
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
