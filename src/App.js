function App() {
  const onClose = (e) => console.log('CLOSING', e)
  console.log('hi;')
  return (
    <div>
      <va-alert onFoo={() => console.log('foo')} onClose={onClose} closeable>
        <h3 slot="headline">This is an alert</h3>
          Foo
        </va-alert>
    </div>
  );
}

export default App;
