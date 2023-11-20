import { useState, useRef } from "react";

import { Container, Image, H1, Container2, Label, Input, Button, UserList } from "./styles.js";
import Peoples from "./images/image5.svg"
import Arrow from './images/image4.svg'
import Trash from './images/image3.svg'

function App() {

  const [users, setUsers] = useState([]);
  const InputName = useRef()
  const InputAge = useRef()

  function Addnewuser() {
    setUsers([...users, { id: Math.random(), name: InputName.current.value, age: InputAge.current.value }])
  }

  function Deleteuser(userId) {
    const newusers = users.filter((user) => user.id !== userId);

    
    setUsers(newusers)
  }

  return (

    <>

      <Container>
        <Image src={Peoples} alt="Peoples-image" />

        <Container2>
          <H1>Olá!</H1>

          <Label>Nome</Label>
          <Input ref={InputName} placeholder="Nome"></Input>

          <Label>Idade</Label>
          <Input ref={InputAge} placeholder="Idade" ></Input>

          <Button onClick={Addnewuser} >Cadastrar <img alt="arrow-image" src={Arrow} /></Button>

          <ul>
            {users.map(user => (
              <UserList key={user.id}>
                <p>{user.name}</p> <p>{user.age} </p>
                <button onClick={() => Deleteuser(user.id)}>
                  <img alt="Trash-image" src={Trash} /> </button>
              </UserList>
            ))}
          </ul>

        </Container2>

      </Container>
    </>
  )
}

export default App
