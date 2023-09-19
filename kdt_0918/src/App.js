
function App() {
    const users = [
        { id : 1, name : 'john', age : 25, vip : true },
        { id : 2, name : 'jane', age : 19, vip : false },
        { id : 3, name : 'alice', age : 30, vip : true },
        { id : 4, name : 'bob', age : 18, vip : false },
        { id : 5, name : 'charlie', age : 35, vip : true },
    ];
    let result = users.filter((user)=> {
       return user.vip == true;
    });

  return (
    <>
        {result.map((value, idx)=> {
            return <div key={value.id}>{value.name}</div>
        })}
    </>
  );
}

export default App;
