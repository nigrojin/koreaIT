function App() {
    console.log('App Loaded!');
  
    const [data, setData] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch('http://localhost:3000')
      .then(res => res.text())
      .then(result => setData(result))
      .catch(error => setError(error))
      .finally(() => setIsLoaded(true))
    }, [])
  
  
    if (error) {
      return <h1>Error!</h1>
    }
    if (!isLoaded) { // isLoaded === false
      return <h1>Loading...</h1>
    }
    return (
      <>
        <h1>백엔드에서 온 데이터</h1>
        <p>{data}</p>
      </>
    )
  }