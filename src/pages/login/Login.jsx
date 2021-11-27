import React, { useState } from 'react';
import Dialog from '../../components/common/dialog/Dialog';
import Input from '../../components/common/fields/input/Input';
import Title from '../../components/common/title/Title';
import Button from '../../components/common/button/Button';
import './login.scss';

function Login({ login }) {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function reset() {
    setName("");
    setPassword("");
  }

  return (
    <div className="login">
      <Dialog style="short">
        <Title>LOG IN</Title>
        <Input label="USER ID:" size="wide" value={name} type="text" placeholder="Login" onChange={e => setName(e.target.value)} />
        <Input label="PASSWORD:" size="wide" value={password} type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <Button style="primary" onClick={() => login(name, password)}>LOG IN</Button>
        <Button style="negative" onClick={() => reset()}>RESET</Button>
      </Dialog>
    </div>
  )
}

export default Login;