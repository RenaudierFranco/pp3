import { Form, Button, Jumbotron, Card, BSmall, Alert } from 'bootstrap-4-react'
import { Container } from 'bootstrap-4-react/lib/components/layout'
import { useState, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Services/Firebase/Firebase";
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';

const FormLogin = ( ) => {

<<<<<<< HEAD
  const { handleLoginSuccess, setUser, onLoginSuccess } = useContext(UserContext)
=======
  const { handleLoginSuccess } = useContext(UserContext)
>>>>>>> 14e9ec3ccf073fd25836d9edcc790f92ba158b72
  const [form, setForm] = useState({email: "", password: ""}) ;

  const getForm = (e) => {
    const {name, value } = e.target
      setForm({...form, [name]: value});
  }

  const logUser = (e) => {
    e.preventDefault()

    getDocs(collection(db, 'user')).then((snapshot) => {
      const users = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      const findUser = users.find((user) => user.email === form.email);
      if (findUser) {
<<<<<<< HEAD
        setUser(findUser);
        console.log('user logueado', findUser); // Cambiado a findUser
        if (findUser.password === form.password && findUser.email === form.email) {
          console.log('Credenciales correctas'); // Cambiado a 'Credenciales correctas'
          onLoginSuccess(); // Llama a la función proporcionada para manejar el inicio de sesión exitoso
=======
        if (findUser.password === form.password && findUser.email === form.email) {
          console.log('Credenciales correctas');
          handleLoginSuccess()
>>>>>>> 14e9ec3ccf073fd25836d9edcc790f92ba158b72
        } else {
          console.log('Credenciales incorrectas');
        }
      } else {
        console.log('Usuario no encontrado');
      }
    });

  }

  return(
    <Container className=" d-flex flex-column text-center align-items-center" w="100">
      <Jumbotron text="center" h="100" shadow p="3" mb="5" bg="light" rounded>
        <Form className="">
          <Form.Group>
            <label htmlFor="exampleInputEmail1">Email</label>
            <Form.Input name="email" type="email" id="exampleInputEmail1" placeholder="Enter email" onChange={getForm}/>
          </Form.Group>
          <Form.Group>
            <label htmlFor="exampleInputPassword1">Contraseña</label>
            {
              form.email.length < 5?
              <Alert dark>*******</Alert>
              :
              <Form.Input name="password" type="password" id="exampleInputPassword1" placeholder="Password" onChange={getForm}/>
            }
            
          </Form.Group>
          <Button className="m-3" primary outline type="submit" onClick={logUser}>Iniciar sesión</Button>
          <Button className="m-3" primary outline type="submit"><NavLink to='/FormRegister'
          style={{'textDecoration': 'none'}}>Nuevo usuario</NavLink></Button>
        </Form>
        <Card.Text className="text-center mt-3" style={{"color" : "#000000"}}><BSmall text="">Llegá donde querés estar, siempre Ⓡ</BSmall></Card.Text>
      </Jumbotron>
    </Container>
  )
}

export default FormLogin