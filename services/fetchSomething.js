const getData = () => (
  {
    id: 1,
    note: 'ahdshkjshd',
    isPopUpVisible: true,
    isSuccessful: true,
  }
)



async function fetchSomething() {
  console.log('fetch');
   await getData()
  //   .then((res) => res.json())
  //   .then((data) => ({
  //     data: ['1', '2'],
  //     loading: false,
  //     err: []
  //   }))
  //   .catch((err) => ({
  //     err: ['You have error!']
  //   }))

  return (
    getData()
  )
}

export default fetchSomething